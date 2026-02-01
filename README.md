🚗 Sistema de Cadastro de Veículos
Este é um projeto Full Stack desenvolvido para gerenciar o registro de automóveis. A aplicação permite que o usuário cadastre novos veículos através de um formulário e visualize a listagem completa em tempo real, integrando um front-end dinâmico com uma API robusta e banco de dados.

🚀 Tecnologias Utilizadas
Back-end
Node.js: Ambiente de execução para o servidor.

Express: Framework para a criação das rotas da API.

SQL (MySQL/PostgreSQL): Banco de dados para persistência das informações.

Dotenv: Gerenciamento de variáveis de ambiente (segurança).

Front-end
HTML5 & CSS3: Estruturação e estilização da interface.

JavaScript (Vanilla): Manipulação do DOM e consumo da API via fetch.

🛠️ Funcionalidades
[x] Cadastro de Veículos: Interface intuitiva para enviar dados do carro para o servidor.

[x] API REST: Endpoints estruturados para criar (POST) e listar (GET) veículos.

[x] Conexão com Banco de Dados: Armazenamento seguro de todos os registros.

[x] Listagem Dinâmica: Os carros cadastrados aparecem automaticamente na lista sem necessidade de recarregar a página manualmente.

📂 Estrutura do Projeto
O projeto está dividido entre o servidor (back-end) e a interface (front-end):

Plaintext
├── backend/
│   ├── server.js      # Configuração do Express e rotas
│   ├── database.js    # Conexão com o banco de dados SQL
│   └── package.json   # Dependências do Node
├── frontend/
│   ├── index.html     # Página principal
│   ├── style.css      # Estilização
│   └── script.js      # Lógica de consumo da API
└── README.md
⚙️ Como executar o projeto
Clone o repositório:

Bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
Configure o Back-end:

Entre na pasta backend.

Instale as dependências: npm install.

Configure suas credenciais do banco de dados no arquivo .env.

Inicie o servidor: npm start.

Inicie o Front-end:

Basta abrir o arquivo index.html no seu navegador.

👨‍💻 Autor
Pedro Ezequiel

LinkedIn: https://www.linkedin.com/in/pedro-ezequiel-freire-lima-278b85381/

Instagram: @pedroezequiel.10
