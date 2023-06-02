const fs = require('fs')
const path = require('path')

async function writeFile({ filename, code }, { package = null, path: folder }) {

  const folderPath = package
  ? path.join(process.cwd(), 'packages', package, folder)
  : path.join(process.cwd(), folder);

  const filePath = path.join(folderPath, filename);

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  try {
    await fs.promises.writeFile(filePath, code, 'utf-8');

    console.log(`File ${filename} created successfully!`);
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  writeFile
}
