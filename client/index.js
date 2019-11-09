document.addEventListener('DOMContentLoaded', ()=> {
    console.log('DOM Content Loaded');
    let loginForm = document.querySelector('#login');
    loginForm.addEventListener('submit', getUser);
})
const getUser = (event) => {
    event.preventDefault();
    //reroutes to /users/:id endpoint
    console.log('testing getUser');
}
const registerUserForm = (event) => {
    console.log('Testing registerUser');
}