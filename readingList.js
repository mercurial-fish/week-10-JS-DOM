let id = 0;

//NOTE - The following code calls on the id "add-book" that is the id of the create button on the HTML Page.
//It then adds an event listener for when it is clicked and provides a function for what happens after it is clicked.
document.getElementById("add-book").addEventListener("click", () => {

    //NOTE - The following code establishes the table variable as the table from the HTML page.
    //It then establishes the row variable as the insert row function.
    let table = document.getElementById("reading-list");
    let row = table.insertRow(1);
    //NOTE - The following code gives the inserted rows id numbers, so as rows are added, they get numbers,
    //which can then be called upon later to be deleted.
    row.setAttribute("id", `item-${id}`);
    //NOTE - The following code calls on the value given for each of these elements and places it as a cell in the new row.
    row.insertCell(0).innerHTML = document.getElementById("new-title").value;
    row.insertCell(1).innerHTML = document.getElementById("new-author").value;
    row.insertCell(2).innerHTML = document.getElementById("new-genre").value;
    row.insertCell(3).innerHTML = document.getElementById("new-page-count").value;
    row.insertCell(4).innerHTML = document.getElementById("new-start-date").value;
    row.insertCell(5).innerHTML = document.getElementById("new-due-date").value;

    //NOTE - the following code creates the complete button in cell 6 of each row created.
    let actions = row.insertCell(6);
    actions.appendChild(createCompleteButton(id++));
    //NOTE - the following code makes the values of the form reset after an entry has been created.
    document.getElementById("new-title").value = "";
    document.getElementById("new-author").value = "";
    document.getElementById("new-genre").value = "";
    document.getElementById("new-page-count").value = "";
    document.getElementById("new-start-date").value = "";
    document.getElementById("new-due-date").value = "";
});

//NOTE - The following code creates the function called above. It creates the button, styles it, and gives it the function
//to remove the row it is apart of.
function createCompleteButton(id) {
    let completeBtn = document.createElement("button");
    completeBtn.className = "btn btn-primary";
    completeBtn.id = id;
    completeBtn.innerHTML = "Complete";
    completeBtn.onclick = () => {
        console.log(`deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return completeBtn;
};
