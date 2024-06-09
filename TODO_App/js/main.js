let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textArea = document.getElementById("textArea");
let tasks = document.getElementById("tasks");
let msg = document.getElementById("msg");
let add = document.getElementById("add");


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

        add.setAttribute("data-bs-dismiss", "modal");
        add.click();

        //IIFE - Immediatelt Invoked Function Expression
        (() => {
            add.setAttribute("data-bs-dismiss", "");
        })();
    }
}


// Accept data from user input

// object to hold collected data
let data = [];

let accetpData = () => {

    data.push({
        title: textInput.value,
        date: dateInput.value,
        description: textArea.value,
    });

    console.log(data);

    // Save to Local storage -  to avoid page from losing tasks on refresh
    localStorage.setItem("data", JSON.stringify(data));

    createTasks();
} 


// create tasks

let createTasks = () => {
    tasks.innerHTML = "";
    data.map((x, y) => {
        return (tasks.innerHTML += 
                `
                <div class="task" id=${y}>
                    <span class="fw-bold">${x.title}</span>
                    <span class="small text-secondary">${x.date}</span>
                    <p>${x.description}</p>
                    <span class="options mb-2">
                        <i onclick="editTask(this)" data-bs-toggle="modal" data-bs-target="form" class="fa-solid fa-pencil"></i>
                        <i onclick="deleteTask(this);createTasks()" class="fa-solid fa-trash-can-arrow-up"></i>
                    </span>
                </div>
                `);
    });
    

    resetForm();
}

// Delete task


let deleteTask = (task) => {
    task.parentElement.parentElement.remove();
    data.splice(task.parentElement.parentElement.id, 1)
    localStorage.setItem("data", JSON.stringify(data));

    console.log(data);
}


let editTask = (task) => {
    let selectedTask = task.parentElement.parentElement;

    textInput.value = selectedTask.children[0].innerHTML;
    dateInput.value = selectedTask.children[1].innerHTML;
    textArea.value = selectedTask.children[2].innerHTML;

    // selectedTask.remove();
    deleteTask(task);
}
// refresh application upon post creation

let resetForm = () => {
    textInput.value = "";
    dateInput.value = "";
    textArea.value = "";
}


// Retrieve from Local storage with IIFE

(() => {
    data = JSON.parse(localStorage.getItem("data")) || [];

    createTasks()

    console.log(data);

})();