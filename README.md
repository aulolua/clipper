# Clipper HTA App

**Clipper** is a simple HTA (HTML Application) that monitors your clipboard for email addresses and replaces them with a predefined value. This can be useful for quickly obfuscating or altering email addresses in text copied from various sources.

## Table of Contents

- [Usage](#usage)
- [Configuration](#configuration)
- [How It Works](#how-it-works)
- [License](#license)

## Usage

1. Download the `Clipper.hta` file.
2. Double-click on the `Clipper.hta` file to run the application.

## Configuration

Before using Clipper, you should configure it to suit your needs. Open the `Clipper.hta` file in a text editor and locate the following configuration section:

```javascript
// #START-CONFIG
//### REPLACE THE objRegEx value with your regex
var objRegEx = new RegExp("\\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}\\b", "ig");
//### REPLACE your@value.sex with your text to put into the clipboard
var toclip = "your@value.sex"
// #END-CONFIG
```

- Replace the `objRegEx` regular expression with the pattern you want to search for in the clipboard text.
- Replace the `toclip` variable with the text you want to put into the clipboard as a replacement.

Save the file after making your changes.

## How It Works

Clipper is an HTML Application (HTA) that uses JavaScript and Windows Scripting Host (WSH) to monitor your clipboard. Here's how it works:

1. When you run the HTA application, it starts monitoring the clipboard at regular intervals (every 2.5 seconds by default).

2. It checks if the clipboard contains text that matches the regular expression specified in the configuration (`objRegEx`).

3. If a match is found, it replaces the matched text with the value specified in `toclip`.

4. The modified text is then copied back to the clipboard.

5. This process continues to run in the background as long as the HTA application is open, ensuring that any email addresses matching the pattern are automatically replaced in the clipboard.

## License

This software is provided under the [MIT License](LICENSE). You are free to use, modify, and distribute it as per the terms of the license.

---

**Note:** Be cautious when using this tool to modify clipboard content, and ensure you comply with all applicable laws and regulations regarding data privacy and usage.
