var getInputs = document.getElementById("input");
var getList = document.getElementById("list");

const addItem = () => {
    if (getInputs.value.trim() === "") return;

    getList.innerHTML += `
    <li>
        <span class="task">${getInputs.value}</span>
        <span class="options">
            <i class="fa-solid fa-trash"
            style="color:red; margin:15px; padding:10px;"
            onclick="deleteItem(this)">
            </i>

            <i class="fa-solid fa-pen-to-square"
            style="color:skyblue; margin:15px; padding:10px;"
            onclick="editItem(this)">
            </i>
        </span>
    </li>`;

    getInputs.value = "";
};

const deleteItem = (element) => {
    element.closest("li").remove();
};

const editItem = (element) => {
    let task = element.closest("li").querySelector(".task");

    let updatedText = prompt("Edit Task", task.innerText);

    if (updatedText !== null && updatedText.trim() !== "") {
        task.innerText = updatedText;
    }
};