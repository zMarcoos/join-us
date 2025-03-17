# 📌 JoinUS

Aplicativo simples para gerenciamento de participantes em um evento, desenvolvido com **React Native**.

## 📸 Demonstração

> Em breve...

## 🚀 Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## 📦 Instalação

Clone o repositório e instale as dependências:

```sh
# Clone o repositório
git clone https://github.com/zMarcoos/join-us.git

# Acesse a pasta do projeto
cd join-us

# Instale as dependências
npm install
# ou
yarn install
```

## ▶️ Como Executar

Para rodar o projeto no Expo:

```sh
npx expo start
```

Para rodar no emulador Android/iOS:

```sh
npx react-native run-android
# ou
npx react-native run-ios
```

## ✨ Funcionalidades

- 📋 **Adicionar participantes** digitando um nome e pressionando o botão `+`.
- ❌ **Remover participantes** clicando no botão `-`.
- 🔍 **Evita duplicatas**: impede adicionar participantes com o mesmo nome.
- 🛑 **Confirmação de remoção** antes de excluir um participante.
- 📃 **Lista dinâmica**: exibe os participantes em uma `FlatList`.
- 🚨 **Mensagens de alerta** para erros e confirmações.
