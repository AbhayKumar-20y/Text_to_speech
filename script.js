  let btn = document.querySelector("button");

        let speech = new SpeechSynthesisUtterance();
        let voices = [];

        let mul_voices = document.querySelector("select");

        window.speechSynthesis.onvoiceschanged = () => {
          voices = window.speechSynthesis.getVoices();

          speech.voice = voices[0];

          voices.forEach((voice, index) => {
            let option = document.createElement("option");

            option.textContent = voice.name;
            option.value = index;
            mul_voices.appendChild(option);
          });
        };

        btn.addEventListener("click", () => {
          let txt = document.querySelector("textarea").value;
          if(!txt){
            speech.text = "kuch Likh betaaa"
            window.speechSynthesis.speak(speech);
            alert("kuch Likh betaaa")
          }
          else{
          speech.text = txt;
          window.speechSynthesis.speak(speech);
          }
        });

        mul_voices.addEventListener("change", () => {
          speech.voice = voices[mul_voices.value];
        });