
function AddTask() {
    let task = document.getElementById('inpTask').value;
    console.log(task);
    if (task === "")
        alert("Kindly enter value");
    else {

        let LTask = document.getElementById("LTask");
        console.log(LTask);
        let liTask = document.createElement("li");

        liTask.onclick = MarkTask;
        liTask.className = 'list-group-item';

        let SpanTask = document.createElement("span");
        SpanTask.innerText = task;
        SpanTask.className = 'SpanClass'

        var btn_Task_Del = document.createElement("input");
        btn_Task_Del.type = "button";
        btn_Task_Del.value = "Delete";
        btn_Task_Del.className = "btn btn-outline-secondary DelBtn";
        btn_Task_Del.onclick = DeleteTask;

        liTask.append(SpanTask);
        liTask.append(btn_Task_Del);
        LTask.append(liTask);

        document.getElementById('inpTask').value = "";
    }
}
function DeleteTask(event) {
    console.log("task");
    console.log(event.target);
    let input = event.target.parentNode;
    console.log(input);
    input.remove();

}
function SearchTask() {
    let task = document.getElementById('inpTask').value;
    console.log(task);
    if (task === "")
        alert("Kindly enter value");
    else {
        let li = document.getElementsByTagName('li');
        let liValues = [];
        console.log(li);
        for (let index = 0; index < li.length; index++) {
            liValues.push(li[index].innerText);

        }
        console.log(liValues);
        var res = liValues.find(ele => ele == task);
        console.log(res);
        if (res) {
            alert("element Exist");
        }
        else {
            alert("element does not exist");
        }
    }
}
function MarkTask(event) {
    console.log("Marked");
    let element = event.target;
    element.className = 'list-group-item Mark';
    element.disable=true;
}