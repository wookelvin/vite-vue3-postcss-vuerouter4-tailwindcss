# WorshipConnect.Website

Built using the following technologies

- Vite
- Vue3
- Typescript
- TailwindCSS
- PostCSS (rather than Sass/scss)
- VueRouter4

Will not use

- Vuex (in place of using Compositional API instead)

Other notes

- does not come with a debugger in browser

## Initialization

```bash
npm init @vitejs/app . --template vue-ts
npm i 

# install tailwind
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p

# install it with vue-router 4
npm install vue-router@4
```

Now add Pages directory and router directory

```bash
# to start dev work
npm run dev

# to build
npm run build

# to serve the build
npm run serve

# Add the other PostCSS Plugins
npm install postcss-import postcss-nested
```

## Issues

- when updating CSS/vite, it's actually quite slow
- had to install postcss extension for VS Code