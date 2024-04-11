require("dotenv").config();

const { LTO } = require("@ltonetwork/lto");
const { Binary } = require("@ltonetwork/lto");
const { Relay, Message } = require("@ltonetwork/lto/messages");

const fs = require("fs");
const seed = process.env.seed;

const lto = new LTO("L");
//lto.relay = new Relay("https://relay.lto.network/");
lto.relay = new Relay("http://localhost:3000/");

const pathToZipFile = `${__dirname}/files/Tile.zip`;

async function sendZipFile() {
  try {
    const zipFile = fs.readFileSync(pathToZipFile);

    const sender = lto.account({ seed });
    const recipient = "3NCXE9bjM4o2SUd2E9FdinYVhHX66ykfWb4";

    let message;

    if (sender && recipient) {
      message = new Message(zipFile).to(recipient).signWith(sender);
    } else {
      console.log("provide the signer and recipient");
    }

    // await message.toBinary();
    await lto.relay.send(message);
    //await lto.anchor(account, message.hash);
    //console.log(base64EncodedZip);
    console.log("Message sent successfully!");
  } catch (error) {
    console.error("Error sending message:", error);
  }
}

sendZipFile();
