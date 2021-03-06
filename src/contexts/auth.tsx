import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../services/api'

type User = {
    id: string
    name: string
    login: string
    avatar_url: string
}

type AuthContextData = {
    user: User | null
    signInUrl: string
    signOut: () => void
}

export const AuthContext = createContext({} as AuthContextData)

type AuthProvider = {
    children: ReactNode
}

type AuthResponse = {
    token: string
    user: {
        name: string
        avatar_url: string
        id: string
        login: string
    }
}

export function AuthProvider(props: AuthProvider) {
    const [ user, setUser ] = useState<User | null>(null)

    const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=9f1aac25f00fc76008f0`

    async function signIn(githubCode: string) {
        const response = await api.post<AuthResponse>('authenticate', {
            code: githubCode
        })

        const { token, user } = response.data
        
        localStorage.setItem('@comenteAgora:token', token)

        api.defaults.headers.common.authorization = `Bearer ${token}`

        setUser(user)
    }

    function signOut() {
        setUser(null)
        localStorage.removeItem('@comenteAgora:token')
    }

    useEffect(() => {
        const token = localStorage.getItem('@comenteAgora:token') 
        
        if (token) {
            api.defaults.headers.common.authorization = `Bearer ${token}`

            api.get<User>('profile').then(res => {
                setUser(res.data)
            })
        }
    }, [])

    useEffect(() => {
        const url = window.location.href
        const hasGithubCode = url.includes('?code=')

        if (hasGithubCode) {
            const [ urlWithoutCode, githubCode ] = url.split('?code=')

            window.history.pushState({}, '', urlWithoutCode)

            signIn(githubCode)
        }
    }, [])
    
    return (
        <AuthContext.Provider value={{ signInUrl, user, signOut }}>
            {props.children}
        </AuthContext.Provider>
    )
}
