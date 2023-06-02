const { Configuration, OpenAIApi } = require('openai');
const language = require('./lang');

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    organization: process.env.OPENAI_ORG
});
const openai = new OpenAIApi(configuration);

async function writeAssistanCode(prompt, _lang) {

  const lang = _lang || 'express';
  const messages = language[lang];

  const modelConfig = {
    model: "gpt-3.5-turbo",
    temperature: 0.1,
    max_tokens: 1500,
    top_p: 1.0,
    frequency_penalty: 0.5,
    presence_penalty: 0.0,
  }

  const response = await openai.createChatCompletion({
    ...modelConfig,
    messages: [...messages, {"role": "user", "content": prompt }]
  });

  return response;
}

module.exports = {
  writeAssistanCode
}
