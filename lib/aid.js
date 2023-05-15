const { writeAssistanCode } = require('./openai');
const { writeFile } = require('./file');
const { decodeResponse } = require('./utils');

async function think(instruction, options) {
  const prompt = instruction.join(' ');
  console.log('this is the prompt: ', prompt);
  console.log('this is the options: ',  JSON.stringify(options));
  const response = await writeAssistanCode(prompt, options.lang, env, keys);
  const str = response.data.choices[0].message.content;
  console.log(str);
  const file = decodeResponse(str);
  await writeFile(file, options);
}

module.exports = {
  think
}
