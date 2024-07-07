window.onload = function () {

    let forms = document.querySelectorAll("form")
    forms.forEach((form) =>{
        form.addEventListener("click",(e)=>{
            e.preventDefault()
        })
    })
    
    let input = document.getElementById("task")
    let tarefas  = []
    let conteiner = document.getElementById("tarefas")
    let add = document.getElementById("add")
    let clear = document.getElementById("clear")
    clear.addEventListener("click",()=>{
        let decisao = confirm("Deseja esvaziar a sua lista de tarefas?")
        if(decisao){
            conteiner.innerHTML = `
        
            <div class="tarefa">
                <article>
                    <span>Nome</span>
                </article>
                <article>
                    <span>Acçao</span>
                </article>
            
            </div>
        `
            let i = 0
            while(i <= tarefas.length){
                tarefas.pop(i)
                i++
            }
            return
        }
        
        return
    })
    add.addEventListener("click",()=>{

        if(!isNaN(input.value)){
            alert("A tarefa deve ser textual")
            input.value = ""
            input.setAttribute("autofocus",true)
            return
        }
        if(String(input.value).length === 0){
            alert("Entre com o nome de tarefa")
            return
        }
        if(tarefas.includes(input.value)){
            alert("Essa tarefa Já Existe!")
            input.value = ""
            input.setAttribute("autofocus",true)
            return

        }
        let div = document.createElement("div")
        div.setAttribute("class","tarefa")
        let span = document.createElement("span")
        span.textContent = String(input.value).toUpperCase()
        tarefas.push(input.value)
        let btn2 = document.createElement("button")
        btn2.addEventListener("click",(e)=>{
            let itenDeleted = e.target.parentElement.firstChild.textContent
            let index = tarefas.findIndex((element)=>{
                return itenDeleted === element
            })
            tarefas.pop(index)
            div.style.display = "none"
        })
        btn2.textContent =  "Deletar"
        div.append(span)
        div.append(btn2)
        div.classList.add("tarefa")
        conteiner.append(div)
        Y = input.value
        input.value = ""
    })
}