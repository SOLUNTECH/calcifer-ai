# AID (Artificial Intelligence Developer)

AID is a command-line interface (CLI) tool created using Commander and backed by OpenAI's powerful artificial intelligence technology. It generates code based on user prompts, allowing developers to easily and quickly create templates and boilerplate code for their projects.

## Installation

To install AID, you must first have Node.js and npm installed on your system. Then, run the following command:

```bash
npm install -g aid
```

This will install AID globally on your system.

## Usage

To use AID, simply open a terminal window and type:

```bash
aid think --path=./src/pages --lang=react create a react component. The componnent its called button. It update the counter state and refresh the h1 with the current count.
```

This will start the AID CLI and present you with a prompt. From there, you can input prompts in the following format:

aid think -> main command
--path= folder location
--lang= context file that will support the file genereation

AID will then use OpenAI's technology to generate code based on your input, and save the resulting code to a file.

## Contributing

Contributions to AID are welcome! To contribute, please fork this repository and submit a pull request with your changes.

## License

AID is released under the MIT license. See [LICENSE](LICENSE) for more information.

