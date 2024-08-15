# Web3-SIWE Authentication Application

[![Next.js](https://img.shields.io/badge/next.js-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

This is a Web3-SIWE authentication application built with Next.js, TypeScript, and Tailwind CSS. It leverages `wagmi`, `web3modal`, and `siwe` for Web3 interactions and Sign-In With Ethereum (SIWE) authentication. The project is configured with Prettier for code formatting and PostCSS for CSS processing.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)

- [Configuration](#configuration)
  - [Environment Variables](#environment-variables)

## Features

- **Next.js**: A React framework for building server-rendered or statically-generated applications.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Wagmi**: Reactivity for Ethereum apps.Type Safe, Extensible, and Modular by design. Build high-performance blockchain frontends.
- **Next-Auth**: A complete open-source authentication solution for Next.js applications.
- **React Query**: A library for fetching, caching, and updating asynchronous data in React applications.
- **Prettier**: An opinionated code formatter.
- **PostCSS**: A tool for transforming CSS with JavaScript plugins.
- **web3modal**: A library to easily connect to Ethereum providers.
- **siwe**: Sign-In With Ethereum protocol for authentication.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v18 or later)
- [pnpm](https://pnpm.io/) 

### Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:arunkumar201/web3-siwe.git
   cd web3-siwe
2. Install the dependencies:

```bash
npm install
# or
yarn install

Running the Development Server
``` bash
npm run dev
# or
yarn dev

Open http://localhost:3000 with your browser to see the result.

Building for Production
```bash
npm run build
# or
yarn build


## Configuration
Create a .env.local file in the root of your project to define environment variables:
```.env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXTAUTH_URL=http://localhost:3000
