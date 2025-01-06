import "./styles.css";
const form = document.querySelector("form");
const submit = document.querySelector("button");

const email = form.elements["email"];
email.addEventListener("input", () => {
  const parts = email.value.split("@");
  if (parts.length !== 2) {
    email.setCustomValidity("Email must include @");
  } else if (parts[0] === "") {
    email.setCustomValidity("Email missing pre @ portion");
  } else if (parts[1] === "") {
    email.setCustomValidity("Email missing domain");
  } else {
    email.setCustomValidity("");
  }
  email.reportValidity();
});

const country = form.elements["country"];
country.addEventListener("input", () => {
  country.setCustomValidity("");
  if (!country.validity.valid) {
    country.setCustomValidity('Only nums, chars, "." and "-" allowed.');
  }
  country.reportValidity();
});

const zip = form.elements["zip"];
zip.addEventListener("input", () => {
  zip.setCustomValidity("");
  if (!zip.validity.valid) {
    zip.setCustomValidity('Only nums, chars, "." and "-" allowed.');
  }
  zip.reportValidity();
});

const pwd = form.elements["pwd"];
pwd.addEventListener("input", () => {
  pwd.setCustomValidity("");
  if (!pwd.validity.valid) {
    pwd.setCustomValidity("Password should be at least 8 chars long");
  }
  pwd.reportValidity();
});

const pwd_conf = form.elements["pwd_conf"];
pwd_conf.addEventListener("input", () => {
  pwd_conf.setCustomValidity("");
  if (!pwd_conf.validity.valid) {
    pwd_conf.setCustomValidity("Password should be at least 8 chars long");
  }

  pwd_conf.reportValidity();
});

form.addEventListener("input", (e) => {
  if (e.target !== pwd && e.target !== pwd_conf) {
    return;
  }

  if (pwd_conf.value === "" || pwd_conf.value === pwd.value) {
    setPasswordMatchError(false);
  } else {
    setPasswordMatchError(true);
  }
});

const errorMsg = document.querySelector(".password-match-error");
function setPasswordMatchError(enabled) {
  if (enabled) {
    errorMsg.classList.add("displayed");
  } else {
    errorMsg.classList.remove("displayed");
  }
}

submit.addEventListener("click", () => {
  if (form.reportValidity()) {
    alert("high five");
  } else {
    alert("invalid form");
  }
});
