# 🐼 Pandaflix

Neste projeto final para a conclusão do curso da Campinho Digital, desenvolvi um site com o framework React + Vue, tendo como referência alguns sites já existentes, como IMD, Netflix e o Rotten Tomatoes, com o intuito de deixá-lo o mais fidedigno possível.

Dentre as opções de API, optei pelo tema de filmes, que é uma das minhas paixões.

# 📑 Passo a Passo para Reproduzir
- Através do Postman, realizei alguns endpoints na API:

`Método POST` foi necessário utilizar as credenciais abaixo para conseguir minha API Key.

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
