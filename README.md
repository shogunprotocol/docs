# Reactive Hook System Documentation

This repository contains the documentation website for the Reactive Hook System, built with [Docusaurus](https://docusaurus.io/).

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/shogun-finance/reactive-docs.git
cd reactive-docs

# Install dependencies
npm install

# Start development server
npm start
```

The site will be available at `http://localhost:3000`.

## 📁 Project Structure

```
website/
├── docs/                          # Documentation content
│   ├── getting-started/           # Getting started guides
│   ├── concepts/                  # Conceptual documentation
│   ├── architecture/              # System architecture
│   ├── deployment/                # Deployment guides
│   ├── operations/                # Operations and monitoring
│   ├── guides/                    # How-to guides
│   ├── reference/                 # API reference
│   └── changelog/                 # Release notes
├── src/                           # React components and pages
├── static/                        # Static assets
├── docusaurus.config.ts          # Docusaurus configuration
├── sidebars.ts                    # Sidebar configuration
└── package.json                   # Dependencies and scripts
```

## 🛠️ Development

### Available Scripts

```bash
# Start development server with hot reload
npm start

# Build static site for production
npm run build

# Serve built site locally
npm run serve

# Clear Docusaurus cache
npm run clear

# Type check
npm run typecheck
```

### Environment Setup

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Configure environment variables for analytics, search, and deployment

## 🚀 Deployment

The site automatically deploys to GitHub Pages when pushing to the `main` branch via GitHub Actions.

### Manual Deployment

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
GIT_USER=<Your GitHub username> npm run deploy
```

## 🔗 Links

- **Live Documentation**: https://docs.reactive-hook.shogun.finance
- **GitHub Repository**: https://github.com/shogun-finance/reactive-hook
- **Shogun Finance**: https://shogun.finance
