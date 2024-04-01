let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const form = document.querySelector('form');
var nome = document.getElementById('name');
var email = document.getElementById('email');
var celular = document.getElementById('cellnumber');
var assunto = document.getElementById('assunto');
var mensagem = document.getElementById('message');


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
           navlinks.forEach(links => {
            navlinks.classList.remove('active');
            document.querySelectorAll('header nav ul li a[href*='+ id+']').classList.add(active)
           })
        }
    })
}

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

form.addEventListener('submit',(e) =>{
    e.preventDefault();
    nome = document.getElementById('name');
    email = document.getElementById('email');
    celular = document.getElementById('cellnumber');
    assunto = document.getElementById('assunto');
    mensagem = document.getElementById('message');
    enviarEmail();
})

function enviarEmail(){
    const body = 'Nome: '+nome.value+'<br>E-mail'+email.value+'<br>Numero de celular:'+celular.value+'<br>Assunto:'+assunto.value+'<br>Mensagem:'+mensagem.alue+'';

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "shadowyuuki14@gmail.com",
        Password : "3AB0DCE872D81B04ECC4BA28223F0F9373ED",
        To : 'gabrielantonio1423@gmail.com',
        From : "gabrielantonio1423@gmail.com",
        Subject : "Contato por meio do site - "+assunto.value,
        Body : body
    }).then(
      message => {
        if(message== "OK"){
            Swal.fire({
                title: "Sucesso!",
                text: "Mensagem enviada!",
                icon: "success"
              });
              nome.value="";
              email.value="";
              celular.value="";
              assunto.value="";
              mensagem.value="";
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Algo deu errado!"
              });
        }
      }
    );
}

