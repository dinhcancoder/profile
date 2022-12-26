let formEl = document.querySelector(".form");
let profileEl = document.querySelector(".profile");

document.querySelector(".form-submit").addEventListener("click", () => {
  let user = document.getElementById("user");
  let password = document.getElementById("password");
  let checkUser = false;
  let checkPassword = false;
  if (user.value === "") {
    user.parentElement.querySelector(".form-error").innerHTML =
      "Tên người dùng không được để trống!";
    user.style.outline = "1px solid rgb(154, 55, 55)";
  } else if (user.value != "bekieu2k4") {
    user.parentElement.querySelector(".form-error").innerHTML =
      "Tên người dùng không hợp lệ!";
    user.style.outline = "1px solid rgb(154, 55, 55)";
  } else {
    checkUser = true;
    user.parentElement.querySelector(".form-error").innerHTML = "";
    user.style.outline = "";
  }
  if (password.value === "") {
    password.parentElement.querySelector(".form-error").innerHTML =
      "Mật không không được để trống!";
    password.style.outline = "1px solid rgb(154, 55, 55)";
  } else if (password.value != "15112004") {
    password.parentElement.querySelector(".form-error").innerHTML =
      "Mật không không chính xác!";
    password.style.outline = "1px solid rgb(154, 55, 55)";
  } else {
    checkPassword = true;
    password.parentElement.querySelector(".form-error").innerHTML = "";
    password.style.outline = "";
  }
  if (checkUser && checkPassword) {
    formEl.style.transform = "translate(-50%, -50%) scale(0)";
    profileEl.style.transform = "translate(-50%, -50%) scale(1)";
    profileEl.style.transitionDelay = "0.3s";
  }
});

document.querySelectorAll(".form-input").forEach((input) => {
  input.addEventListener("keyup", () => {
    input.parentElement.querySelector(".form-error").innerHTML = "";
    input.style.outline = "";
  });
});

document.querySelector(".darkmode").addEventListener("click", () => {
  document.querySelector("body").classList.toggle("active");
});

function showNavbar(e) {
  e.classList.toggle("showsidebar");
}

document.getElementById("close").addEventListener("click", () => {
  document.getElementById("iconS").classList.toggle("showsidebar");
});

function logout() {
  profileEl.style.transform = "translate(-50%, -50%) scale(0)";
  formEl.style.transform = "translate(-50%, -50%) scale(1)";
  formEl.style.transitionDelay = "0.3s";
}
