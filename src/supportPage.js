function createSupportPage(){

    const content = document.querySelector("#content");
    const pageContent = document.createElement ("div");
    pageContent.classList (".page-content")
    content.appendChild(pageContent);

    const title = document.createElement ("h1")
    title.textContent = "We dont have support yet :("
    pageContent.appendChild(title)

}
export default createSupportPage;