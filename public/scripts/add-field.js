// Procura o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener("click", cloneField)

//Executar uma ação
function cloneField(){
    // Duplicar os campos. Que Campos ?
    const nemFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    // Pegar os campos. Que campos ?
    const fields = nemFieldContainer.querySelectorAll("input")
    // para cada campo novo, limpar 
    fields.forEach(function(field){
        fields.value=""
    });

    document.querySelector("#schedule-items").appendChild(nemFieldContainer)

}