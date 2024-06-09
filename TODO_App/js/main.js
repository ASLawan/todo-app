let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textArea = document.getElementById("textArea");
let tasks = document.getElementById("tasks");
let msg = document.getElementById("msg");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    formValidation();
});

// validate submission

let formValidation = () => {
    if (textInput.value === "") {
        console.log("Failure");
        msg.innerHTML = "Task title cannot be blank";
    } else {
        console.log("Success");
        msg.innerHTML = "";

        // invoke the acceptData function in success state
        accetpData();
    }
}


// Accept data from user input

// object to hold collected data
let data = {}

let accetpData = () => {
    data["title"] = textInput.value;
    data["date"] = dateInput.value;
    data["description"] = textArea.value;

    createTasks();
} 


// create tasks

let createTasks = () => {
    tasks.innerHTML += 
    `
    <div class="task">
        <span class="fw-bold">${data.title}</span>
        <span class="small text-secondary">${data.date}</span>
        <p>${data.description}</p>
        <span class="options mb-2">
            <i class="fa-solid fa-pencil"></i>
            <i class="fa-solid fa-trash-can-arrow-up"></i>
        </span>
    </div>
    `;

    resetForm();
}

// refresh application upon post creation

let resetForm = () => {
    textInput.value = "";
    dateInput.value = "";
    textArea.value = "";
}
