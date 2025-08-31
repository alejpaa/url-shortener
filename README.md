# URL Shortener - Monorepo

Un acortador de URLs for fun

- **Backend**: NestJS con TypeScript
- **Frontend**: Next.js y Tailwind CSS

## 🚀 Quick Start

### Instalación

```bash
# Instalar dependencias en todo el monorepo
bun install
```

### Desarrollo

```bash
# Ejecutar ambos (frontend + backend) en paralelo
bun run dev

# O ejecutar individualmente:
bun run dev:backend    # Solo backend (NestJS)
bun run dev:frontend   # Solo frontend (Next.js)
```

### Build

```bash
# Build completo
bun run build

# Build individual:
bun run build:backend
bun run build:frontend
```

### Linting

```bash
# Lint todo el proyecto
bun run lint
```

## 🏗️ Estructura del Proyecto

```
url-shortener/
├── apps/
│   ├── backend/          # API NestJS
│   │   ├── src/
│   │   ├── test/
│   │   └── package.json
│   └── frontend/         # App Next.js
│       ├── app/
│       ├── public/
│       └── package.json
├── packages/             # Paquetes compartidos
├── .vscode/              # Configuración VS Code
└── package.json          # Configuración del monorepo
```

## 🛠️ Stack Tecnológico

### Backend
- **Framework**: NestJS
- **Runtime**: Bun
- **Language**: TypeScript

### Frontend
- **Framework**: Next.js 15
- **UI**: React 19
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Bundler**: Turbopack