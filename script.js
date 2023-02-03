let teams = document.querySelector("#teams");
let team = document.querySelectorAll(".team");
let accounts = document.querySelector("#accounts");
team.forEach((team) => {
  team.innerHTML = teams.innerHTML;
});

const toggle = document.querySelector(".toggleMode");

if (localStorage.getItem("theme")) {
  var theme = localStorage.getItem("theme");
  document.documentElement.classList.add(theme)
}


toggle.addEventListener("click", function () {


  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("theme");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});


