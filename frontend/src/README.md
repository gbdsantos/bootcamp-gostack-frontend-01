<p align="center">
    <img alt="GoStack" src="https://ap.imagensbrasil.org/images/2020/04/09/banner-bootcamp-gostack-11.png" />
</p>

## :rocket: Front-end with <span style="color:deepskyblue;">ReactJS</span>

First **ReactJS** project **configurated from zero** of the **second week(F 02)** of BootStamp GoStack 11.

// Add explosion mind gif here 

Project completed on 09/04/2020.

## :gear: Getting Started

```Bash
# Install dependencies
yarn install

# Run application
yarn dev
```
> Access the URL in your browser http: // localhost: 3333


## Walkthrough

1. Initial Structure
```Bash
# Structure folders
mkdir bootcamp-gostack-reactjs-02/frontend
cd bootcamp-gostack-reactjs-02/
git init

# Inicialize project
cd frontend/
yarn init -y # Inicialize project with package.json
mkdir src
mkdir public

# Install React
yarn add react react-dom

# Create index.html file
touch public/index.html 
```

2. Configure Babel
```Bash
# Add dependencies
yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli

# Create Babel config file
touch babel.config.js

# Create file
touch src/index.js

# Add more dependencies
yarn add @babel/cli

# Transpile file with Babel
yarn babel src/index.js --out-file public/bundle.js
``` 

3. Configure Webpack
```Bash
# Create Webpack config file
touch webpack.config.js

# Add dependency
yarn add babel-loader

# Transpile files with Webpack
yarn webpack --mode development

# Add dependency
yarn add webpack-dev-server -D

# Auto transpile files on Webpack
yarn webpack-dev-server --mode development
```

4. Working with CSS and Images
```Bash
# Webpack CSS Loaders
yarn add style-loader css loader -D

# Webpack File Loader
yarn add file-loader
```

## :man_astronaut: Author

**Guilherme Bezerra** ©️

[![github](http://ap.imagensbrasil.org/images/2018/12/10/github-logo-1.png) ](http://www.github.com/gbdsantos)
[![gitlab](http://ap.imagensbrasil.org/images/2018/12/10/gitlab-32.png)](https://gitlab.com/gbdsantos1)
[![linkedin](http://ap.imagensbrasil.org/images/2018/12/10/linkedin-1.png)](https://www.linkedin.com/in/gbdsantos/)