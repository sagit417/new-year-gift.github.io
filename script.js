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

const box = document.getElementById("giftBox");
const countdown = document.getElementById("countdown");
const result = document.getElementById("result");
const unlockTime = new Date("2026-01-01T05:00:00+05:00").getTime();

// Helper function
function unlockGift() {
  box.classList.remove("locked");
  countdown.innerHTML = "🎆 It's New Year! Click your gift 🎆";
  startFireworks();
}

// Initialize
if (localStorage.getItem("giftOpened")) {
  box.classList.add("locked");
  result.innerHTML = "🎁 You already claimed your New Year gift!";
}

// Countdown
const timer = setInterval(() => {
  const now = Date.now();
  const diff = unlockTime - now;

  if (diff <= 0) {
    clearInterval(timer);
    if (!localStorage.getItem("giftOpened")) {
      unlockGift();
    } else {
      countdown.innerHTML = "🎁 You already claimed your gift!";
    }
  } else {
    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);
    countdown.innerHTML = `⏳ Unlocks in ${h}h ${m}m ${s}s`;
    box.classList.add("locked");
  }
}, 1000);

// Gift click
box.onclick = () => {
  if (!box.classList.contains("locked")) {
    const gift = Messages[Math.floor(Math.random() * Messages.length)];
    result.innerHTML = gift;
    localStorage.setItem("giftOpened", "true");
    box.classList.add("locked");
    countdown.innerHTML = "🎁 You claimed your gift! Happy New Year 🎆";
  }
};

// Fireworks
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function startFireworks() {
  setInterval(() => {
    ctx.beginPath();
    ctx.arc(
      Math.random() * canvas.width,
      Math.random() * canvas.height / 2,
      Math.random() * 3 + 2,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = `hsl(${Math.random() * 360},100%,60%)`;
    ctx.fill();
  }, 120);
}
