const PASSWORDS = ["2109","21/09","21-09","21.09","21092010"];

const screens = [...document.querySelectorAll(".screen")];

function show(id){
  screens.forEach(s => s.classList.toggle("active", s.id === id));
  window.scrollTo({top:0, behavior:"smooth"});
}

function unlock(){
  const input = document.getElementById("password");
  const value = input.value.trim().replace(/\s/g,"");
  const wrong = document.getElementById("wrong");
  if(PASSWORDS.includes(value)){
    wrong.textContent = "";
    show("welcome");
  }else{
    wrong.textContent = "Hmm… that's not your birthday, Jaanu 😭";
    input.animate(
      [{transform:"translateX(-7px)"},{transform:"translateX(7px)"},{transform:"translateX(-4px)"},{transform:"translateX(0)"}],
      {duration:300}
    );
  }
}

document.getElementById("unlockBtn").addEventListener("click", unlock);
document.getElementById("password").addEventListener("keydown", e => {
  if(e.key === "Enter") unlock();
});

document.querySelectorAll("[data-next]").forEach(btn => {
  btn.addEventListener("click", () => show(btn.dataset.next));
});

const noBtn = document.getElementById("noBtn");
const noMessage = document.getElementById("noMessage");
let noCount = 0;

noBtn.addEventListener("click", () => {
  noCount++;
  const messages = [
    "Nice try 😭",
    "No is temporarily unavailable.",
    "Sweetu… really? 🥺",
    "Okay okay, I'll ask again.",
    "You know you're going to press YES. 😭❤️"
  ];
  noMessage.textContent = messages[Math.min(noCount - 1, messages.length - 1)];
  noBtn.style.transform = `translate(${Math.random()*120-60}px, ${Math.random()*30-15}px)`;
});

document.getElementById("yesBtn").addEventListener("click", () => show("birthday"));
document.getElementById("againBtn").addEventListener("click", () => show("letter"));

function makeHeart(){
  const h = document.createElement("div");
  h.className = "float-heart";
  h.textContent = Math.random() > .5 ? "♥" : "♡";
  h.style.left = Math.random()*100 + "vw";
  h.style.fontSize = (12 + Math.random()*20) + "px";
  h.style.animationDuration = (7 + Math.random()*7) + "s";
  document.querySelector(".hearts").appendChild(h);
  setTimeout(() => h.remove(), 15000);
}
setInterval(makeHeart, 900);
for(let i=0;i<8;i++) setTimeout(makeHeart, i*250);
