
// target html ids

// let username = document.getElementById("username");
// let email = document.getElementById("email");
// let password = document.getElementById("password");

// keep it DRY

let getId = (id) => document.getElementById(id);
let getClass = (className) => document.getElementsByClassName(className);

let username = getId("username"),
    email = getId("email"),
    password = getId("password"),
    form = getId("form"),
    errorMsg = getClass("error"),
    successIcon = getClass("success_icon"),
    failIcon = getClass("fail_icon");


    // errorMsg = ['error', 'error', 'error'];
    // errorMsg[2].innerHTML = 'Password error';

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        engine(username, 0, "Username cannot be blank!");
        engine(email, 1, "Email cannot be blank!");
        engine(password, 2, "Password cannot be blank!");
        
    });

    // validation engine

    let engine = (id, serial, msg) => {
        if (id.value.trim() === ""){
            errorMsg[serial].innerHTML = msg;
            failIcon[serial].style.opacity = "1";
            successIcon[serial].style.opacity = "0"
        }  else {
            errorMsg[serial].innerHTML = "";
            successIcon[serial].style.opacity = "1"
            failIcon[serial].style.opacity = "0"
        }
    }