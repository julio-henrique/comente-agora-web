import { FormEvent, useContext, useState } from 'react'
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth'
import { api } from '../../services/api'
import toast, { Toaster } from 'react-hot-toast'

import styles from './styles.module.scss'

export function SendMessageForm() {
    const { user, signOut } = useContext(AuthContext)
    const [ message, setMessage ] = useState('')

    const toasting = () => {
        toast.success('Mensagem enviada com sucesso!', {
            style: {
              padding: '16px',
              fontSize: '16px',
            }
        })
    }

    async function handleSendMessage(event: FormEvent) {
        event.preventDefault()

        if (!message.trim()) {
            toast.error('Erro. Você fez uma mensagem vazia', {
                style: {
                  padding: '16px',
                  fontSize: '16px',
                }
            })
            return
        }

        setMessage('')
        toasting()
        await api.post('messages', { message })
    }

    return (
        <div className={styles.sendMessageFormWrapper}>
            <Toaster />
            <button onClick={signOut} className={styles.signOutButton}>
                <VscSignOut size="32" />
            </button>

            <header className={styles.userInformation}>
                <div className={styles.userImage}>
                    <img src={user?.avatar_url} alt={user?.name} />
                </div>
                <strong className={styles.userName}>{user?.name}</strong>
                <span className={styles.userGithub}>
                    <VscGithubInverted size="26" />
                    {user?.login}
                </span>
            </header>
            <form onSubmit={handleSendMessage} className={styles.sendMessageForm}>
                <label htmlFor="message">Mensagem</label>
                <textarea 
                    name="message"
                    id="message"
                    placeholder="Qual a sua expectativa para o evento?"
                    onChange={event => setMessage(event.target.value)}
                    value={message}
                />

                <button type="submit">Enviar Mensagem</button>
            </form>
        </div>
    )
}
