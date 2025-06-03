# Theme Builder

This is a custom theme builder and installer for Visual Studio Code / Cursor / Windsurf.

## Installation

```bash
npm install
```

### Auto Install

For all installed editors:

```bash
npm run refresh
```

Or individually:

```bash
npm run refresh:code
npm run refresh:cursor
npm run refresh:windsurf
```

### Manual Install

#### 0. Clean the dist folder if needed

```bash
npm run clean
```

#### 1. Build the theme file

```bash
npm run build
```

#### 2. Install the theme extension to all installed editors

```bash
npm run install
```

Or individually:

```bash
npm run install:code
npm run install:cursor
npm run install:windsurf
```

#### Uninstall the theme extension from all installed editors

```bash
npm run uninstall
```

Or individually:

```bash
npm run uninstall:code
npm run uninstall:cursor
npm run uninstall:windsurf
```
