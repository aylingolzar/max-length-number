const input = document.querySelector(".number");
const countbox = document.querySelector(".countbox");

function numcounter() {
  let count = input.value.length;
  let max = input.maxLength;

  let inbox = max - count;

  countbox.textContent = inbox;
}

input.addEventListener("input", numcounter);

// مقدار اولیه
