function createMenuPage(){

    const content = document.querySelector("#content");
    const pageContent = document.createElement ("div");
    pageContent.classList.add("page-content")
    content.appendChild(pageContent);

    const title = document.createElement ("h1")
    title.textContent = "Our delicious menu:"
    pageContent.appendChild(title)
    const unorderedList = document.createElement("ul");
    const listItem1 = document.createElement("li")
    listItem1.textContent = "Pizza"
    const listItem2 = document.createElement("li")
    listItem2.textContent = "Lasagna"
    const listItem3 = document.createElement("li")
    listItem3.textContent = "Carbonara"
    unorderedList.appendChild(listItem1)
    unorderedList.appendChild(listItem2)
    unorderedList.appendChild(listItem3)
    pageContent.appendChild(unorderedList);
}
export default createMenuPage;