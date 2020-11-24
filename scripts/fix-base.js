const fs = require("fs")
const manifest = require("../build/asset-manifest.json")
const mainFileName = "build" + manifest.files["main.js"]

let fileBuffer = fs.readFileSync(mainFileName, "utf8")
const fixedOutput = fileBuffer.replace(
  'a.p+"static',
  'document.baseURI+"static'
)

fs.writeFileSync(mainFileName, fixedOutput, { encoding: "utf8" })
