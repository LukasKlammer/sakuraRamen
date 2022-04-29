const DEBUG_MODE = true;

function debug(text) {
    if (DEBUG_MODE) {
        console.log(text);
    }
}



function changeLanguageToGerman() {
    debug('Funktion German');
    alert('Freue mich auf Angular, um die Auswahl der Sprache zu implementieren.');
}
function changeLanguageToItalian(){
    debug('Funktion Italian');
    alert('Freue mich auf Angular, um die Auswahl der Sprache zu implementieren.');
}
function changeLanguageToEnglish() {
    debug('Funktion English');
    alert('Freue mich auf Angular, um die Auswahl der Sprache zu implementieren.');
}