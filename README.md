# ⏱️ Timer App with Fog Background

Um timer minimalista para foco e produtividade, com suporte a **tema claro/escuro**, **background animado com Vanta.js (FOG)** e arquitetura JavaScript organizada em módulos.

O projeto foi desenvolvido com foco em **clareza de código**, **separação de responsabilidades** e **experiência do usuário**, servindo tanto como aplicação funcional quanto como projeto de portfólio.

---

## ✨ Funcionalidades

- ⏳ Timer com horas, minutos e segundos
- ▶️ Iniciar, pausar e resetar o tempo
- 🌗 Alternância entre tema claro e escuro
- 💾 Tema salvo no `localStorage`
- 🌫️ Background animado com **Vanta.js (FOG)**
- 🎉 Animação visual ao finalizar o timer
- 🧱 Código modular e organizado (ES Modules)

---

## 🧠 Arquitetura do Projeto

O código foi dividido em módulos, cada um com uma responsabilidade clara:

```txt
src/
 ├── index.js              # Ponto de entrada / UI / eventos
 ├── timer.js              # Lógica pura do timer
 ├── theme.js              # Controle de tema (dark/light)
 ├── fog/
 │    ├── fogConfig.js     # Paletas e configurações do fog
 │    └── fogBackground.js # Inicialização do Vanta.js
```

## Por que essa estrutura?

- Facilita manutenção

- Evita variáveis globais

- Permite reutilização de código

- Escala bem para projetos maiores

## 🛠️ Tecnologias Utilizadas

- HTML5

- CSS3

- JavaScript (ES Modules)

- Vanta.js (FOG)

- Three.js (dependência do Vanta)


## 🚀 Como rodar o projeto localmente

⚠️ O projeto utiliza `import/export`, então não funciona abrindo o HTML diretamente.

### Opção 1 — Live Server (recomendado)

- Instale a extensão Live Server no VS Code

- Clique com o botão direito no `index.html`

- Selecione Open with Live Server

### Opção 2 — Servidor simples
```python
python -m http.server
```

Depois acesse:
```
http://localhost:8000
```
## 🎨 Temas e Visual

- O tema selecionado é salvo no `localStorage`

- O background FOG se adapta automaticamente ao tema

- O foco visual permanece sempre no timer

## 📄 Licença

Este projeto é livre para uso educacional e pessoal.

## 👤 Autor
Desenvolvido por **Evandro Passaia**

- Facebook - [Evandro Passaia](https://www.facebook.com/evandro.passaiaze)
- Frontend Mentor - [@EvandroBaraka](https://www.frontendmentor.io/profile/EvandroBaraka)
- Linkedin - [https://www.linkedin.com/in/evandro-passaia-62b9a5269/](https://www.linkedin.com/in/evandro-passaia-62b9a5269/)

📌 Projeto criado com foco em aprendizado, organização de código e boas práticas em JavaScript.