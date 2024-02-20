import createHomePage from './homePage'
import createMenuPage from './menuPage';
import tabButtons from './tabs';

function loadPage(){
    tabButtons()
    createHomePage()
}

export default loadPage;