let input = document.querySelector(".inp input[type='text']");
let additem = document.querySelector(".additem");

let sv = localStorage.getItem('todo');
let todo = sv ? JSON.parse(sv) : [];

additem.addEventListener('click', () => {
    let inpData = input.value;
    if (inpData != '') {
        todo.push(inpData);
    }
    localStorage.setItem('todo', JSON.stringify(todo));
    location.reload();
});

todo.map((data, index) => {
    document.querySelector(".todo-list").innerHTML += `
            <div class="each-row">
                <span>${data}</span>
                <div class="m-icons">    
                    <span onclick="edit(${index})" class="inner-icons"><i class="fa-solid fa-pen-to-square"></i></span>    
                    <span onclick="del(${index})" class="inner-icons"><i class="fa-solid fa-trash"></i></span>    
                </div>
            </div class="each-row">
            `;
});

function del(index) {
    let deleted = todo.filter((data, i) => {
        return i !== index;
    });
    localStorage.setItem('todo', JSON.stringify(deleted));
    location.reload();
}

function edit(index) {
    let newText = prompt("Edit the todo:", todo[index]);
    if (newText !== '') {
        todo[index] = newText;
        localStorage.setItem('todo', JSON.stringify(todo));
        location.reload();
    }
}