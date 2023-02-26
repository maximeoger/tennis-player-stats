# Tennis Player Stats

# Instructions

##1. Clone the project
```bash
$ git clone https://github.com/maximeoger/tennis-player-stats.git
```

This is a project about using the tennis player api from a famous sport company to compare tennis players stats.
The app does not use docker for now so please make sure to have the following dependencies installed:

### Node v19.4.0
    
### PM2
PM2 is a deamon process manager [read more here](https://pm2.keymetrics.io/docs/usage/quick-start/)
```bash
$ npm install pm2@latest -g
# or
$ yarn global add pm2
```
### Makefile
```bash
# Using homebrew
$ brew install make

# On Ubuntu
$ sudo apt update
$ sudo apt install make
```

##2. Before running the project

Please make sure to rename `.env.example` files located in both **server/** and **front/** directories to `.env`

##3. How to run the project on local

Now that all the dependencies are installed on your local computer, please run the following command :
```bash
# Install the dependencies in front and server packages
$ make install
# Launch the project
$ make start
```

## How to stop the project
```bash
$ make stop
```