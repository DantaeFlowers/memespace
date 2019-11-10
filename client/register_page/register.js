document.addEventListener("DOMContentLoaded", ()=> {
    console.log("DOM Content Loaded");
    let registerForm = document.querySelector("#register");
    registerForm.addEventListener("submit", registerUser);
})
const registerUser = async (event) => {
    event.preventDefault();
    let firstName = document.querySelector("#first_name_input").value;
    let lastName = document.querySelector("#last_name_input").value;
    let userName = document.querySelector("#username_input").value;
    let email = document.querySelector("#email_input").value;
    let password = document.querySelector("#register_password").value;
    let url = `http://localhost:8080/users/register`
    let data = {
        "firstname": firstName, 
        "lastname": lastName, 
        "username": userName, 
        "email": email, 
        "userPassword": password
    };
    let createdUserObj = await axios.post(url, data).then((response) => {console.log(response.data)})
    console.log(createdUserObj)
}