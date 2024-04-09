### LTO Relay Script

The LTO Network has a relay service that allows two wallet addresses to communicate with each other.

This project contains a simple node.js application that helps you test how the relay service works.

## Getting Started

- yarn install - to install the dependencies
- create a .env file with the seed phrase of your testnet wallet e.g seed="YOUR SEED PHRASE"
- node app.js - To run the app.js file which contains the directives to send a zipfile via the relay

Note:

- The recipient is hardcoded in the app.js, you can easily update it with another testnet wallet address.
- Have a version of the relay server running and update the url in the app.js file or use [lto public relay](https://relay.lto.network/).
