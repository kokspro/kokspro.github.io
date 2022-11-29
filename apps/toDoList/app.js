var toDoList = {
    // Selecting Constants
    inputTag: document.getElementById("input"),
    ul: document.getElementById("list"),
    addButton: document.getElementById("addButton"),   
    showHideButton: document.getElementById("showHide"),
    // Adding Event Listeners to Buttons
    init: function() {
        toDoList.addButton.addEventListener('click', toDoList.addTask);
        toDoList.inputTag.addEventListener('keypress', toDoList.keyPress);
        toDoList.showHideButton.addEventListener('click', toDoList.showHide);
    },
    // Creating Task Elements
    addTask: function() {
        if ( toDoList.inputTag.value != "" ) {
            let inputValue = toDoList.inputTag.value;
            const li = document.createElement("li");
            const removeButton = document.createElement("button");
            removeButton.setAttribute("class", "remove");
            const checkBox = document.createElement("input");
            checkBox.setAttribute("type", "checkbox");
            checkBox.setAttribute("class", "checkbox");
            checkBox.addEventListener("click", toDoList.checked);
            li.innerHTML = inputValue;
            removeButton.innerHTML = "Remove";
            li.appendChild(checkBox);
            li.appendChild(removeButton);
            toDoList.ul.appendChild(li);
            removeButton.onclick = toDoList.removeTask;
            toDoList.inputTag.value = "";
        }
    },
    // Check Box Effect Change
    checked: function() {
        this.parentNode.classList.toggle('toggle');
    },
    // Keyboard Add Task
    keyPress: function(e) {
        if ( e.key === "Enter") {
            e.preventDefault();
            toDoList.addButton.click();
        }
    },
    // List Element Removal
    removeTask: function() {
        this.parentNode.remove();
    },
    // Show/Hide List
    showHide: function() {
        if ( toDoList.ul.style.display == "none" ) {
            toDoList.ul.style.display = "block";
            toDoList.showHideButton.innerHTML = "Hide List";
        } else {
            toDoList.ul.style.display = "none";
            toDoList.showHideButton.innerHTML = "Show List";
        }
    }
}
// Start Program on Load
window.onload = toDoList.init;