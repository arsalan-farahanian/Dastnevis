import { submitForm } from "./utils";

if (window.location.pathname === "/signup") {
  document.querySelector(".signup-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.querySelector("input[name=username]").value;
    const email = document.querySelector("input[name=email]").value;
    const password = document.querySelector("input[name=password]").value;
    const password2 = document.querySelector("input[name=password2]").value;
    submitForm("/signup", { username, email, password, password2 });
  });
}
