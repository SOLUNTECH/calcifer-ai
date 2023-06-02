function decodeResponse(str){
  const filenameRegex = /filename: (.+)\n/;
  const codeRegex = /code:\s*\n\s*---\s*\n([\s\S]+)\s*---?/;

  const filenameMatch = filenameRegex.exec(str);
  const codeMatch = codeRegex.exec(str);

  if (filenameMatch && codeMatch) {
    const filename = filenameMatch[1];

    const code = codeMatch[1];

    const object = { filename, code };

    console.log(object.code);

    return object;
  } else {
    console.log('Invalid string format');
  }
}

module.exports = {
  decodeResponse
}
