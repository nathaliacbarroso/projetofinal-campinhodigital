# 🐼 Pandaflix

Este projeto foi desenvolvido como conclusão do curso da Campinho Digital, com o objetivo de criar uma aplicação front-end utilizando o React. A aplicação consome dados de uma API de filmes e exibe informações detalhadas, como título, diretor, data de lançamento e avaliação.

Neste projeto, a estilização do sistema foi pensada para refletir eventos e datas comemorativas de dezembro, trazendo uma atmosfera mais acolhedora com a inclusão de elementos natalinos e a homenagem ao Dezembro Vermelho. Além disso, usei como referência alguns sites já existentes, como IMD, Netflix e o Rotten Tomatoes, com o intuito de deixá-lo o mais fidedigno possível, apresentando os dados da API do meu jeitinho.


# 📑 Passo a Passo para Reproduzir
- Clone o repositório abaixo:
```git clone https://github.com/seu-usuario/campinho-digital-projeto-final.git```

- Instale as dependências:
```npm create vite@latest projeto-final --template react
cd projeto-final
npm install
npm install axios```

- Configure o acesso à API, através de endpoints no POSTMAN:

`Método POST` foi necessário utilizar as credenciais abaixo para conseguir a API Key.

```
https://ecom-back-strapi.onrender.com/api/auth/local
```

```
{
  "identifier": "campinho@mail.com",
  "password": "Campinho@12"
}
```

`MÉTODO GET` foi necessário para:
- Autorizar o uso da API com nossa chave.
- Listar todos os produtos: GET /movies
- Detalhes de um produto específico: GET /movies/:id

`JSON's` foram elaborados e enviados para a API, com o intuito de incluir novos filmes que não estavam disponíveis no catálogo.
