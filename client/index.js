document.addEventListener("DOMContentLoaded", ()=> {
    console.log("DOM Content Loaded");
    let loginForm = document.querySelector("#login");
    loginForm.addEventListener("submit", getUser);
    let registerForm = document.querySelector("#register");
    registerForm.addEventListener("submit", registerUser);
})
const getUser = (event) => {
    event.preventDefault();
    //reroutes to /users/:id endpoint
    console.log("testing getUser axios request");
}
const registerUser = (event) => {
    event.preventDefault();
    console.log("testing registerUser axios request")
}