# ripley-backend

Prueba tecnica para MDP Consulting / Ripley Perú con React, Tailwindcss, Node, ExpressJs, PostgreSQL, Sequelize, Netlify y Heroku

## Express Router and Routes

### Clients EndPoints

| Route            | HTTP Verb | Route Middleware | Description                 |
| ---------------- | --------- | ---------------- | --------------------------- |
| /api/clients     | GET       |                  | Get all clients             |
| /api/clients/avg | GET       |                  | Get all clients age average |
| /api/clients     | POST      |                  | Create new client           |

### Clients modeling

| id               | name      | surname          | born                        |
| ---------------- | --------- | ---------------- | --------------------------- |
| PK - Integer     | String    | String           | Dateonly             |

