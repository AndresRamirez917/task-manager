/**
 * - DECLARO LAS VARIABLES
 * - AGREGO LA TAREA AL ARRAY LUEGO DE HACER CLICK EN EL BOTÓN BTNADDTASK
 * - LLAMO A LA FUNCIÓN DRAWTASKS QUE DIBUJA LA TASK EN EL DOM
 * - SIEMPRE DIBUJARÁ LA ÚLTIMA TASK DEL ARRAY
 * - POR CADA ELEMENTO DE TASKARRAY DIBUJARÁ UNA TAREA EN EL DOM
 * - EL BOTÓNELIMINAR BORRA DEL DOM LA TASK SI SE HACE CLICK EN UN ELEMENTO QUE TENGA COMO NAME BOTONREMOVE
 * - AL HACER CLICK EN EL BOTÓNELIMINAR TAMBIÉN SE OBTIENE EL NOMBRE DE LA TAREA ACTUAL
 * - ESE NOMBRE SE ALMACENA EN UNA VARIABLE
 * - LUEGO SE RECORRE EL TASKARRAY EN BUSQUEDA DE UNA TAREA QUE TENGA EL MISMO NOMBRE ALMACENADO EN LA VARIABLE
 * - CUANDO SE ENCUENTRA, SE FILTRA EL TASKARRAY PARA ELIMINAR DEL ARRAY LA TAREA
 */

// DECLARACIÓN DE VARIABLES
let taskArray = [];
let taskTemplate = document.querySelector(".task-template");
let btnAddTask = document.querySelector(".btn-add-task");


// EVENTO CLICK DEL BOTÓN AGREGAR TAREA AL TASKARRAY
btnAddTask.addEventListener("click", (e) => {
    let inputTask = document.querySelector(".input-task").value;
    console.log(inputTask);
    taskArray.push(inputTask);
    console.log(taskArray);
    drawTasks(taskArray.slice(-1));
});

console.log(inputTask.value);

// FUNCIÓN DIBUJAR TASK
const drawTasks = (data) => {
    data.forEach((element) => {
        // POR CADA ELEMENTO CREO UN DIV CON SUS RESPECTIVOS ATRIBUTOS
        let content = document.createElement("div");
        content.className = "card";
        content.innerHTML = `   
                <div clas="container" id="${element}">    
                <h3 class="titulo">${element}</h3>
                <button class="boton-remove" name="botonRemove">Eliminar</button>
                </div>
                `;
        taskTemplate.append(content);


        // LÓGICA DEL BOTÓN ELIMINAR TASK
        let botonEliminar = document.querySelectorAll(".boton-remove");
        botonEliminar = [...botonEliminar];
        botonEliminar.forEach((btn) => {
            btn.addEventListener("click", (e) => {
        // BOTONREMOVE ES EL NAME QUE SE LE DIÓ AL BOTÓN, 
                if (btn.name === "botonRemove") {
        // REMUEVO CON LA PROPIEDAD TARGET EL NODE DEL DOM
                    e.target.parentNode.parentNode.remove();
        // AL HACER CLICK OBTENGO EL NOMBRE DE LA TAREA ACTUAL
                    let actualTask = e.target.parentNode.id;
                    console.log(actualTask)
        // RECORRO EL ARRAY DE TAREAS BUSCANDO UNA TAREA IGUAL A LA QUE ACTUALMENTE TENGO
                    for (let i = 0; i < taskArray.length; i++) {
                        if (actualTask === taskArray[i]) {
        // SI LA ENCUENTRO FILTRO EL ARRAY Y ELIMINO DEL ARREGLO LA TASK
                            taskArray = taskArray.filter((task) => task != actualTask);
                            console.log(taskArray);
                        }
                    }
                }
            });
        });
    });
};
