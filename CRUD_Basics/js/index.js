let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Submit button clicked!");
    formValidation();
});


// Validate form input
let formValidation = () => {
    if (input.value === ""){

        msg.innerHTML = "Post cannot be blank!";
        console.log("Failure");
    } else {

        msg.innerHTML = "";
        console.log("Success");
        acceptData();
    }
};


// get submitted data

let data = {};

let acceptData = () => {
    data["text"] = input.value;
    console.log(data);
    createPost();
}

// create post

let createPost = () => {
    posts.innerHTML += 
    `
    <div>
        <p>${data.text}</p>
        <span class="options">
            <i onclick="editPost(this)" class="fa-solid fa-pencil"></i>
            <i onclick="deletePost(this)" class="fa-solid fa-trash-can-arrow-up"></i>
        </span>
    </div>
    `
    input.value = "";
}

// delete post

let deletePost = (post) => {
    post.parentElement.parentElement.remove();
};

// edit post

let editPost = (post) => {
    input.value = post.parentElement.previousElementSibling.innerHTML;
    post.parentElement.parentElement.remove();
}