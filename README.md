`Vite` - Does two things
- lightweight frontend webserver (for development)
- build static content for production

- Get Started with: `npm create vite@latest`
- Only used during development (when going to production, build it with Vite then upload the build to S3)
  - But Vite itself will not exist in S3, just the files that exist
- "Builds" static content (i.e. converts typescript to javascript)

Vite vs npm init

- Vite creates web server for frontend
- npm init - just creates a project, but no web server


`Commands`

Inside project-lock.json

`npm run build` - generates `dist` folder that is plain html, css, js that can be then be uploaded to s3 (you're not allowed to upload like typescript files to s3)