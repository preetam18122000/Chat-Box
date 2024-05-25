# Chat Box
A simple chat application built with Node.js and Socket.IO to understand the basics of socket programming. Users can chat in real-time, switch between pre-defined chat groups, and interact across multiple tabs as different users.
## Features
- Real-time messaging between multiple users
- Three predefined chat groups
- User-specific sessions
- Simple and clean user interface
- Messages are not stored; each session is fresh
## Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites
Make sure you have Node.js installed on your machine. If not, download and install it from [Node.js official website](https://nodejs.org/).
### Installation
- Clone the repository:
    ```bash
   git clone https://github.com/preetam18122000/Chat-Box
- Navigate to the project directory:
    ```bash
    cd chat-box
- Install the dependencies:
    ```bash
    npm install
### Running the Application
- Start the server:
    ```bash
    node index.js
- Open your browser and navigate to http://localhost:4000.
- Enter your username when prompted.
- Open another tab, navigate to the same URL, and enter a different username to simulate a different user.
  ### Usage
- You can chat in real-time between the two tabs (users).
- Switch between chat groups by clicking on the group names.
- Note that messages are not persisted; rejoining a group will not show previous messages.
### File Structure
- server.js: The main server file where the socket connections are handled.
- public/: Contains the client-side code.
- public/index.html: The main HTML file.
- public/styles.css: CSS for styling the chat interface.
- public/client.js: Client-side JavaScript for handling socket events.
### Built With
- Node.js - JavaScript runtime
- Socket.IO - Library for real-time web applications    
