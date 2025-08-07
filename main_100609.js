let addTaskButton = document.getElementById("add-task");
let addTaskPage = document.getElementById("add-task-page");
let allTasksDiv = document.getElementById("all-tasks");
let sunTasksDiv = document.getElementById("sun-tasks");
let monTasksDiv = document.getElementById("mon-tasks");
let tuesTasksDiv = document.getElementById("tues-tasks");
let wedTasksDiv = document.getElementById("wed-tasks");
let thurTasksDiv = document.getElementById("thur-tasks");
let friTasksDiv = document.getElementById("fri-tasks");
let satTasksDiv = document.getElementById("sat-tasks");
let daysIcons = ["Sun-icon", "Mon-icon", "Tues-icon", "Wed-icon", "Thur-icon", "Fri-icon", "Sat-icon"];
let removeButtons =  document.getElementsByClassName("btn btn-sm btn-outline-danger rounded-circle d-flex align-items-center justify-content-center");
let doneIcon = document.getElementsByClassName("bi bi-journal-check fs-5 text-secondary");
let hideAddTaskPage = document.getElementById("hide-add-task-page");
if (window.localStorage.getItem("tasks")) {
    let mydata = JSON.parse(localStorage.getItem("tasks")) || {};
    for (let dayId in mydata) {
        let dayDiv = document.getElementById(dayId);
        mydata[dayId].forEach(task => {
            dayDiv.insertAdjacentHTML("beforeend", task);
        });
    }
}
    for (let index = 0; index < doneIcon.length; index++) {
        if (window.localStorage.getItem(index)) {
        doneIcon[index].classList.add("active-done-icon");
    }
}
for (let index = 0; index < daysIcons.length; index++) {
    document.getElementById(daysIcons[index]).addEventListener("click", function () {
        if (daysIcons[index] === "Sun-icon") {
            for (let index = 0; index < daysIcons.length; index++) {
                if (daysIcons[index] !== "Sun-icon") {
                    document.getElementById(daysIcons[index]).classList.remove("active-days");
                }
            }
            this.classList.add("active-days");
            sunTasksDiv.style.display = "block";
            monTasksDiv.style.display = "none";
            tuesTasksDiv.style.display = "none";
            wedTasksDiv.style.display = "none";
            thurTasksDiv.style.display = "none";
            friTasksDiv.style.display = "none";
            satTasksDiv.style.display = "none";
            if (sunTasksDiv.innerHTML === "") {
            let p = document.createElement("p");
            p.id = "no-tasks";
            p.textContent = "No Tasks In This Day!";
            p.style.color = "white";
            sunTasksDiv.appendChild(p);
    }
        } else if (daysIcons[index] === "Mon-icon") {
        for (let index = 0; index < daysIcons.length; index++) {
                if (daysIcons[index] !== "Mon-icon") {
                    document.getElementById(daysIcons[index]).classList.remove("active-days");
                }
            }
            this.classList.add("active-days");
            sunTasksDiv.style.display = "none";
            monTasksDiv.style.display = "block";
            tuesTasksDiv.style.display = "none";
            wedTasksDiv.style.display = "none";
            thurTasksDiv.style.display = "none";
            friTasksDiv.style.display = "none";
            satTasksDiv.style.display = "none";
            if (monTasksDiv.innerHTML === "") {
            let p = document.createElement("p");
            p.id = "no-tasks";
            p.textContent = "No Tasks In This Day!";
            p.style.color = "white";
            monTasksDiv.appendChild(p);
    }
        } else if (daysIcons[index] === "Tues-icon") {
            for (let index = 0; index < daysIcons.length; index++) {
                if (daysIcons[index] !== "Tues-icon") {
                    document.getElementById(daysIcons[index]).classList.remove("active-days");
                }
            }
            this.classList.add("active-days");
            sunTasksDiv.style.display = "none";
            monTasksDiv.style.display = "none";
            tuesTasksDiv.style.display = "block";
            wedTasksDiv.style.display = "none";
            thurTasksDiv.style.display = "none";
            friTasksDiv.style.display = "none";
            satTasksDiv.style.display = "none";
            if (tuesTasksDiv.innerHTML === "") {
            let p = document.createElement("p");
            p.id = "no-tasks";
            p.textContent = "No Tasks In This Day!";
            p.style.color = "white";
            tuesTasksDiv.appendChild(p);
    }
        } else if (daysIcons[index] === "Wed-icon") {
            for (let index = 0; index < daysIcons.length; index++) {
                if (daysIcons[index] !== "Wed-icon") {
                    document.getElementById(daysIcons[index]).classList.remove("active-days");
                }
            }
            this.classList.add("active-days");
            sunTasksDiv.style.display = "none";
            monTasksDiv.style.display = "none";
            tuesTasksDiv.style.display = "none";
            wedTasksDiv.style.display = "block";
            thurTasksDiv.style.display = "none";
            friTasksDiv.style.display = "none";
            satTasksDiv.style.display = "none";
            if (wedTasksDiv.innerHTML === "") {
            let p = document.createElement("p");
            p.id = "no-tasks";
            p.textContent = "No Tasks In This Day!";
            p.style.color = "white";
            wedTasksDiv.appendChild(p);
    }
        } else if (daysIcons[index] === "Thur-icon") {
            for (let index = 0; index < daysIcons.length; index++) {
                if (daysIcons[index] !== "Thur-icon") {
                    document.getElementById(daysIcons[index]).classList.remove("active-days");
                }
            }
            this.classList.add("active-days");
            sunTasksDiv.style.display = "none";
            monTasksDiv.style.display = "none";
            tuesTasksDiv.style.display = "none";
            wedTasksDiv.style.display = "none";
            thurTasksDiv.style.display = "block";
            friTasksDiv.style.display = "none";
            satTasksDiv.style.display = "none";
            if (thurTasksDiv.innerHTML === "") {
            let p = document.createElement("p");
            p.id = "no-tasks";
            p.textContent = "No Tasks In This Day!";
            p.style.color = "white";
            thurTasksDiv.appendChild(p);
    }
        } else if (daysIcons[index] === "Fri-icon") {
            for (let index = 0; index < daysIcons.length; index++) {
                if (daysIcons[index] !== "Fru-icon") {
                    document.getElementById(daysIcons[index]).classList.remove("active-days");
                }
            }
            this.classList.add("active-days");
            sunTasksDiv.style.display = "none";
            monTasksDiv.style.display = "none";
            tuesTasksDiv.style.display = "none";
            wedTasksDiv.style.display = "none";
            thurTasksDiv.style.display = "none";
            friTasksDiv.style.display = "block";
            satTasksDiv.style.display = "none";
            if (friTasksDiv.innerHTML === "") {
            let p = document.createElement("p");
            p.id = "no-tasks";
            p.textContent = "No Tasks In This Day!";
            p.style.color = "white";
            friTasksDiv.appendChild(p);
    }
        } else if (daysIcons[index] === "Sat-icon") {
            for (let index = 0; index < daysIcons.length; index++) {
                if (daysIcons[index] !== "Sat-icon") {
                    document.getElementById(daysIcons[index]).classList.remove("active-days");
                }
            }
            this.classList.add("active-days");
            sunTasksDiv.style.display = "none";
            monTasksDiv.style.display = "none";
            tuesTasksDiv.style.display = "none";
            wedTasksDiv.style.display = "none";
            thurTasksDiv.style.display = "none";
            friTasksDiv.style.display = "none";
            satTasksDiv.style.display = "block";
            if (satTasksDiv.innerHTML === "") {
            let p = document.createElement("p");
            p.id = "no-tasks";
            p.textContent = "No Tasks In This Day!";
            p.style.color = "white";
            satTasksDiv.appendChild(p);
    }
    }
    vewAllTaskButton.classList.remove("active-allTasksVew");
});
}
let count = "z";
addTaskButton.addEventListener("click", function () {
    addTaskPage.style.display = "block";
    let AddTaskPageButton = document.getElementById("add-task-page-button");
    let taskNameInput = document.getElementById("taskTitle");
    let taskTimeInput = document.getElementById("taskTime");
    let taskDayInput = document.getElementById("daySelect");
    AddTaskPageButton.addEventListener("click", function (e) {
        addTaskPage.style.display = "block";
        let mainTaskDiv = document.createElement("div");
        mainTaskDiv.className = "container my-3";
        mainTaskDiv.id = "main";
        mainTaskDiv.style.maxWidth = "500px";
        let x = document.createElement("div");
        x.className = "d-flex align-items-center border rounded-4 p-3 shadow-sm";
        x.id = "xx";
        let sideRectangle = document.createElement("div");
        sideRectangle.className = "me-3";
        sideRectangle.style.width = "10px";
    sideRectangle.style.height = "40px";
    sideRectangle.style.backgroundColor = "#f4c430";
    sideRectangle.style.borderRadius = "5px";
    x.appendChild(sideRectangle);
    let taskContent = document.createElement("div");
    taskContent.className = "flex-grow-1";
    let timeOfTask = document.createElement("div");
    timeOfTask.className = "text-muted small";
    timeOfTask.textContent = taskTimeInput.value;
    taskContent.appendChild(timeOfTask);
    let taskName = document.createElement("div");
    taskName.className = "fw-semibold";
    taskName.textContent = taskNameInput.value;
    taskContent.appendChild(taskName);
    x.appendChild(taskContent);
    let y = document.createElement("i");
    y.className = "bi bi-journal-check fs-5 text-secondary";
    y.id = count + "z";
    count += "z";
    x.appendChild(y);
    let removeTaskButton = document.createElement("button");
    removeTaskButton.className = "btn btn-sm btn-outline-danger rounded-circle d-flex align-items-center justify-content-center";
    removeTaskButton.style.width = "32px";
    removeTaskButton.style.height = "32px";
    removeTaskButton.style.marginLeft = "2%";
    let n = document.createElement("i");
    n.className = "bi bi-trash";
    removeTaskButton.appendChild(n);
    x.appendChild(removeTaskButton);
    mainTaskDiv.appendChild(x);
    mainTaskDiv.style.backgroundColor = "rgba(246, 204, 107, 1)"
    switch (taskDayInput.value) {
        case "sunday": 
        let dataS = JSON.parse(localStorage.getItem("tasks")) || {};
        if (!dataS["sun-tasks"]) {
            dataS["sun-tasks"] = [];
        }
        dataS["sun-tasks"].push(mainTaskDiv.outerHTML);
        localStorage.setItem("tasks", JSON.stringify(dataS));
        sunTasksDiv.appendChild(mainTaskDiv);
        break;
        case "monday":
            let dataM = JSON.parse(localStorage.getItem("tasks")) || {};
            if (!dataM["mon-tasks"]) {
                dataM["mon-tasks"] = [];
            }
            dataM["mon-tasks"].push(mainTaskDiv.outerHTML);
            localStorage.setItem("tasks", JSON.stringify(dataM));
            monTasksDiv.appendChild(mainTaskDiv);
            break;
            case "tuesday": 
            let dataT = JSON.parse(localStorage.getItem("tasks")) || {};
            if (!dataT["tues-tasks"]) {
                dataT["tues-tasks"] = [];
            }
            dataT["tues-tasks"].push(mainTaskDiv.outerHTML);
            localStorage.setItem("tasks", JSON.stringify(dataT));
            tuesTasksDiv.appendChild(mainTaskDiv);
        break;
        case "wednesday": 
        let dataW = JSON.parse(localStorage.getItem("tasks")) || {};
        if (!dataW["wed-tasks"]) {
            dataW["wed-tasks"] = [];
        }
        dataW["wed-tasks"].push(mainTaskDiv.outerHTML);
        localStorage.setItem("tasks", JSON.stringify(dataW));
        wedTasksDiv.appendChild(mainTaskDiv);
        break;
        case "thursday": 
        let dataTh = JSON.parse(localStorage.getItem("tasks")) || {};
        if (!dataTh["thur-tasks"]) {
            dataTh["thur-tasks"] = [];
        }
        dataW["thur-tasks"].push(mainTaskDiv.outerHTML);
        localStorage.setItem("tasks", JSON.stringify(dataTh));
        thurTasksDiv.appendChild(mainTaskDiv);
        break;
        case "friday": 
        let dataF = JSON.parse(localStorage.getItem("tasks")) || {};
        if (!dataF["fri-tasks"]) {
            dataF["fri-tasks"] = [];
        }
        dataF["fri-tasks"].push(mainTaskDiv.outerHTML);
        localStorage.setItem("tasks", JSON.stringify(dataF));
        friTasksDiv.appendChild(mainTaskDiv);
        break;
        case "saturday": 
        let dataSa = JSON.parse(localStorage.getItem("tasks")) || {};
        if (!dataSa["sat-tasks"]) {
            dataSa["sat-tasks"] = [];
        }
        dataSa["sat-tasks"].push(mainTaskDiv.outerHTML);
        localStorage.setItem("tasks", JSON.stringify(dataSa));
        satTasksDiv.appendChild(mainTaskDiv);
        break;
    }
   
    
});
 hideAddTaskPage.addEventListener("click", function () {
    // console.log("teez");
    addTaskPage.style.display = "none";
});
});
for (let index = 0; index < removeButtons.length; index++) {
    removeButtons[index].addEventListener("click", function () {
        let data = JSON.parse(localStorage.getItem("tasks"));
        let div = this.parentNode.parentNode;
        let index = data[this.parentNode.parentNode.parentNode.id].indexOf(div.outerHTML);
        data[this.parentNode.parentNode.parentNode.id].splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(data));
        this.parentNode.parentNode.remove();
    });
}
for (let i = 0; i < doneIcon.length; i++) {
doneIcon[i].addEventListener("click", function () {
    this.classList.toggle("active-done-icon");
    if (this.classList.contains("active-done-icon")) {
    window.localStorage.setItem(i, "active-done-icon");
    } else {
        window.localStorage.removeItem(i);
    }
});
}
let vewAllTaskButton = document.getElementById("all-tasks-vew");
vewAllTaskButton.addEventListener("click", function () {
    for (let index = 0; index < daysIcons.length; index++) {
        document.getElementById(daysIcons[index]).classList.remove("active-days");
    }
    this.classList.add("active-allTasksVew");
    sunTasksDiv.style.display = "none";
    monTasksDiv.style.display = "none";
    tuesTasksDiv.style.display = "none";
    wedTasksDiv.style.display = "none";
    thurTasksDiv.style.display = "none";
    friTasksDiv.style.display = "none";
    satTasksDiv.style.display = "none";
    if (sunTasksDiv.textContent !== "No Tasks In This Day!") {
        sunTasksDiv.style.display = "block";
    }
    if (monTasksDiv.textContent !== "No Tasks In This Day!") {
        monTasksDiv.style.display = "block";
    }
    if (tuesTasksDiv.textContent !== "No Tasks In This Day!") {
        tuesTasksDiv.style.display = "block";
    }
    if (wedTasksDiv.textContent !== "No Tasks In This Day!") {
        wedTasksDiv.style.display = "block";
    }
    if (thurTasksDiv.textContent !== "No Tasks In This Day!") {
        thurTasksDiv.style.display = "block";
    }
    if (friTasksDiv.textContent !== "No Tasks In This Day!") {
        friTasksDiv.style.display = "block";
    }
    if (satTasksDiv.textContent !== "No Tasks In This Day!") {
        satTasksDiv.style.display = "block";
    }
});

// window.localStorage.clear();