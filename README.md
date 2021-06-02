# Localization bracket extension for Visual Studio Code

Surround the selection with localization brackets.

---

## Features

Inserts open and close notations on both ends of the current selection(s).

The following commands have been implemented:

| **Command**                       | **Description**               | **Notation**  | **Suggested Key** |
| --------------------------------- | ----------------------------- | :-----------: | :---------------: |
| **extension.embraceLocalization** | Surround with Locale Brackets | `{{ __( ) }}` |    `ctrl+k,l`     |
|                                   |                               |

---

## How to Use

Select the text that you need to surround and press the configured key binding.

---

## Configuration

To avoid shortcut conflicts and localization issues, this extension does not set key bindings by itself.

To configure your own keyboard shortcuts, open the Command Palette with `ctrl+shift+p`, select _Preferences: Open Keyboard Shortcuts_ and paste the following lines to your _keybindings.json_ file. Modify the key combinations and available commands as you please.

        {
            "key": "ctrl+k ctrl+l",
            "command": "extension.embraceLocalization",
            "when": "editorHasSelection && editorTextFocus"
        }

---

## Source

[https://github.com/](https://github.com/)

---

## Support, issues and bug reports

[Create an issue](https://github.com/)

---

## Release Notes

### 0.0.1

Initial release.
