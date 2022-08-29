// Validate Input Field
document.querySelector('#push').onclick = function()
{
    if(document.querySelector('#newtask input').value.length == 0)
    {
        alert("Please Enter A Task.")
    }
    // Adding a new task
    else
    {   
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                <i class="far fa-trash-alt"></i>
                </button>
            </div>`;
            // Deleting a task
            var current_tasks = document.querySelectorAll(".delete");
            for(var i=0; i<current_tasks.length; i++){
                current_tasks[i].onclick = function(){
                    this.parentNode.remove();
                }
            }
            // crossing off a completed task
            var tasks = document.querySelectorAll(".task");
            for(var i=0; i<tasks.length; i++){
                tasks[i].onclick = function(){
                    this.classList.toggle('completed');
                }
            }
            // Clearing the input field after each entry
            document.querySelector("#newtask input").value = "";
    }
}