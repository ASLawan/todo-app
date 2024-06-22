
// target html ids

// let username = document.getElementById("username");
// let email = document.getElementById("email");
// let password = document.getElementById("password");

// keep it DRY

let getId = (id) => document.getElementById(id);
let getclass = (className) => document.getElementsByClassName(className);

let username = getId("username"),
    email = getId("email"),
    password = getId("password"),
    errorMsg = getClass("error"),
    successIcon = getClass("success_icon"),
    failIcon = getclass("fail_icon");


    // errorMsg = ['error', 'error', 'error'];
    // errorMsg[2].innerHTML = 'Password error';