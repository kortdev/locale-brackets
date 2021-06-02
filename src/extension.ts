// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    const disposable = vscode.commands.registerTextEditorCommand(
        "extension.embraceLocalization",
        (textEditor, edit) => {
            doSurround(textEditor, edit, "{{ __(", ") }}");
        }
    );

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

function doSurround(
    textEditor: vscode.TextEditor,
    edit: vscode.TextEditorEdit,
    insBefore: string,
    insAfter: string
) {
    const document = textEditor.document;
    const newSelections: vscode.Selection[] = [];

    textEditor
        .edit((editBuilder) => {
            textEditor.selections.forEach((selection) => {
                const adjust =
                    selection.start.line == selection.end.line ? 1 : 0;
                editBuilder.insert(selection.start, insBefore);
                editBuilder.insert(selection.end, insAfter);
                newSelections.push(
                    new vscode.Selection(
                        selection.start.translate(0, 1),
                        selection.end.translate(0, adjust)
                    )
                );
            });
        })
        .then(() => {
            textEditor.selections;
            textEditor.selections = newSelections;
        });
}
