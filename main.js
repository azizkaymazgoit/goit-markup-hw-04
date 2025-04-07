const myList = document.querySelector(".myList")
console.log(myList)

function menuEkle(menuAdi) {
    const newItem = document.createElement("li")
    const newLink = document.createElement("a");
    newLink.textContent = menuAdi.toUpperCase();
    newLink.setAttribute("href", "#")
    newLink.style.textDecoration = "none"
    newLink.style.color = "red"
    newItem.append(newLink)
    myList.append(newItem)
}

menuEkle("Anasayfa")
menuEkle("Hakkımızda")
menuEkle("İletişim")