#!/usr/bin/env node

require('dotenv').config()

const { program } = require('../lib/program');
const { think } = require('../lib/aid');

program
  .name('aid')
  .description('CLI to generate code by using openai gptchat')
  .version('0.8.0');

program
  .command('think')
  .description('Thinks a new file')
  .option('-l, --lang <string>', 'Select the custom language you want to use')
  .option('-p, --path <string>', 'Create the file in a custom path')
  .option('-pk, --package <string>', 'Create the file in a specific package for monorepo projects')
  .argument('[text...]', 'prompt to think')
  .action(async (prompt, options) => {
    think(prompt, options);
  });

program.parse();