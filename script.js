const images = [
  "url('images/slide1.png')",
  "url('images/slide2.png')",
  "url('images/slide3.png')",
];
index = 0;
function slideshow() {
  let header = document.getElementById("intro");
  index = index + 1;
  if (index == 4) {
    index = 0;
    header.style.backgroundImage = images[index];
    setTimeout(slideshow, 4000);
  } else {
    header.style.backgroundImage = images[index];
    setTimeout(slideshow, 4000);
  }
}

function checkLogin() {
  if (localStorage.getItem("fname") != undefined) {
    document.getElementById("varLoginnav").style.display = "none";
  } else {
    document.getElementById("varProfilenav").style.display = "none";
  }
}
function logout() {
  localStorage.clear();
  setTimeout(gohome, 2000);
}
function gohome() {
  document.location.href = "/";
}

function upPostOne() {
  if (localStorage.getItem("fname") == undefined) {
    document.location.href = "/login.html";
  } else {
    const chev = document.getElementById("post1up");
    const nbr = document.getElementById("post1");
    toggleChevup(chev, nbr);
  }
}
function downPostOne() {
  if (localStorage.getItem("fname") == undefined) {
    document.location.href = "/login.html";
  } else {
    const chev = document.getElementById("post1down");
    const nbr = document.getElementById("post1");
    toggleChevdown(chev, nbr);
  }
}

function upPostTwo() {
  if (localStorage.getItem("fname") == undefined) {
    document.location.href = "/login.html";
  } else {
    const chev = document.getElementById("post2up");
    const nbr = document.getElementById("post2");
    toggleChevup(chev, nbr);
  }
}
function downPostTwo() {
  if (localStorage.getItem("fname") == undefined) {
    document.location.href = "/login.html";
  } else {
    const chev = document.getElementById("post2down");
    const nbr = document.getElementById("post2");
    toggleChevdown(chev, nbr);
  }
}
function upPostThree() {
  if (localStorage.getItem("fname") == undefined) {
    document.location.href = "/login.html";
  } else {
    const chev = document.getElementById("post3up");
    const nbr = document.getElementById("post3");
    toggleChevup(chev, nbr);
  }
}
function downPostThree() {
  if (localStorage.getItem("fname") == undefined) {
    document.location.href = "/login.html";
  } else {
    const chev = document.getElementById("post3down");
    const nbr = document.getElementById("post3");
    toggleChevdown(chev, nbr);
  }
}

function toggleChevup(chev, nbr) {
  if (!chev.classList.contains("chev-toggled")) {
    chev.classList.add("chev-toggled");
    nbr.innerHTML = Number(nbr.innerHTML) + 1;
  } else {
    chev.classList.remove("chev-toggled");
    nbr.innerHTML = Number(nbr.innerHTML) - 1;
  }
}
function toggleChevdown(chev, nbr) {
  if (!chev.classList.contains("chev-toggled")) {
    chev.classList.add("chev-toggled");
    nbr.innerHTML = Number(nbr.innerHTML) - 1;
  } else {
    chev.classList.remove("chev-toggled");
    nbr.innerHTML = Number(nbr.innerHTML) + 1;
  }
}
function gopostform() {
  document.location.href = "/postForm.html";
}
function gofeed() {
  document.location.href = "/feed.html";
}
function gotoregister() {
  document.location.href = "/registration.html";
}
function gotologin() {
  document.location.href = "/login.html";
}

function getProfile() {
  const fname = localStorage.getItem("fname");
  const lname = localStorage.getItem("lname");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");
  const date = localStorage.getItem("date");

  const fullName = document.getElementById("full-name");
  const femail = document.getElementById("email");
  const fphone = document.getElementById("phone");
  const bday = document.getElementById("birth");

  fullName.innerHTML = fname + " " + lname;
  femail.innerHTML = email;
  fphone.innerHTML = phone;
  bday.innerHTML = date;
}
function kickout() {
  if (localStorage.getItem("fname") == undefined) {
    document.location.href = "/login.html";
  }
}
