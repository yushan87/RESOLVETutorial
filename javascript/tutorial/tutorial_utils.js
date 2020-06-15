/* global ace antlr4 AnnotatingErrorListener PredictionMode ResolveLexer ResolveParser */

//////////////////////
// Global Variables //
//////////////////////

var aceEditor; // This is the ACE Editor embedded to the page.
var editorContent = ""; // Content to be displayed in ACE Editor
var syntaxChecking = false; // A flag that indicates whether or not the check syntax button has been clicked.
var lineErrorMap; // This contains error information for each line in the current file.
var fontSize; // The current font size

///////////////////////////////////////
// Main ACE Editor-Related Functions //
///////////////////////////////////////

/*
 * Function for creating and embedding the ACE Editor into our page.
 */
function createEditor() {
    // RESOLVE mode
    var ResolveMode = ace.require("ace/mode/resolve").Mode;

    // Basic editor settings
    aceEditor = ace.edit("editor");
    aceEditor.setTheme("ace/theme/tomorrow_night");
    //aceEditor.setTheme("ace/theme/chaos");
    fontSize = 16;
    aceEditor.setFontSize(fontSize);

    // Store the content for future use
    editorContent = "-- Try adding some RESOLVE code here!";
    aceEditor.session.setValue(editorContent);

    // Set this to RESOLVE mode
    aceEditor.getSession().setMode(new ResolveMode());

    // Disable ACE Editor's breakpoint toggling.
    aceEditor.on("guttermousedown", disableBreakpoint);

    // Add tooltip that indicates you can click on VC icon.
    aceEditor.on("guttermousemove", showGutterTooltip);
}

/*
 * Function for loading a code snippet to AceEditor.
 */
function loadLesson(code) {
    if (typeof aceEditor !== "undefined") {
        // No need to keep any of the errors if we are loading
        // a new code snippet.
        clearErrorGutterIcons();
        clearAlertBox();

        // Store the content for future use
        editorContent = code;
        aceEditor.session.setValue(editorContent);
    }
}

////////////////////////////////////
// Functions Passed to ACE Editor //
////////////////////////////////////

/*
 * Function for clearing the error icons on the gutter.
 */
function clearErrorGutterIcons() {
    lineErrorMap = null;

    // Remove all error icons
    var totalLines = aceEditor.getSession().getLength();
    for (var i = 0; i < totalLines; i++) {
        aceEditor.getSession().removeGutterDecoration(i, "ace_error");
    }
}

/*
 * Function for disabling ACE editor breakpoint toggling.
 */
function disableBreakpoint(e) {
    var region = e.editor.renderer.$gutterLayer.getRegion(e);
    if (region == "markers") {
        e.stop(); // prevent breakpoint toggling
    }
}

/*
 * Function for showing tooltip on an error icon.
 */
function showGutterTooltip(e) {
    var region = e.editor.renderer.$gutterLayer.getRegion(e);
    var target = e.domEvent.target;
    if (region == "markers") {
        e.stop();

        // Only do this if the gutter has the "ace_error" class
        //var msg = lineErrorMap.get(e)
        if ($(target).hasClass("ace_error")) {
            var errorObj = lineErrorMap.get(Number($(target).text()) - 1);
            // Create a tooltip that show that you can click on it.
            $(target).tooltip({
                placement: "bottom",
                template: "<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-inner\"></div></div>",
                title: errorObj[0].text
            });
            $(target).tooltip("show");
        } else {
            $(target).tooltip("dispose");
        }
    }
}

////////////////////////////////////
// ANTLR4-Related Functions //
////////////////////////////////////

/*
 * Function for setting up the ANTLR4 lexer and parser.
 */
function parseGrammar(inputText) {
    // Code to invoke the lexer/parser
    var annotations = [];
    var chars = new antlr4.InputStream(inputText);
    var lexer = new ResolveLexer.ResolveLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new ResolveParser.ResolveParser(tokens);

    parser._interp.predictionMode = PredictionMode.SLL;
    parser.removeErrorListeners();
    parser.addErrorListener(new AnnotatingErrorListener(annotations));
    parser.module();

    return annotations;
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
    } else {
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
$("#checkSyntax").click(function () {
    // Lock editor to stop user from making changes
    lock();

    // Use the current contents of the editor to
    // invoke the lexer and parser to see if there any errors
    var validate = parseGrammar(aceEditor.session.getValue());

    // Populate lexer/parser error messages (if any)
    var msg;
    var hasError = validate.length > 0;
    if (hasError) {
        msg = "There are " + validate.length + " error(s). Please hover over each of the <icons> above for more information.";

        addSyntaxErrors(validate);
    } else {
        msg = "No syntax errors!";
    }

    // Create the appropriate alert box
    createAlertBox(hasError, msg);

    // Unlock editor for further user edits
    unlock();

    return false;
});

/*
 * Function for adding syntax errors to the gutter
 */
function addSyntaxErrors(errors) {
    lineErrorMap = new Map();
    for (var i = 0; i < errors.length; i++) {
        var lineNum = Number(errors[i].row);

        // Check to see if we need to add the icon.
        if (lineErrorMap.get(lineNum) === undefined) {
            // Add the icon to the gutter.
            aceEditor.session.addGutterDecoration(lineNum, "ace_error");

            // Create a new array for this line number
            lineErrorMap.set(lineNum, []);
        }

        // Update our list of errors on that line number
        var errorsAtLine = lineErrorMap.get(lineNum);
        errorsAtLine.push(errors[i]);
        lineErrorMap.set(lineNum, errorsAtLine);
    }
}

/*
 * Function for resetting editor's code to the current cached content.
 */
$("#resetCode").click(function () {
    // Lock editor to stop user from making changes
    lock();

    // Put the cached content into the editor
    aceEditor.session.setValue(editorContent);

    // Unlock editor for further user edits
    unlock();

    return false;
});

/*
 * Function for increasing the editor's font size.
 */
$("#fontIncrease").click(function () {
    // Increase font size
    var currentFontSize = $("#editor").css("font-size");
    currentFontSize = parseFloat(currentFontSize) * 1.2;
    $("#editor").css("font-size", currentFontSize);

    return false;
});

/*
 * Function for decreasing the editor's font size.
 */
$("#fontDecrease").click(function () {
    // Decrease font size
    var currentFontSize = $("#editor").css("font-size");
    currentFontSize = parseFloat(currentFontSize) / 1.2;
    $("#editor").css("font-size", currentFontSize);

    return false;
});

/*
 * Function for reset the editor's font size.
 */
$("#resetFontSize").click(function () {
    // Reset font size
    $("#editor").css("font-size", fontSize);

    return false;
});

/*
 * Function for locking the check syntax and reset buttons.
 */
function lock() {
    // Make sure we don't have any leftover alert box from the previous run.
    clearAlertBox();

    // Clear any gutter icons
    clearErrorGutterIcons();

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
