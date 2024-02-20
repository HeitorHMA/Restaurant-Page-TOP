function createHomePage(){

    const content = document.querySelector("#content");
    const pageContent = document.createElement ("div");
    content.appendChild(pageContent);

    const image = document.createElement("img");
    image.src ='/imgs/restaurant-page.jpg';
    image.height = "400";
    pageContent.appendChild(image);

    const title = document.createElement("h1");
    title.textContent ="Welcome to our restaurant";
    pageContent.appendChild(title);

    const paragraph = document.createElement("p");
    paragraph.textContent = "the best food in Paris";
    pageContent.appendChild(paragraph);
}
export default createHomePage;