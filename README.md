<!-- GITHUB LINK https://github.com/Digital-Gym/WT-0015641 -->
<!-- SEARCH for deploy on the repo -->

<div align='center'>
  <a href="https://github.com/Digital-Gym/WT-0015641"><h1>Plov Saver</h1></a>
  <div align='center'>
    <img align='center' src="https://github.com/Digital-Gym/WT-0015641/blob/main/public/images/plov-icon.png" width=400>
  </div>
  
  <i>🥗Find out how many portions of pilaf your dreams are worth⭐️</i>
</div>


## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Deploy](#deploy)


## Introduction

This is a simple website written in ExpressJS + Pug for the Web Technology module. With the help of this site, you can find out how much your dreams cost in portions of pilaf.\
\
*💸Main currency being used is USD, so we take 1 pilof to be 2.40$*

## Features

You can:
- **Calculate dreams**
    - Get the list of dreams on main page *(click the a dream card to use)*
- **Manage dreams**
    - Create
    - Delete
    - Update

## Folder Structure
```
project-root/
│
├── controllers/
│ ├── index.js
| └── users/
│    ├── index.js
│    ├── create.js
│    ├── update.js
│    └── delete.js
│
├── services/
│ ├── index.js         # empty file (in case in the future we will need backend computations on the main page)
| └── users/
│    ├── create.js     # backend logic for create a new dream. Note: calls after middleware of library: multer
│    ├── update.js     # backend logic for updating a dream record
│    └── delete.js     # backend logic for deleteing a dream record + delete photo of record
│
├── public/
│ ├── css/
│    ├── slick/         # library css files (for carousel)
│    ├── main.css       # base css with font, variables setup
│    ├── index.css      # css file for the main view
│    ├── users.css      # css file for manage dreams view
│    └── create.css     # css file for add a dream view
│ ├── js/
│    ├── slick/          # library js files (for carousel)
│    ├── carousel.js     # js logic for main view
│    ├── users.js        # js logic for manage dreams view
│    ├── playMusic.js    # little play music script (Easter egg)
│    └── create.js       # js logic for add a dream view
│ ├── images/
│ └── sound/
│
├── routes/
│ ├── index.js           # for routing the main page
│ └── users/
|     └── index.js       # routes that starts with user/ + [/, /create] (not REST API calls)
│
├── views/
│ ├── index.pug          # pug template for main view
│ └── users/
│    ├── index.pug       # dream management view
│    └── create.pug      # create dream view 
│
├── app.js               # entry point
└── ...
```

Here I route incomming view change requests with routes/ folder and incoming API calls with controllers, which then gives it to the services/

## Deploy

1. Clone the repo
2. Go to repo's folder
3. ```npm i```
4. ```node app```
5. Use Docker/Systemd or devops tool to make your project consistant

*Note: You need Node.js to be installed on your machine*
