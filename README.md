## Frontend Setup

### `Vite` used to:
- lightweight frontend webserver for development
- build folder for static content `(/dist)` for production (e.g. uploading to S3 bucket)
  - web pages can't read Typescript, so it converts any TS files to JS along with any HTML and CSS files

### Getting Started with `Vite`

- `npm create vite@latest`

### Running frontend Vite server

- `npm run dev`

Vite vs npm init

- Vite creates web server for frontend
- npm init - just creates a project, but no web server

`Commands`

Inside project-lock.json

`npm run build` - generates `dist` folder that is plain html, css, js that can be then be uploaded to s3 (you're not allowed to upload like typescript files to s3)