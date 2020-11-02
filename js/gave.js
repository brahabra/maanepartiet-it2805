let total = 0;

const submit = get("#submit");
submit.addEventListener("click", donate);

const caps = get("#caps");
caps.addEventListener("change", addCaps);

const kopp = get("#kopp");
kopp.addEventListener("change", addKopp);

const tskjorte = get("#t-skjorte");
tskjorte.addEventListener("change", addTskjorte);

const rocket = get("#rocket-launch");
rocket.addEventListener("change", addRocket);

const donasjon = get("#donasjon");
donasjon.addEventListener("change", addDonasjon);

const reset = get("#reset");
reset.addEventListener("click", reset_total);

function donate() {
  console.log("hei");
}

function reset_total() {
  get("#kopp").checked = false;
  get("#caps").checked = false;
  get("#t-skjorte").checked = false;
  get("#rocket-launch").checked = false;
  get("#donasjon").value = 0;
  total = 0;
  updateOutput();
}

function addDonasjon() {
  if (donasjon.value == "") {
    donasjon.value = 0;
  }
  let verdi = parseInt(donasjon.value);
  total = total + verdi;
  updateOutput();
  console.log(total);
}

function addCaps() {
  let verdi = parseInt(this.value);
  if (this.checked) {
    total = total + verdi;
  } else {
    total = total - verdi;
  }
  updateOutput();
  console.log(total);
}

function addKopp() {
  let verdi = parseInt(this.value);
  if (this.checked) {
    total = total + verdi;
  } else {
    total = total - verdi;
  }
  updateOutput();
  console.log(total);
}

function addTskjorte() {
  let verdi = parseInt(this.value);
  if (this.checked) {
    total = total + verdi;
  } else {
    total = total - verdi;
  }
  updateOutput();
  console.log(total);
}

function addRocket() {
  let verdi = parseInt(this.value);
  if (this.checked) {
    total = total + verdi;
  } else {
    total = total - verdi;
  }
  updateOutput();
  console.log(total);
}

function updateOutput() {
  const output = get("#totalt");
  output.innerHTML = total;
}

function get(selector) {
  return document.querySelector(selector);
}
