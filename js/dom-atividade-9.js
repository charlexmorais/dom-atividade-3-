let username=document.getElementById("nome")
let lastname=document.getElementById("sobrenome")
let cpf=document.getElementById("cpf")
let botaoclique=document.getElementById("clique")
let feedbacKPositivo=document.querySelectorAll("feedback-positivo")
let feedbacNegativo=document.querySelectorAll("feedback-negativo")

botaoclique.onclick = () => {
     if (
     username.value.length === '' ||
     lastname.value.length === ''||
     cpf.value.length !== 11
     )
     {
      alert("preencha todos os campos");
      alert("o seu cpf esta incorreto")
  
     } else{
      
      alert("cadastro concluido com sucesso");
  
  
   }
   
  };
   