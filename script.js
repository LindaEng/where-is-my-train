document.addEventListener("DOMContentLoaded", function() {
    const voiceText = document.getElementById('voiceText')
    const microphoneBtn = document.getElementById('microphoneBtn')

    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

    const recognition = new SpeechRecognition()
    recognition.interimResults = true

    recognition.addEventListener('result', (event) => {
        console.log('event results ', event.results)
        const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')

        voiceText.value = transcript
    })

    microphoneBtn.addEventListener('click', () => {
        if(recognition) {
            recognition.start()
        }
    })

})