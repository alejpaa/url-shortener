# URL Shortener - Monorepo

Un acortador de URLs moderno construido con un monorepo que incluye:

- **Backend**: NestJS con TypeScript
- **Frontend**: Next.js 15 con React 19 y Tailwind CSS

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

### Testing

```bash
# Ejecutar tests del backend
bun run test

# Tests end-to-end
bun run test:e2e
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
├── packages/             # Paquetes compartidos (futuro)
├── .vscode/              # Configuración VS Code
└── package.json          # Configuración del monorepo
```

## 🛠️ Stack Tecnológico

### Backend
- **Framework**: NestJS
- **Runtime**: Bun
- **Language**: TypeScript
- **Testing**: Jest

### Frontend
- **Framework**: Next.js 15
- **UI**: React 19
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Bundler**: Turbopack

## 📋 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `bun run dev` | Ejecuta frontend + backend en paralelo |
| `bun run dev:backend` | Solo backend en modo desarrollo |
| `bun run dev:frontend` | Solo frontend en modo desarrollo |
| `bun run build` | Build completo del proyecto |
| `bun run lint` | Linting en todo el proyecto |
| `bun run test` | Tests del backend |
| `bun run typecheck` | Verificación de tipos TypeScript |
| `bun run clean` | Limpia node_modules y dist |

## 🔧 Configuración del Entorno

Este proyecto está configurado para funcionar óptimamente en VS Code con:

- **ESLint** para linting
- **Prettier** para formateo
- **TypeScript** para tipado estático
- **Tailwind CSS** para autocompletado de estilos

### Extensiones Recomendadas

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

## 📝 Notas de Desarrollo

- El proyecto usa **Bun** como runtime y package manager
- Los workspaces están configurados para compartir dependencias
- Configuración de TypeScript optimizada para cada app
- ESLint configurado con reglas modernas
- Hot reload habilitado en desarrollo

Este proyecto fue creado usando Bun. [Bun](https://bun.sh) es un runtime JavaScript rápido y todo-en-uno.
