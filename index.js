const { Command } = require('commander');
const program = new Command();

program
  .name('convert')
  .description("Convert to SSML file.")
  // .argument('source-file', 'Source file')
  .option('-h, --help', 'help')
  .version("0.0.1");

program.parse();