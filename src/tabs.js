import createHomePage from "./homePage"
import createMenuPage from "./menuPage"
import createSupportPage from "./supportPage"

function tabButtons(){

    const homeButton = document.querySelector("#homeButton")
    const supportButton = document.querySelector("#supportButton")
    const menuButton = document.querySelector("#menuButton")

    homeButton.addEventListener('click', ()=>{
        createHomePage()
    }
    )
    menuButton.addEventListener('click', ()=>{
        createMenuPage()
    }
    )
    supportButton.addEventListener('click', ()=>{
        createSupportPage()
    }
    )
}
function clearPage(){
    const content = document.querySelector ("#content")
    const pageContent = document.querySelector("#page-content")
}
export default tabButtons;