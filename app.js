const form = document.querySelector('form');
const ul = document.querySelector('#issues');

form.addEventListener('submit', function(e){
    e.preventDefault();
    addLi(this.elements.description, this.elements.severity, this.elements.person);
    this.elements.description.value = '';
    this.elements.severity.value = '';
    this.elements.person.value = '';

});

// Event Delegation (we are adding an event listener to the ul in order to access future lis)
ul.addEventListener('click', function(event){
    if(event.target.nodeName === "BUTTON" && event.target.classList.contains('deleteButton')){
        const li = event.target.parentElement.parentElement;
        ul.removeChild(li);
    }
    if(event.target.nodeName === "BUTTON" && event.target.classList.contains('closeButton')){
        const span = event.target.previousElementSibling.previousElementSibling.previousElementSibling.children[0];
        span.innerText = "Closed";

    }
})

function addLi(desc, severity, person){
    const id = Math.floor(Math.random()*100);
    ul.innerHTML += `<li class="my-4">
                        <div class="well p-3">
                            <p class="mb-1">Issue Id: ${id}</p>
                            <p class="status"><span class="badge badge-info">Open</span></p>
                            <p class="description">${desc.value}</p>
                            <p><span><i class="far fa-clock"></i></span> ${severity.value} <span><i class="fas fa-user"></i></span> ${person.value}</p>
                            <button onClick="closeIssue(${id})" class="btn btn-warning closeButton">Close</button> 
                            <button onClick="deleteIssue(${id})" class="btn btn-danger deleteButton">Delete</button>
                        </div>
                    </li>`
}