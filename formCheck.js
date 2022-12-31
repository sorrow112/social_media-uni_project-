function err(input) {
  input.style.borderColor = "red";
}
function succ(input) {
  input.style.borderColor = "green";
}

function checkEmail() {
  const email = document.getElementById("email");
  const error = document.getElementById("sm-email");
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(email.value.trim())) {
    succ(email);
    error.innerHTML = "";
    return 1;
  } else {
    err(email);
    error.innerHTML = "enter a valid email address";
    return -1;
  }
}
function checkPassword() {
  const password = document.getElementById("password");
  const error = document.getElementById("sm-password");
  if (password.value.length < 4) {
    err(password);
    error.innerHTML = "too short";
    return -1;
  } else if (password.value.length > 15) {
    err(password);
    error.innerHTML = "too long";
    return -1;
  } else {
    error.innerHTML = "";
    succ(password);
    return 1;
  }
}

function checkFname() {
  const fname = document.getElementById("fname");
  const error = document.getElementById("sm-fname");
  if (fname.value.length < 3) {
    err(fname);
    error.innerHTML = "too short";
    return -1;
  } else if (fname.value.length > 15) {
    err(fname);
    error.innerHTML = "too long";
    return -1;
  } else {
    succ(fname);
    error.innerHTML = "";
    return 1;
  }
}
function checkLname() {
  const lname = document.getElementById("lname");
  const error = document.getElementById("sm-lname");
  if (lname.value.length < 3) {
    err(lname);
    error.innerHTML = "too short";
    return -1;
  } else if (lname.value.length > 15) {
    err(lname);
    error.innerHTML = "too long";
    return -1;
  } else {
    succ(lname);
    error.innerHTML = "";
    return 1;
  }
}
function checkPhone() {
  const phone = document.getElementById("phone");
  const error = document.getElementById("sm-phone");
  if (
    phone.value.length > 8 ||
    phone.value.length < 8 ||
    isNaN(Number(phone.value))
  ) {
    err(phone);
    error.innerHTML = "invalid input";
    return -1;
  } else {
    succ(phone);
    error.innerHTML = "";
    return 1;
  }
}

function sub() {
  let a = checkFname();
  let b = checkLname();
  let c = checkEmail();
  let d = checkPassword();
  if (
    1 == checkFname() &&
    1 == checkLname() &&
    1 == checkEmail() &&
    1 == checkPassword() &&
    1 == checkPhone()
  ) {
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const day = document.getElementById("date-day");
    const month = document.getElementById("date-month");
    const year = document.getElementById("date-year");
    localStorage.setItem("fname", fname.value);
    localStorage.setItem("lname", lname.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem(
      "date",
      day.value + "/" + month.value + "/" + year.value
    );
    setTimeout(redir, 3000);
  }
}

function redir() {
  alert("you've registered successfully");
  document.location.href = "feed.html";
}
function gohome() {
  alert("Welcome!");
  document.location.href = "/";
}
function login() {
  if (1 == checkPassword() && 1 == checkEmail()) {
    const email = document.getElementById("email");
    localStorage.setItem("email", email.value);
    console.log("test");
    const parts = email.value.split("@");
    localStorage.setItem("fname", parts[0]);
    localStorage.setItem("lname", parts[0]);
    localStorage.setItem("phone", "xxxxxxxx");
    localStorage.setItem("date", "jj/mm/aaaa");
    setTimeout(gohome, 3000);
  } else {
    checkEmail();
  }
}
