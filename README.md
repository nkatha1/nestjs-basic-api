# NestJS Basic API

A simple NestJS application demonstrating basic REST API principles with user endpoints.

## Table of Contents

- [Project Description](#project-description)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

---

## Project Description

This project is a beginner-friendly NestJS API that provides endpoints to:

- Return a simple greeting message.
- Retrieve a list of users.
- Retrieve individual users by ID.

The app uses NestJS’s modular architecture and dependency injection, making it easy to extend with more features like data persistence and authentication.

---

## Features

- Simple and clean REST API
- Modular architecture with controllers and services
- Error handling for non-existing users (returns HTTP 404)
- Written in TypeScript
- Live reload during development (`npm run start:dev`)

---

## Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- [npm](https://www.npmjs.com/) v8 or higher (comes with Node.js)
- Git (for version control)

---

## Installation

1. Clone the repository:

2. Navigate into the project directory.
    cd nestjs-basic-api
   Install dependencies:
   npm install
Running the App

To start the application in development mode with live reload:
npm run start:dev
By default, the app runs at http://localhost:3000
API Endpoints
Method	Endpoint	Description	Response Example
GET	/	Returns a greeting message	"Hello World!"
GET	/users	Returns an array of all users	[{"id":1,"name":"Alice"},{"id":2,"name":"Bob"}]
GET	/users/:id	Returns a user by ID	{"id":1,"name":"Alice"}
GET	/users/:id	User not found returns 404	{ "statusCode": 404, "message": "User with id X not found" }

Project Structure
nestjs-basic-api/
├── src/
│   ├── app.controller.ts        # Root controller handling '/'
│   ├── app.module.ts            # Main application module
│   ├── app.service.ts           # Root service providing greeting
│   ├── users/
│   │   ├── users.controller.ts  # Controller handling '/users' routes
│   │   ├── users.service.ts     # Service with user data and logic
│   ├── main.ts                  # Entry point of the application
├── package.json                 # Project metadata and scripts
├── tsconfig.json                # TypeScript configuration
└── README.md                   # Project documentation

Technologies Used

NestJS
 - Progressive Node.js framework

TypeScript
 - Typed JavaScript

Node.js
 - JavaScript runtime

   Contributing

Contributions are welcome! Please open issues or submit pull requests for any improvements.
License

This project is licensed under the MIT License. See the LICENSE
 file for details.

 


```bash
git clone https://github.com/nkatha1/nestjs-basic-api.git
