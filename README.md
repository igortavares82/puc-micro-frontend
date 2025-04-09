# Pré-requisitos
Este pequeno exemplo foi baseado neste [artigo](https://adeesh.hashnode.dev/micro-fe-with-iframes-and-postmessages). Não se trata de uma implementação 100% fidedígna, houve algumas adaptações, o que não exclui a necessidade de ler o artigo em que este exemplo se baseia.
Antes de iniciar, certifique-se de que node.js esteja instalado.

# Antes de testar a aplicação
Nas seguintes pastas, via command line, execute os passos indicados

- post-transport
    - cd post-transport
    - npm link

- componente-one
    - cd component-one
    - npm install
    - npm link post-transport
    - npm start

- container
    - cd container
    - npm install
    - npm link post-transport
    - npm start

Para acessar a aplicação, vá ao browser e abra o endereço http://localhost:3000
