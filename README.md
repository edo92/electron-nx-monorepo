<h1 style="text-align: center;">Electron Nx-Monorepo</h1>
<p style="text-align: center">Electron app boilderplate using React, Electron-Forge</p>

<br/>

## Clone the repository

```bash
git clone https://github.com/edo92/electron-nx-monorepo.git
```

<br/>

## Install dependencies

```bash
# or using yarn
yarn install

# or using npm
npm install
```

<br />

## Start

Start electron application for development

```bash
yarn dev
```

<br />

## Lint

Check individual project code linting using ESLint

```bash
yarn nx lint <main | preload | renderer>
```

<br />

## Package

Package Electron app with OS-specific bundles

- .app, .exe etc

```bash
yarn package
```

<br />

### TODO:

- replace tools/webpack with nx workspace webpack config