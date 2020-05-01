# Labwork 2 + Environment variable testing

In this project I have modified my Labwork 2 task code for my personal interest to see how environment variables can be used in Angular project in a way that secret variables are not uploaded into git.

I've tested two methods:

- env.js file with secret variables (excluded from git)
- cookies to pass Heroku config variable into Angular frontend (not safe)

## Project setup

### Install Ionic CLI

```
npm install -g @ionic/cli
```

### Install dependencies defined in package.json

```
npm install
```

### Compiles and hot-reloads for development

```
ionic serve --lab
```

### Compiles and minifies for production

```
ionic build [options]
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://ionicframework.com/docs/cli/configuration).
