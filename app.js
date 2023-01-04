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
                <div clas="container" id="${element}">    
                <h3 class="titulo">${element}</h3>
                <button class="boton-remove" id="botonRemove">Eliminar</button>
                </div>
                `;
            taskTemplate.append(content);
            let botonEliminar = document.querySelectorAll(".boton-remove")
            botonEliminar = [...botonEliminar]
            botonEliminar.forEach((btn) =>{
             
                btn.addEventListener("click", event  => {
               
                  // let ind = btn.indice;
                  // if(ind===undefined){
                  let  indo = taskArray.indexOf(element)
                  //   console.log(ind)
                  // }
                
                  console.log(botonEliminar.indexOf(btn));
                  // if(ind !== taskArray.indexOf(element)){
                  //   console.log("bien")
                  // }

                    taskArray.splice(botonEliminar.indexOf(content) !== taskArray.indexOf(content))
                   console.log(taskArray)
                  
                  // console.log(taskArray)
                  // console.log(taskArray.indexOf(element))
                  // console.log(ind)
                  //console.log(gonorrea)
                 
    //let actualndex = ((taskIndex) && (btnIndex))
    // taskArray.splice(gonorrea = taskIndex)

                  
              
        
           
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
 
    const eliminarProducto = (id) => {
      const foundId = taskArray.find((element) => element.indice === id);
      console.log(foundId);
      taskArray = taskArray.filter((taskid) => {
        return taskid !== foundId;
      });    
      
    };
        