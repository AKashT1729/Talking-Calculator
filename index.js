const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
buttons.forEach((item) => {
    item.onclick = () => {
        speak(document.getElementById(item.id).innerText)
        if (item.id == 'clear') {

            display.innerText = ''
        } else if (item.id == 'backspace') {
            let string = display.innerText.toString();

            display.innerText = string.substr(0, string.length - 1)
        } else if (display.innerText != '' && item.id == 'equal') {

            speak(display.innerText = eval(display.innerText))

        }

        else if (display.innerText == '' && item.id == 'equal') {

            display.innerText = 'Empty!'
        } else {

            display.innerText += item.id;
        }

    }

})

function speak(x) {
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";

    speech.text = x;
    speech.volume = 1;
    speech.rate = 1.5;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}

