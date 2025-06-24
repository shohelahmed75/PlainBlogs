# PlainBlogs

A lightweight, minimalist blogging platform built with Node.js and Express.js.

## Overview

PlainBlogs is a simple yet functional blog application designed to provide essential blogging capabilities with a clean,
distraction-free interface. This project demonstrates the implementation of RESTful API principles and server-side
rendering using modern JavaScript.

## Features

- **Content Management**: Create, view, edit, and delete blog posts
- **Clean Interface**: Minimalist design focused on content
- **Responsive Layout**: Accessible on various devices
- **Persistent Storage**: Blog posts stored in JSON format

## Technology Stack

- **Backend**: Node.js, Express.js
- **View Engine**: EJS (Embedded JavaScript)
- **Data Storage**: JSON file system
- **Frontend**: HTML, CSS, JavaScript
- **Dependencies**: body-parser, fs

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/PlainBlogs.git
   cd PlainBlogs
   ```

2. Install dependencies:
   ```shell
   npm install
   ```

3. Start the server:
   ```shell
   node main.js
   ```

4. Access the application at [http://localhost:3000](http://localhost:3000)


## API Endpoints

- `GET /` - Home page displaying all blogs
- `GET /new` - Form to create a new blog post
- `GET /blog/:id` - View a specific blog post
- `GET /edit/:id` - Edit a specific blog post
- `POST /save` - Save a new blog post
- `POST /edited/:id` - Update an existing blog post
- `POST /delete` - Delete a blog post

## Development

This project was created to practice and showcase backend development skills. Contributions are welcome through pull requests.
