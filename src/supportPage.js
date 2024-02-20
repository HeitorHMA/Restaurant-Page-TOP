function createSupportPage(){

    const content = document.querySelector("#content");
    const pageContent = document.createElement ("div");
    content.appendChild(pageContent);

    const title = document.createElement ("h1")
    title.textContent = "We dont have support yet :("

}
export default createSupportPage;