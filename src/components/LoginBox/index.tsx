import { useContext } from 'react'
import { VscGithubInverted } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth'

import styles from './styles.module.scss'


export function LoginBox() {
    const { signInUrl, user } = useContext(AuthContext)

    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe a sua mensagem</strong>
            <a href={signInUrl} className={styles.signInWithGithub} >
                <VscGithubInverted size="2.4rem" />
                Entre com Github
            </a>
        </div>
    )
}
