import createHomePage from "./homePage"
import createMenuPage from "./menuPage"
import createSupportPage from "./supportPage"

function tabButtons(){

    const homeButton = document.querySelector("#homeButton")
    const supportButton = document.querySelector("#supportButton")
    const menuButton = document.querySelector("#menuButton")

    homeButton.addEventListener('click', ()=>{
        clearPage()
        createHomePage()

    }
    )
    menuButton.addEventListener('click', ()=>{
        clearPage()
        createMenuPage()

    }
    )
    supportButton.addEventListener('click', ()=>{
        clearPage()
        createSupportPage()
  
    }
    )
}
function clearPage(){
    const content = document.querySelector ("#content")
    const pageContent = document.querySelector(".page-content")
    if (pageContent){
        content.removeChild(pageContent)
    }
}
export default tabButtons;