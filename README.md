# Nuxt 3 Firebase Project

This is a Nuxt 3 project that uses Firebase for authentication and database. Can deploy functions from /api to Firebase Functions.

## Env Setup

Create a `.env` file in the root of the project with the following variables from the firebase project:

```bash
# Local Development
MODE="development"
VUEFIRE_EMULATORS=true
FIREBASE_APPCHECK_DEBUG_TOKEN=""
# Firebase
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
FIREBASE_RECAPTCHA_KEY=""

# Firebase Admin
GOOGLE_APPLICATION_CREDENTIALS="service-account.json"
```

Download the `service-account.json` file from the firebase project and place it in the root of the project.
<https://console.firebase.google.com/>

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm run dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm run build
```

Locally preview production build:

```bash
# pnpm
pnpm run preview
```

## Used Libraries

- Typescript
- Framework: Nuxt+
  - Vue Router
  - Nuxt Vuefire
  - Nuxt Devtools
- Linter: Eslint
  - Nuxt Module
  - Typescript Plugin
  - Typescript Parser
  - Config Airbnb-Base/Typescript-Base
  - Plugin Import
  - Vue Parser
- State Management: Pinia
- UI Library: Vuetify
  - MDI Font
- Firebase
  - Auth
  - Vuefire
  - Firebase Admin
  - Firebase Functions
- Other Tools:
  - Concurrently
  - Nuxt
