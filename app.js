const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controlls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");


function pageTransitions() {
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener("click", function(){
            let currentBtn = document.querySelectorAll(".active-btn");
            currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
            this.className += " active-btn"; 
        })
    }

    //Sections active
    allSections.addEventListener("click", (e)=>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the other btn
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            //Hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //toggle them
    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener("click", () => {
        let element = document.body;
        element.classList.toggle("light-mode");
    })
}

pageTransitions();


const nombre = document.getElementById("name");
const email = document.getElementById("email");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
const boton = document.querySelector(".main-btn1");
const span = document.createElement("span");
const contenedor = document.querySelector(".btn-con1");
const claseNueva = document.querySelector(".new");
const icon = document.querySelector(".btn-icon1");
//const input0 = document.querySelector(".input-control")
const input1 =  document.querySelectorAll(".vaciar");







const btnEnviar = document.querySelector(".btn-enviar");
const template = document.querySelector(".template-btn");
const textData = template.content.cloneNode(true);
const fragment = document.createDocumentFragment();
const segundoicono = document.querySelector(".btn-icon2");


boton.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafo.innerHTML = "";
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`;
        entrar = true;
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`;
        entrar = true;
    }
    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        boton.remove();
        //contenedor.append(span);
        //span.innerText = "Enviado";
        //
       for(i = 0; i < input1.length; i++){
                input1[i].value = "";
       }
       //contenedor.append(icon);
       btnEnviar.appendChild(textData);
    
        console.log("hola");
       
 }    
})



