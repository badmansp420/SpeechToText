const mic_btn = document.querySelector("#mic");
const text_area = document.querySelector(".text");


// const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
// const SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;


// const speechRecognitionList = new SpeechGrammarList();

// recognition.grammars = speechRecognitionList;
// recognition.lang = "en-US";
// recognition.maxAlternatives = 1;

mic_btn.addEventListener('click', function () {
    try {
        var speech = true;
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.interimResults = true;
        recognition.continuous = false;


        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result = result[0])
                .map(result = result.transcript)

            text_area.innerHTML = transcript;
        })

        if (speech == true) {
            recognition.start();
        }
    } catch (error) {
        console.log("Errors: " + error)
    }
});
