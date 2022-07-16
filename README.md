# Overview

- Project of `npx create-easyintegration-app` 
- This project is used to create Main app of Easy Integration project

# Steps
- Reference details are present [here](https://blog.shahednasser.com/how-to-create-a-npx-tool/)
```sh
# Creation
npx create-react-app . --template typescript
# Update Index.html, App.tsx
npx sb init
npm install @mui/material @emotion/react @emotion/styled --legacy-peer-deps
npm install @mui/icons-material --legacy-peer-deps
npm install styled-components
npm install @types/styled-components --save-dev
# Create bin/index.js

# Testing
npm start
npm test
npm run storybook
npm publish
```