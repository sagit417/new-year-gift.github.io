const Messages = [
  "⚔️ The harder the conflict, the more glorious the triumph.",
  "🪜 There is no elevator to success. You have to take the stairs.",
  "🏔️ I have stood on a mountain of no's for one yes.",
  "✨ The difference between try and triumph is just a little 'umph'!",
  "🔑 If you want something you've never had, you must do something you've never done.",
  "🏃 Perseverance is not a long race; it is many short races one after the other.",
  "🧗 Fall seven times, stand up eight.",
  "🧱 Brick walls are there to show us how badly we want something.",
  "🧠 It's not that I'm so smart, it's just that I stay with problems longer.",
  "🏁 When you feel like quitting, think about why you started.",
  "🪜 Success is stumbling from failure to failure with no loss of enthusiasm.",
  "🧂 Failure is the condiment that gives success its flavor.",
  "💡 I have not failed. I've just found 10,000 ways that won't work.",
  "⏳ Don't fear failure. Fear being in the exact same place next year.",
  "🛡️ You may encounter many defeats, but you must not be defeated.",
  "⏰ A goal is a dream with a deadline.",
  "🗺️ Setting goals is the first step in turning the invisible into the visible.",
  "☁️ The only limit to your achievements is the reach of your dreams.",
  "👤 What you become by achieving your goals is the real reward.",
  "🌉 Discipline is the bridge between goals and accomplishment.",
  "📈 Small daily improvements are the key to staggering long-term results.",
  "📖 The only place where success comes before work is in the dictionary.",
  "⏱️ Don't watch the clock; do what it does. Keep going.",
  "⚡ Hard work beats talent when talent doesn't work hard.",
  "🌤️ You have to fight through bad days to earn the best days of your life.",
  "✔️ It always seems impossible until it's done.",
  "🎬 The way to get started is to quit talking and begin doing.",
  "🌱 You don't have to be great to start, but you have to start to be great.",
  "📅 A year from now you will wish you had started today.",
  "🗝️ Action is the foundational key to all success.",
  "⌛ Don't let the fear of time stop you. The time will pass anyway.",
  "🍀 The only thing that overcomes hard luck is hard work.",
  "🍎 The fruit of your own hard work is the sweetest.",
  "🛠️ The reward for work well done is the opportunity to do more.",
  "❤️ Success is about the difference you make in people's lives.",
  "🌟 Believe in yourself — every small step counts toward greatness.",
  "💪 Strength grows in moments when you think you cannot continue.",
  "🔥 Your perseverance today is laying the foundation for tomorrow.",
  "🌱 Growth comes from embracing challenges, not avoiding them.",
  "✨ You have the power to turn obstacles into opportunities.",
  "🧠 Focus on progress, not perfection.",
  "🚀 Take action today — momentum builds confidence and results.",
  "💡 Every setback is a setup for a stronger comeback.",
  "🏆 Small wins compound into extraordinary achievements over time.",
  "🌈 Your attitude shapes your reality.",
  "📈 Consistency beats intensity — keep moving forward daily.",
  "🎯 Set clear intentions and act on them.",
  "💎 Your potential exceeds what you currently see in yourself.",
  "🛡️ Courage is taking action despite fear.",
  "🛠️ Mastery is built through practice, patience, and persistence.",
  "🌞 Embrace each day as a new chance to improve.",
  "💬 Speak kindly to yourself — self-belief fuels progress.",
  "📅 Small, consistent habits create monumental change over time.",
  "💫 Your efforts matter, even when unseen.",
  "🌍 Your impact grows with every intentional action.",
  "🧭 Direction matters more than speed.",
  "🌠 Every choice today influences the life you build tomorrow.",
  "🪁 Let go of doubt and rise with confidence.",
  "🚪 Opportunity often appears disguised as hard work.",
  "📦 Each challenge carries a lesson that makes you stronger.",
  "🤝 Helping others strengthens your own purpose.",
  "🧠 Keep learning — growth never stops.",
  "🎉 Your achievements matter.",
  "🛤️ Stay patient — great results take time.",
  "💪 Your resilience defines your journey.",
  "🕯️ Shine even in quiet moments.",
  "🛠️ Skills you build today shape tomorrow.",
  "🌟 You are closer than you think.",
  "🪙 Small habits today create big results later."
];

const giftBtn = document.getElementById("giftBtn");
const giftMessage = document.getElementById("giftMessage");
const countdownEl = document.getElementById("countdown");

const giftDate = new Date("2025-12-31T21:00:00"); // 31-12-2025 9:00 PM
const storageKey = "giftOpened";

// Check if gift already opened
if(localStorage.getItem(storageKey)) {
  giftBtn.disabled = true;
  giftMessage.textContent = localStorage.getItem(storageKey);
}

// Countdown Timer
function updateCountdown() {
  const now = new Date();
  const diff = giftDate - now;

  if(diff <= 0) {
    countdownEl.textContent = "🎁 Gift is ready!";
    giftBtn.disabled = !!localStorage.getItem(storageKey);
    clearInterval(timerInterval);
  } else {
    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    countdownEl.textContent = `${hours}h ${minutes}m ${seconds}s`;
  }
}

const timerInterval = setInterval(updateCountdown, 1000);
updateCountdown();

// Gift Button
giftBtn.addEventListener("click", () => {
  if(!localStorage.getItem(storageKey)) {
    const message = Messages[Math.floor(Math.random() * Messages.length)];
    giftMessage.textContent = message;
    localStorage.setItem(storageKey, message);
    launchFireworks();
    giftBtn.disabled = true;
  }
});

/* --- Simple Fireworks --- */
const canvas = document.getElementById("fireworksCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function random(min,max){return Math.random()*(max-min)+min}

let particles = [];
class Particle{
  constructor(x,y,color){
    this.x=x;this.y=y;
    this.velX=random(-5,5);
    this.velY=random(-5,5);
    this.alpha=1;
    this.color=color;
  }
  update(){
    this.x+=this.velX;this.y+=this.velY;
    this.alpha-=0.02;
  }
  draw(){
    ctx.globalAlpha=this.alpha;
    ctx.fillStyle=this.color;
    ctx.beginPath();
    ctx.arc(this.x,this.y,3,0,Math.PI*2);
    ctx.fill();
    ctx.globalAlpha=1;
  }
}

function launchFireworks(){
  for(let i=0;i<100;i++){
    const color=`hsl(${random(0,360)},100%,50%)`;
    particles.push(new Particle(window.innerWidth/2,window.innerHeight/2,color));
  }
  requestAnimationFrame(animateFireworks);
}

function animateFireworks(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach((p,i)=>{
    p.update();
    p.draw();
    if(p.alpha<=0) particles.splice(i,1);
  });
  if(particles.length>0) requestAnimationFrame(animateFireworks);
}

window.addEventListener("resize", ()=>{
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
});

