// ---------- helpers ----------
function log(el, msg) {
  const time = new Date().toLocaleTimeString();
  el.insertAdjacentHTML("afterbegin", `<div>[${time}] ${msg}</div>`);
}
function set(el, text) {
  el.textContent = text;
}

// ---------- Mouse events ----------
const mouseArea = document.getElementById("mouseArea");
const mouseLog = document.getElementById("mouseLog");
const mouseLast = document.getElementById("mouseLast");
const mousePos = document.getElementById("mousePos");
const moveCountEl = document.getElementById("moveCount");
let moveCount = 0;
let throttle = false;

function updatePos(e) {
  set(mousePos, `x: ${e.offsetX}, y: ${e.offsetY}`);
}

function noteMouse(type, e) {
  set(mouseLast, type);
  updatePos(e);
  log(mouseLog, type);
}

mouseArea.addEventListener("mousedown", (e) => noteMouse("onmousedown", e));
mouseArea.addEventListener("mouseup", (e) => noteMouse("onmouseup", e));
mouseArea.addEventListener("click", (e) => noteMouse("onclick", e));
mouseArea.addEventListener("mouseover", (e) => noteMouse("onmouseover", e));
mouseArea.addEventListener("mouseout", (e) => noteMouse("onmouseout", e));

mouseArea.addEventListener("mousemove", (e) => {
  // throttle so the log isn't spammed
  moveCount++;
  set(moveCountEl, String(moveCount));
  updatePos(e);
  if (!throttle) {
    noteMouse("onmousemove", e);
    throttle = true;
    setTimeout(() => (throttle = false), 250);
  }
});

// ---------- Keyboard events ----------
const keyInput = document.getElementById("keyInput");
const keyLog = document.getElementById("keyLog");
const kd = document.getElementById("kd");
const kp = document.getElementById("kp");
const ku = document.getElementById("ku");

keyInput.addEventListener("keydown", (e) => {
  set(kd, `${e.key} (code: ${e.code})`);
  log(keyLog, `onkeydown: key="${e.key}" code="${e.code}"`);
});

keyInput.addEventListener("keypress", (e) => {
  set(kp, `${e.key} (charCode: ${e.charCode})`);
  log(keyLog, `onkeypress: key="${e.key}" charCode=${e.charCode}`);
});

keyInput.addEventListener("keyup", (e) => {
  set(ku, `${e.key} (code: ${e.code})`);
  log(keyLog, `onkeyup: key="${e.key}" code="${e.code}"`);
});

// ---------- Form events ----------
const form = document.getElementById("demoForm");
const formLog = document.getElementById("formLog");
const formLast = document.getElementById("formLast");
const formStatus = document.getElementById("formStatus");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

function noteForm(type) {
  set(formLast, type);
  log(formLog, type);
}

[nameInput, emailInput].forEach((el) => {
  el.addEventListener("focus", () => noteForm(`onfocus on #${el.id}`), true);
  el.addEventListener("blur", () => noteForm(`onblur on #${el.id}`), true);

  // invalid fires when a field fails constraint validation on submit or blur
  el.addEventListener("invalid", (e) => {
    e.preventDefault(); // keep native tooltip quiet for clarity
    noteForm(`oninvalid on #${el.id}: ${el.validationMessage}`);
    formStatus.textContent = "Form invalid.";
    formStatus.className = "warn";
  });
});

form.addEventListener("reset", () => {
  noteForm("onreset");
  form.reset();
  formStatus.textContent = "Form reset.";
  formStatus.className = "muted";
});

// prevent navigation so the demo stays on page
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // trigger HTML5 validation manually
  if (!form.checkValidity()) {
    // invalid handlers above will run
    return;
  }
  noteForm("onsubmit");
  formStatus.textContent = "Form submitted ✔";
  formStatus.className = "ok";
});
