<p align="center"><img src="https://i.pinimg.com/originals/28/f2/d7/28f2d72b8060aa16d943f5efc440b97a.png" height="300px"/></p>

# Calcifer-AI

Calcifer-AI is a powerful command-line interface (CLI) tool built on Commander and leveraging the advanced artificial intelligence capabilities of OpenAI. It enables developers to effortlessly generate code templates and boilerplate code for their projects through interactive prompts.

## Installation

Before installing Calcifer-AI, ensure that you have Node.js and npm installed on your system. Once the prerequisites are in place, execute the following command:

```bash
npm install -g calcifer-ai
```

This command will globally install Calcifer-AI on your system.

or you can also install locally by using the command:

```bash
npm install git@github.com:SOLUNTECH/calcifer-ai.git
```

## Usage

To harness the potential of Calcifer-AI, open a terminal window and enter the following command:

```bash
calcifer-ai think --path=./src/pages --lang=react create a react component. The component is called button. It updates the counter state and refreshes the h1 with the current count.
```

Executing this command will launch the Calcifer-AI CLI and present you with a prompt. Input your prompts using the specified format:

- **`think`** is the main command.

- **`--path`** denotes the folder location.

- **`--lang`** indicates the context file supporting the file generation.

Calcifer-AI will employ OpenAI's cutting-edge technology to generate code based on your prompts and save the resulting code to a file.

## Contributing

We welcome contributions to Calcifer-AI! If you wish to contribute, please fork this repository and submit a pull request with your proposed changes.

## License

Calcifer-AI is released under the MIT license. For more details, See [LICENSE](LICENSE) for more information.
