# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## 🔒 Website Admin System

An admin panel has been integrated to allow live content editing across the portfolio with discreet owner-only access:

### How to Access the Admin Page:
1. **At the bottom of any page (Footer)**:
   - Next to the copyright notice at the bottom of the footer, there is a subtle secret lock button: `🛡️ / 🔒`.
   - Alternatively, **triple-click** the copyright text at the bottom.
2. **Keyboard Shortcut**:
   - Press `Ctrl + Shift + A` (or `Cmd + Shift + A` on Mac) anywhere on the website.
3. **Direct URL**:
   - Navigate to `/admin`.

### Passcode:
- **Default Passcode**: `admin123`
- You can change this passcode at any time under the **Settings & Backup** tab in the Admin Dashboard.

### Features:
- **Profile & Hero**: Edit name, tagline, availability status, introduction bio, about section story, and contact/social links.
- **Projects Manager**: Add, edit, delete, filter, and mark projects as featured (live demos, GitHub links, performance scores).
- **Media & Music**: Manage audio tracks (playback files and titles), YouTube videos with live thumbnail previews, playlists, and social feeds.
- **Testimonials & Roadmap**: Add client reviews and track in-progress projects with progress percentage bars.
- **Managed Clients & Skills**: Edit social clients, brands, services, and technical expertise cards.
- **Data Persistence & Backups**: Edits auto-save to `localStorage`. You can download a one-click `.json` backup file or restore from a backup anytime.
- **Owner-Only Visibility**: When logged out, regular visitors only see a standard website. When authenticated, an admin toolbar stays docked at the bottom for quick access.

