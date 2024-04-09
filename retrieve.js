const axios = require("axios");
const fs = require("fs");
const JSZip = require("jszip");
const { LTO } = require("@ltonetwork/lto");
const { Message } = require("@ltonetwork/lto/messages");

require("dotenv").config();
const seed = process.env.seed;

const lto = new LTO("T");

async function readData() {
  try {
    const response = await axios.get(
      "http://localhost:3000/inboxes/3NCXE9bjM4o2SUd2E9FdinYVhHX66ykfWb4/h3fRgSu6QgXT82QkYwcmJR79wKCJvPBGpbX8XExonGY"
    );

    //const base64EncodedData = response.data.data.slice(7);

    // const binaryData = Buffer.from(base64EncodedData, "base64");
    // console.log(binaryData);
    const message = Message.from(response.data);

    const binaryData = message.data; // Assuming message.data contains the binary data
    const buffer = Buffer.from(binaryData);

    // const zip = new JSZip();
    // zip.file("message", buffer, { base64: true });

    // // Generate the zip file asynchronously
    // const zipData = await zip.generateAsync({ type: "nodebuffer" });
    fs.writeFileSync("./files/ownables.zip", buffer);

    console.log("File saved successfully.");
  } catch (error) {
    console.error("Error:", error);
  }
}

readData();
