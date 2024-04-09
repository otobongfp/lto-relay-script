const axios = require("axios");
const fs = require("fs");
const JSZip = require("jszip");
var zip = new JSZip();
require("dotenv").config();
const seed = process.env.seed;

const { LTO } = require("@ltonetwork/lto");
const { Binary } = require("@ltonetwork/lto");
const { Message } = require("@ltonetwork/lto/messages");

const lto = new LTO("T");

async function readData() {
  try {
    const account = lto.account({ seed });
    const response = await axios.get(
      "http://localhost:3000/inboxes/3NCXE9bjM4o2SUd2E9FdinYVhHX66ykfWb4/E8vN5rLd8ozLsTnDCbyFhTtLmNsFzb89tDnfCVjaPvGz"
    );

    const data = response.data.data;
    const file = await zip.loadAsync(data, { base64: true });
    //const message = Message.fromJSON(response.data);
    //const binaryData = Buffer.from(data, "base64");
    //const message = Message.from(binaryData);
    console.log(file);
    console.log("Reached!");
    //const buffer = Buffer.from(message.data, "base64");

    // Write the decompressed data to a file
    fs.writeFileSync("./files/message.zip", file);

    console.log("File saved successfully.", message);
  } catch (error) {
    console.error("Error:", error);
  }
}

readData();
