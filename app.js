let taskArray = [];
let taskTemplate = document.querySelector(".task-template");
let btnAddTask = document.querySelector(".btn-add-task");
btnAddTask.addEventListener("click", e =>{
    let inputTask = document.querySelector(".input-task").value
    console.log(inputTask) 
    taskArray.push(inputTask)
    console.log(taskArray)
    drawTasks(taskArray.slice(-1))
})
console.log(inputTask.value)

const drawTasks = (data) => {
        data.forEach((element) => {
            // POR CADA ELEMENTO CREO UN DIV CON SUS RESPECTIVOS ATRIBUTOS
            let content = document.createElement("div");
            content.className = "card";
            content.innerHTML = `   
                <div clas="container" id="${element.id}">    
                <h3 class="titulo">${element}</h3>
                <button class="boton-remove" id="botonRemove">Eliminar</button>
                </div>
                `;
            taskTemplate.append(content);
            content.querySelectorAll(".boton-remove").forEach((btn) =>{
                btn.addEventListener("click", () => {
                  let taskIndex = taskArray.indexOf(element)
                  console.log(taskIndex)
                  let btnIndex = btn.id = taskIndex
                  console.log(btnIndex)
                  let actualndex = ((taskIndex) && (btnIndex))
                taskArray = taskArray.filter(task => task!= actualndex)
                console.log(taskArray)
           
                    // const idActual = taskArray.some((productoActual) => productoActual === element);
                    // console.log(idActual)

                    // if (idActual) {
                    //     taskArray.forEach((prod) => {
                    //       if (prod.id === element.id) {
                    //         taskArray = taskArray.filter((task) => {
                    //           return task !== idActual;
                    //         });
                    //       }
                    //     });
                    //   } else {
                    //     console.log("desigual id?")
                    //   } 
              }
              ) 
              
    })
            
        })        
    }
 
      
        