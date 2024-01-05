# Notes App

## Requirements

For development, you will only need Node.js and a node global package,NPM/Yarn, installed in your environment.

### Node

- #### Reason for using nodeJs
  
  JavaScript Everywhere: Node.js allows developers to use JavaScript for both server-side and client-side scripting. This unification simplifies development and promotes code reusability.
  Asynchronous Non-blocking I/O: Node.js is designed to handle asynchronous operations efficiently, making it well-suited for applications that require high concurrency, such as real-time applications, chat applications, and online gaming.
  Fast Execution: Node.js is built on the V8 JavaScript engine, which is known for its high-performance execution. It compiles JavaScript code to machine code, providing fast and efficient runtime performance.
  Large Ecosystem: Node.js has a vast ecosystem of open-source libraries and modules available through npm (Node Package Manager). This extensive library of packages simplifies development, as developers can easily find and use existing solutions.
  Community Support: Node.js has a large and active community of developers, resulting in continuous improvements, updates, and a wealth of online resources. This strong community support fosters collaboration and problem-solving.
  Scalability: Node.js is designed with scalability in mind. Its event-driven, non-blocking architecture allows it to handle a large number of simultaneous connections efficiently, making it suitable for scalable network applications.
  Cross-Platform Development: Node.js is cross-platform and runs on various operating systems, including Windows, macOS, and Linux. This cross-platform compatibility simplifies deployment and hosting.
  Microservices Architecture: Node.js is well-suited for building microservices architectures, enabling developers to create modular and easily maintainable applications.

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.13.2

    $ npm --version
    8.19.2

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

---

## Install

    $ git clone https://github.com/AnkitNayan83/speer_assignment
    $ cd speer_assignment
    $ npm install

## Configure app

create a .env file and add your
- JWT_SECRET;
- DATABASE_URL (you can create a MongoDB cluster by visiting [mongoDb atlas](https://www.mongodb.com/cloud/atlas/register) )

## Running the project

    $ npm run dev

## Testing Api

- In order to test api install [postman](https://www.postman.com/) and then import this (api test file)[https://drive.google.com/file/d/12ZFBZFUQZ7AcVt3CGLeAHtQsplDPSiw3/view?usp=sharing]
