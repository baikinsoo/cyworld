// function send() {
//     const token = String(Math.floor(Math.random() * 100000)).padStart(6,"0")
//     document.getElementById("number").innerText = token
// }

let send = () => {
    const token = String(Math.floor(Math.random() * 100000)).padStart(6,"0")
    document.getElementById("number").innerText = token
    document.getElementById("number").style.color = "#" + token
}