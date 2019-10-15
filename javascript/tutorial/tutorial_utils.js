/* global ace */

//////////////////////
// Global Variables //
//////////////////////

var aceEditor; // This is the ACE Editor embedded to the page.
var editorContent = ""; // Content to be displayed in ACE Editor
var syntaxChecking = false; // A flag that indicates whether or not the check syntax button has been clicked.

///////////////////////////////////////
// Main ACE Editor-Related Functions //
///////////////////////////////////////

/*
 * Function for creating and embedding the ACE Editor into our page.
 */
function createEditor() {
    // RESOLVE mode
    //ResolveMode = ace.require("ace/mode/resolve").Mode;
    //Range = ace.require("ace/range").Range;

    // Basic editor settings
    aceEditor = ace.edit("editor");
    aceEditor.setTheme("ace/theme/tomorrow_night");
    aceEditor.setFontSize(16);

    // Store the content for future use
    editorContent = "public class Test {\n\n\tpublic static void main(String args[]) {\n\t\tSystem.out.println(\"Hello World!\");\n\t}\n\n}";
    aceEditor.session.setValue(editorContent);

    // Set this to RESOLVE mode
    //aceEditor.getSession().setMode(new ResolveMode());
    aceEditor.session.setMode("ace/mode/java");
}

////////////////////////////////////
// Editor Alert-Related Functions //
////////////////////////////////////

/*
 * Function for clearing all content in compiler result div.
 */
function clearAlertBox() {
    // Delete compiler result content
    $("#compilerResult").empty();
}

/*
 * Function for creating the proper HTML for rendering an
 * alert box.
 */
function createAlertBox(hasError, message) {
    // New HTML Object #1: Alert Box
    var alertDiv = document.createElement("div");
    alertDiv.setAttribute("id", "resultAlertBox");

    // Change alert box color depending if it has error
    if (hasError) {
        alertDiv.setAttribute("class", "alert alert-danger alert-dismissible mb-0 fade show");
    }
    else {
        alertDiv.setAttribute("class", "alert alert-success alert-dismissible mb-0 fade show");
    }

    // Set other attributes
    alertDiv.setAttribute("role", "alert");
    alertDiv.setAttribute("aria-hidden", "true");

    // New HTML Object #2: Close Button
    var closeButton = document.createElement("button");
    closeButton.setAttribute("type", "button");
    closeButton.setAttribute("class", "close");
    closeButton.setAttribute("data-dismiss", "alert");
    closeButton.setAttribute("aria-label", "Close");

    // New HTML Object #3: Close Icon
    var closeIconSpan = document.createElement("span");
    closeIconSpan.setAttribute("aria-hidden", "true");
    closeIconSpan.innerHTML = "&times;";

    // Add close icon to close button
    closeButton.appendChild(closeIconSpan);

    // Add message and the close button to the alert box
    alertDiv.appendChild(document.createTextNode(message));
    alertDiv.appendChild(closeButton);

    // Add the alert box to the div
    $("#compilerResult").append(alertDiv);
}

///////////////////////////////
// Toolbar-Related Functions //
///////////////////////////////

/*
 * Function for checking syntax on the current editor contents.
 */
$("#checkSyntax").click(function() {
    // Lock editor to stop user from making changes
    lock();

    // TODO: Invoke Lexer/Parser for Language
    var hasError = true;
    var msg;

    // Populate lexer/parser error messages (if any)
    if (hasError) {
        // TODO: Display error message(s)
        msg = "Syntax Checker Results Go Here!";
    }
    else {
        msg = "No syntax errors!";
    }

    // Create the appropriate alert box
    createAlertBox(hasError, msg);
    
    // Unlock editor for further user edits
    unlock();

    return false;
});

/*
 * Function for resetting editor's code to the current cached content.
 */
$("#resetCode").click(function() {
    // Put the cached content into the editor
    aceEditor.session.setValue(editorContent);
    
    return false;
});

/*
 * Function for increasing the editor's font size.
 */
$("#fontIncrease").click(function() {
    // Increase font size
    var currentFontSize = $("#editor").css("font-size");
    currentFontSize = parseFloat(currentFontSize) * 1.2;
    $("#editor").css("font-size", currentFontSize);
    
    return false;
});

/*
 * Function for decreasing the editor's font size.
 */
$("#fontDecrease").click(function() {
    // Decrease font size
    var currentFontSize = $("#editor").css("font-size");
    currentFontSize = parseFloat(currentFontSize) / 1.2;
    $("#editor").css("font-size", currentFontSize);
    
    return false;
});

/*
 * Function for locking the check syntax and reset buttons.
 */
function lock() {
    // Make sure we don't have any leftover alert box from the previous run.
    clearAlertBox();

    // Lock the editors
    aceEditor.setReadOnly(true);

    // Disable the button and set syntaxChecking to true.
    $("#checkSyntax").attr("disabled", "disabled");
    $("#resetCode").attr("disabled", "disabled");
    syntaxChecking = true;
}

/*
 * Function for unlocking the verify button.
 */
function unlock() {
    // Unlock the editors
    aceEditor.setReadOnly(false);

    // No longer syntaxChecking, so enable the button again.
    syntaxChecking = false;
    $("#checkSyntax").removeAttr("disabled", "disabled");
    $("#resetCode").removeAttr("disabled", "disabled");

    // Focus on the editor.
    aceEditor.focus();
}
