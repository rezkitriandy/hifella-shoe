# Frontend Dev Guidance

## Installation

Use the node package manager (npm) to install dependencies.

```bash
npm install
```

Set .env

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

- Feature (Create from Develop) → feature/<short-description> → feature/ticket-checkout
- Hotfix (Create from Main) → hotfix/<short-description> → hotfix/login-button
- Hotfix Version (Create from Main) → hotfix/<version> → hotfix/1.0.1
- Release (Create from Develop) → release/<version> → release/1.5.0

## License

[MIT](https://choosealicense.com/licenses/mit/)
