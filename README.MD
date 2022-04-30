# Comente Agora web

Aplicativo de comentários em tempo real, com Login no Github usando OAuth e feito com Vite.js + Axios + Socket.io

## Tabela de conteúdos

- [Visão Geral](#visao-geral)
  - [O desafio](#o-desafio)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Tecnologias](#tecnologias)
  - [Oque eu aprendi](#oque-eu-aprendi)
  - [Desenvolvimento Continuo](#development-continuo)
  - [Recursos Úteis](#recursos-uteis)
- [Autor](#autor)
- [Reconhecimentos](#reconhecimentos)


## Visão Geral

### O desafio

O usuário deveria ser capaz de:

- Ver comentários ao vivo, na tela de login
- Se conectar ao aplicativo usando a sua conta do Github, com Oauth
- Enviar uma mensagem
- Ver a sua mensagem ao vivo no App

### Screenshot

![screen shot](./screenshot.jpg)

### Links

- Live Site URL: [Comente Agora Web](https://julio-henrique.github.io/comente-agora-web/)

## Meu processo

### Tecnologias

- Semantic HTML5 markup
- CSS modules
- SCSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS lib
- [Vite](https://vitejs.dev/) - Next Generation Front-End Tooling
- [Socket.io](https://socket.io/) - Bidirectional and low-latency communication for every platform

### Oque eu aprendi

Bom primeiro de tudo eu aprendi sobre o `Vite` e eu vi que realmente, ele é bem mais performático!
Ele cria o seu app bem mais rápido, para inicializar a aplicação `yarn dev` é bem mais rápido também.
Nada do que eu usei se compara com ele, eu com certeza vou usar nas minhas próximas aplicações.

Eu pela primeira vez usei o `Socket.io` e apesar de ser a primeira vez eu consegui entender um pouco de como usar e não fiquei muito perdido.
Você primeiro importa ele (bom primeiro de tudo você faz o download) e depois você cria um server com ele, *que eu usei na porta 4000 que era a mesma do meu server*
```tsx
import io from 'socket.io-client'

const socket = io('http://localhost:4000')

socket.on('new_message', (newMessage: Message) => {
    messageQueue.push(newMessage) // Aqui eu estou colocando a newMensage na messageQueue 
})
```

Algo bem interessante que também aconteceu foi que eu não sabia como fazer a 'typagem' de um form, pensei em, talvez é string? ou função vazia? E lembrei que não era nenhum dos dois, mas sim algo que já vem do próprio React.
É algo pequeno, mas eu gostei de ver o meu progresso com o Typescript, eu estou realmente melhorando nessa tecnologia!
```tsx
async function handleSendMessage(event: FormEvent) {
  event.preventDefault()
}
```


E para finalizar o `CSS Modules`. Eu já tinha feito algo parecido com o Styled Components então a sintaxe não foi uma surpresa e eu gostei bastante até, faz a aplicação ficar bem melhor com os estilos sendo bem mais especificos.
Um pequeno mostrando como fica melhor, só tem que lembrar de colocar `styles` sempre na frente de uma classe ou id
```tsx
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
```

### Desenvolvimento Continuo

Eu já estou decidido e vou focar em aprender mais sobre o Vite.js, essa ferramenta foi fantástica e vai me ajudar muito a ser mais rápida na hora de desenvolver, treinar, brincar e trabalhar a sério.

## Author

- Linkedin - [Julio Henrique](https://www.linkedin.com/in/julio-henriqueCS/)
- Email - juliohjesus@gmail.com

## Reconhecimentos

Esse é um projeto baseado no NLW-Heat da Rocketseat.

<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
