# Frontend Dev Guidance

## ENV

- Set env value to .env.local & env.mjs, use env value from env.mjs

## Installation

Use the node package manager (npm) to install dependencies.

```bash
npm install
```

## Run Local Dev Server

```bash
npm run dev
```

## Naming Conventions

### File & Folder Naming

- Components → PascalCase → Example: Navbar.tsx, LoginForm.tsx
- Component folders → PascalCase → Example: /components/UserCard/
- Hooks → camelCase + prefix “use” → Example: useAuth.ts, useFetchTickets.ts
- Zustand stores → camelCase + suffix “Store” → Example: authStore.ts, ticketStore.ts
- Services (API calls) → camelCase + suffix “Service” → Example: userService.ts, streamService.ts
- Utilities / helpers → camelCase → Example: formatDate.ts, apiHandler.ts
- Types / interfaces → camelCase or PascalCase → Example: user.type.ts, Ticket.interface.ts
- Pages (Next.js) → lowercase-with-dash → Example: login/page.tsx, event-detail/page.tsx

### Variable & Function Naming

- Variables → camelCase → userData, ticketCount
- Functions → camelCase → handleSubmit, fetchUser
- Constants → UPPER_CASE_SNAKE → API_URL, DEFAULT_TIMEOUT
- Interfaces / types → PascalCase + suffix 'I' → interface ITicket, type IUserInfo
- Booleans → Prefix with is, has, or can → isLoading, hasError, canEdit

### React Component Conventions

- File name same as component → Navbar.tsx → Navbar
- Event handlers prefix with “handle” → handleClick, handleSubmit
- State variables follow [noun, setNoun] → [isOpen, setIsOpen]

### General Rules

- Use PascalCase for components and classes
- Use camelCase for variables, functions, hooks, and files (except React components)
- Use UPPER_CASE for constants
- Booleans always start with is, has, or can
- Keep names descriptive but concise
- One component per file
- Avoid deep folder nesting — prefer grouping by feature

## Git Branching

[Git Flow](https://excalidraw.com/#json=DcAYfKEcHB8h1AWkb4OhH,1LGUFd14mYMF09UyN9oawA)

- Feature (Create from Develop) → feature/<short-description> → feature/ticket-checkout
- Hotfix (Create from Main) → hotfix/<short-description> → hotfix/login-button
- Hotfix Version (Create from Main) → hotfix/<version> → hotfix/1.0.1
- Release (Create from Develop) → release/<version> → release/1.5.0

## Commit Messages

Format: <type>: description

##### Types

- feat → Introduce a new feature to the codebase
- fix → Fix a bug/issue in the codebase
- chore → Regular code maintenance
- docs → Create/update documentation

## VS Code

- Set env value to .env.local & env.mjs, use env value from env.mjs
- Please install eslint & prettier on your VS Code

##### VS Code Settings

```bash
{
  "editor.fontSize": 12,
  "editor.wordWrap": "on",
  "extensions.autoUpdate": false,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "diffEditor.ignoreTrimWhitespace": false,
  "git.confirmSync": false,
  "eslint.validate": ["javascript", "typescript"],
  "eslint.format.enable": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "eslint.codeAction.showDocumentation": {
    "enable": true
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.fixAll": "explicit",
    "source.organizeImports": "explicit"
  },
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "prettier.singleQuote": true,
  "prettier.semi": false,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "files.eol": "\n"
}

```

## License

[MIT](https://choosealicense.com/licenses/mit/)
