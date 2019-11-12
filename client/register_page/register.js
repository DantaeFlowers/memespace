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
                console.log(response)
                nextPage(response);
            }
        })
    }
const nextPage = (response) => {
    let containerDiv = document.querySelector("#register_div");
    let pTag = document.createElement("p");
        pTag.innerText = response.data.message;
        pTag.className = "success";
        containerDiv.append(pTag);
    window.setTimeout(window.location = "../feed/feed.html", 4000);
}
// const showError = (error) => {
//     console.log("error")
// }