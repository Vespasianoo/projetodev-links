function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")
    
    const img = document.querySelector("img")
    if(html.classList.contains("light")) {
        img.setAttribute("src", "./assets/light-img.jpg")
    } else {
        img.setAttribute("src", "./assets/avatar.png")
    }
}