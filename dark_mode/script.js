function darkMode(){
    const pagina = document.body
    pagina.classList.toggle("dark-mode")

    const isDarkMode = document.body.classList.contains("dark-mode")

    //let textBotao = isDarkMode ? "Modo claro" : "Modo Escuro";
 const botao = document.querySelector("button")
 
if(isDarkMode == true){
    botao.textContent = "modo claro"
    

}else{
botao.textContent = "modo escuro"}
}