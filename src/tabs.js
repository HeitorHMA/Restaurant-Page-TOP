import createHomePage from "./homePage"
import createMenuPage from "./menuPage"
import createSupportPage from "./supportPage"

function tabButtons(){

    const homeButton = document.querySelector("#homeButton")
    const supportButton = document.querySelector("#supportButton")
    const menuButton = document.querySelector("#menuButton")

    homeButton.addEventListener(onclick, ()=>{
        createHomePage()
    }
    )
    menuButton.addEventListener(onclick, ()=>{
        createMenuPage()
    }
    )
    supportButton.addEventListener(onclick, ()=>{
        createSupportPage()
    }
    )
}
export default tabButtons;