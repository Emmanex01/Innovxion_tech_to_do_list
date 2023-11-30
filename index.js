const form = document.querySelector("form");
const submitBtn = document.getElementById("task-submit");
const tasksList = document.querySelector(".tasks");

const taskInput = document.getElementById("task-input");





submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (taskInput.value === " ") {
        alert("Please include a task before adding to the list!")
        return
    }

    const task_content = document.createElement("div");
    task_content.classList.add("task");
    tasksList.appendChild(task_content);
    console.log(task_content)

    const taskDisplay = document.createElement("input");
    taskDisplay.classList.add("task-text-display");
    taskDisplay.setAttribute("readonly", "readonly");
    task_content.appendChild(taskDisplay);

    const taskAction = document.createElement("div");
    taskAction.classList.add("actions");
    task_content.appendChild(taskAction);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.innerText = "EDIT";
    taskAction.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerText = "DELETE";
    taskAction.appendChild(deleteBtn);

    
    taskDisplay.value = taskInput.value;
    taskInput.value = " ";

    editBtn.addEventListener("click", () => {

    if ( editBtn.innerHTML === "EDIT") {
        taskDisplay.removeAttribute("readonly")
        editBtn.innerHTML = "SAVE"
    } else {
        taskDisplay.setAttribute("readonly", "readonly");
        editBtn.innerHTML = "EDIT"
    }
    })

    deleteBtn.addEventListener("click", () => {
        tasksList.removeChild(task_content)
    })


})

