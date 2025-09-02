# URL Shortener (Aun no pienso en un nombre)

Un acortador de URLs for fun

- **Backend**: NestJS con TypeScript
- **Frontend**: Astro y Tailwind CSS

## 🚀 Quick Start

### Instalación

```bash
# Instalar dependencias
bun install
```

### Desarrollo

```bash
# Ejecutar ambos (frontend + backend) en paralelo
bun run dev

# O ejecutar individualmente:
bun run dev:backend    # Solo backend (NestJS)
bun run dev:frontend   # Solo frontend Astro
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
│   │   └── package.json
│   └── frontend/         # Astro
│       ├── src/
│       ├── public/
│       └── package.json
├── .vscode/              # Configuración VS Code
└── package.json          # Configuración del monorepo
```

## 🛠️ Stack Tecnológico

### Backend
- **Framework**: NestJS
- **Runtime**: Bun
- **Language**: TypeScript

### Frontend
- **Framework**: Astro
- **Styling**: Tailwind CSS 4