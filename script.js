const display = document.getElementById("display");
 
function appendtodisplay(input) {
    display.value += input;

}
function clearDisplay() {
display.value = "";
}

/*function calculate() {
    try {
        display.value = eval(display.value);

    }
    catch (error) {
        display.value = "Error";
    }
}*/
function calculate() {
    if (display.value !== "") {
        const query = encodeURIComponent("Solve this math problem: " + display.value);
        
        // This opens the URL in a new tab
        window.open(`https://chatgpt.com/?q=${query}`, "_blank");
    }
}