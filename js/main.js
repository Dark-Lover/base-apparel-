document.getElementById("btn").addEventListener("click", function (event) {
  event.preventDefault();
});

function check() {
  let tst = document.getElementById("myEmail").value;
  let error = document.getElementById("error");
  let imgErr = document.getElementById("error-img");
  if (validateEmail(tst) == true) {
    error.style.display = "none";
    imgErr.style.display = "none";
  } else {
    error.style.display = "block";
    imgErr.style.display = "block";
  }
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
