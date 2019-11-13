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
        // useableEmail(email);
    let password = document.querySelector("#register_password").value;
    let url = `http://localhost:8080/users/register`;
    let data = {
        "firstname": firstName, 
        "lastname": lastName, 
        "username": userName, 
        "email": email, 
        "userPassword": password
    };
        await axios.post(url, data)
        .then((response) => {
            if(response.data.status === "success") {
                showSuccessMsg(response);
            }
            else {
                showError(response)
            }
        })
    }
const showSuccessMsg = (response) => {
    let displayPara = document.querySelector("#display");
        displayPara.innerText = response.data.message;
        displayPara.className = "success";
    window.setTimeout(nextPage, 3000);
}
const nextPage = () => {
    window.location = "../feed/feed.html"
}
const showError = (response) => {
    let message = response.data.message;
    if(message.includes("username")) {
        usernameExists()
    } else if(message.includes("email")) {
        emailExists();
    }
}
const usernameExists = () => {
    let displayPara = document.querySelector("#display");
        displayPara.className = "error";
        displayPara.innerText = "Username exists. Please choose another username."
}
const emailExists = () => {
    let displayPara = document.querySelector("#display");
        displayPara.className = "error";
        displayPara.innerText = "Email is in use. Please use another email."
}  
// const useableEmail = (emailStr) => {
//     if(!emailStr.includes("@") || !emailStr.includes(".")) {
//     let displayPara = document.querySelector("#display");
//         displayPara.innerText = "Please enter a valid email."
//         displayPara.className = "error";
//     }
//     return;
// };
