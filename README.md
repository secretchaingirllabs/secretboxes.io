# Secretboxes.io
## 🚀 Project Structure

```
/
├── public/ 
│   ├── robots.txt
│   └── favicon.ico
│   └── logo.svg
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
│   └── styles/
└── package.json
```

### public/
The public directory contains static assets such as images and other non-code assets.

### src/components
Contains reusable components `astro` and (for this project) `svelte` components.

### src/layouts
Contains reusable page layouts.

### src/pages
Contains full pages. Pages is a special directory for Astro. Each
component in the pages directory is assigned a route based on its
file name. [See more](https://docs.astro.build/en/core-concepts/routing/)

### src/styles
Contains CSS stylesheets. In our case, global.css is used to import
Tailwindcss base styles.

## 🧞 Commands & Usage

After cloning the repo, all commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
|:----------------  |:-------------------------------------------- |
| `yarn`     | Installs dependencies                        |
| `yarn dev`     | Starts local dev server at `localhost:3000`  |
| `yarn build`   | Build your production site to `./dist/`      |
| `yarn preview` | Preview your build locally, before deploying |
