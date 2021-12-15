const elem = document.getElementById("orta")

try {
    elem.innerHTML = "toto"
}
catch (e) {
    alert(e)
}