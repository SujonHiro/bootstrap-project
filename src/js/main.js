let nameField=document.querySelector('#nameField');
let listName=document.querySelector("#listName")
nameField.addEventListener('keypress',function(event){
    if(event.keyCode===13){
        let name=nameField.value
        let li=document.createElement("li")
        li.className="list-group-item d-flex justify-content-between"
        li.innerText=name
        listName.appendChild(li)
        nameField.value=""

        let span=document.createElement("span")
        span.innerHTML="X"
        span.style.color="red"
        span.style.cursor="pointer"
        span.className="ml-5"
        span.addEventListener('click',function(){
            li.remove()
        })
        li.appendChild(span)
    }
})
