// Set the wedding date and time here (year, monthIndex, day, hour, minute).
// Month index starts at 0: January=0, December=11.
const weddingDate = new Date(2026, 11, 12, 18, 0, 0);
const countdown = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;
  if (diff <= 0) {
    countdown.textContent = "The celebration day is here!";
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  countdown.textContent = `${days} days · ${hours} hours · ${minutes} minutes · ${seconds} seconds`;
}
updateCountdown();
setInterval(updateCountdown, 1000);
