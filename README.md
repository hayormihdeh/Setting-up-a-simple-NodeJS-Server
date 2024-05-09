# Node.js HTTP Server

This is a simple Node.js server created using the core `node:http` module. It is designed to handle multiple concurrent requests and respond with a message after a random delay, simulating asynchronous operations without blocking the server.

## Features

- Handles multiple concurrent requests efficiently.
- Responds to each request after a random delay, simulating asynchronous operations.
- Configured to handle CORS to allow cross-origin requests.
- Provides a GET route that returns information about the user's CPU and OS.

## Prerequisites

- Node.js installed on your machine.

## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running:
4. Start the server by running:
5. The server will now be running and listening for requests on port 3000 by default.

## Usage

You can make GET requests to the following endpoint to get information about the user's CPU and OS:

url http://localhost:3000/userinfo
