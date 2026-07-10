const question = "كنتي بتسأليني...\nليه عايز نتجوز؟ ❤️";
const qEl = document.getElementById("question");
const intro = document.getElementById("intro");
const screen = document.getElementById("envelopeScreen");
const envelope = document.getElementById("envelope");
const msgEl = document.getElementById("message");
const ending = document.getElementById("ending");

const openSound = document.getElementById("openSound");
const music = document.getElementById("music");

const message = `وقررت أجاوبك بالشكل ده...

عايز نتجوز عشان تبقي جمبي في كل ثانية في حياتي.

عشان أنا عايز أكون جنبك، وأخد بالي منك، وأفضل طول العمر أطبطب عليكي.

عشان عايز بيتي ينور بيكي إنتي، وعايز حياتي تكمل بوجودك جنبي.

عايزك أم لأولادي ❤️

عايز أجيبلك حاجات حلوة وأنا راجع من الشغل.

عايز نكون سوا عشان نتجنن سوا، ونخرج، ونسافر، ونعمل كل اللي ييجي في دماغنا.

عايز أعمل كل حاجة عشانك وعشان أشوفك مبسوطة.

عايز كل مرة أرجع من يوم طويل ألاقي حضنك هو راحتي.

مش عايز من الدنيا غير إننا نتونس ببعض، وأكون ليكي أمان، وحب، ولطف، واحتواء.

عايز نتجوز... لأن وجودك في حياتي خير وسعادة وراحة.

يمكن ده جزء بسيط كده من ردي على السؤال ده ❤️

صباحك حلو زي ضحكتك اللي بتحلي يومي.

صباحك جميل زيك وزي ملامحك الحلوة المريحة.

شكرًا إنك في حياتي ومستحملاني ❤️`;

let i = 0;
let opened = false;

function typeQuestion(text, idx = 0){
  if(idx < text.length){
    qEl.innerHTML += text[idx] === '\n' ? '<br>' : text[idx];
    setTimeout(() => typeQuestion(text, idx + 1), 80);
  }else{
    setTimeout(() => {
      intro.style.opacity = "0";
      intro.style.transition = "opacity 1.2s ease";
      setTimeout(() => {
        intro.classList.add("hidden");
        screen.classList.remove("hidden");
      }, 1200);
    }, 2400);
  }
}

typeQuestion(question);

function typeMessage(){
  if(i < message.length){
    msgEl.innerHTML += message[i] === '\n' ? '<br>' : message[i];
    i++;
    setTimeout(typeMessage, 42);
  }else{
    setTimeout(() => ending.classList.remove("hidden"), 1000);
  }
}

envelope.addEventListener("click", () => {
  if(opened) return;
  opened = true;

  envelope.classList.add("open");

  openSound.currentTime = 0;
  openSound.play().catch(()=>{});

  setTimeout(() => {
    music.volume = 0.55;
    music.play().catch(()=>{});
  }, 450);

  setTimeout(typeMessage, 1200);
});
