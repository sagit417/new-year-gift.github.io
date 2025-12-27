const Messages = [
  "⚔️ The harder the conflict, the more glorious the triumph.",
  "🪜 There is no elevator to success. You have to take the stairs.",
  "🏔️ I have stood on a mountain of no's for one yes.",
  "✨ The difference between try and triumph is just a little 'umph'!",
  "🔑 If you want something you've never had, you must do something you've never done.",
  /* ... rest of your messages ... */
  "🌟 You are closer than you think.",
  "🪙 Small habits today create big results later."
];

const box = document.getElementById("giftBox");
const countdown = document.getElementById("countdown");
const result = document.getElementById("result");
const unlockTime = new Date("2026-01-01T05:00:00+05:00").getTime();

// Track if gift is already opened
let alreadyOpened = localStorage.getItem("giftOpened") === "true";

// Countdown
const timer = setInterval(() => {
  const now = Date.now();
  const diff = unlockTime - now;

  if (diff <= 0) {
    clearInterval(timer);
    if (!alreadyOpened) {
      countdown.innerHTML = "🎆 It's New Year! Click your gift 🎆";
      box.classList.remove("locked");
      startFireworks();
    } else {
      box.classList.add("locked");
    }
  } else {
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff / 60000) % 60);
    const s = Math.floor((diff / 1000) % 60);
    countdown.innerHTML = `⏳ Unlocks in ${h}h ${m}m ${s}s`;
    box.classList.add("locked");
  }
}, 1000);

// Gift click
box.onclick = () => {
  if (!box.classList.contains("locked") && !alreadyOpened) {
    const gift = Messages[Math.floor(Math.random() * Messages.length)];
    result.innerHTML = gift;
    localStorage.setItem("giftOpened", "true");
    alreadyOpened = true;
    box.classList.add("locked");
    countdown.innerHTML = "🎁 Enjoy your gift! Happy New Year 🎆";
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

// Optional parallax effect for scrollable background
window.addEventListener('scroll', () => {
  document.body.style.backgroundPositionY = -(window.scrollY * 0.15) + "px";
});
