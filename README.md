
# 🧱 Projeto Colisio - Angular + Docker (Produção)

Este é um projeto Angular preparado para ser executado em ambiente de produção utilizando **Docker Compose** com **Nginx**. Abaixo está o passo a passo para gerar o build e subir a aplicação.

---

## 📦 Pré-requisitos

Antes de iniciar, certifique-se de ter os seguintes softwares instalados:

- [Node.js](https://nodejs.org/) (usado apenas localmente para gerar o build Angular)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 🚀 Passo a passo para subir em produção

### 1. Parar containers antigos (se houver)

```bash
docker compose down
```

---

### 2. Gerar o build de produção do Angular

```bash
npm install
npm run build -- --configuration production --base-href=/
```

> O build será gerado na pasta: `dist/colisio`

---

### 3. Build da imagem Docker

```bash
docker compose build --no-cache
```

---

### 4. Subir a aplicação

```bash
docker compose up -d
```

---

### 5. Acessar no navegador

A aplicação estará disponível em:

```
http://IP_EXTERNO:8080
```

---

## 🛑 Parar a aplicação

Para parar e remover os containers:

```bash
docker compose down
```

---

## 📁 Estrutura esperada do projeto

```
colisio/
├── dist/
│   └── colisio/
├── src/
├── nginx.conf
├── Dockerfile
├── docker-compose.yml
├── angular.json
├── package.json
└── README.md
```

---

## 📝 Observações

- A flag `--base-href=/` é importante para o roteamento funcionar corretamente com Nginx.
- O `nginx.conf` deve estar configurado para servir corretamente o Angular, incluindo o fallback para `index.html` em rotas SPA.

---

## 👨‍💻 Autor

Slaython Gleyson – [colisio.co](https://colisio.co)  
Contato: colisio.dev@gmail.com

---# new-colisio
