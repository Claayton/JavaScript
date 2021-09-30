function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var ico = window.document.getElementById('ico')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'morning.png'
        ico.href = 'morning.png'
        window.document.body.style.background = '#ffd55e'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'evening.png'
        ico.href = 'evening.png'
        window.document.body.style.background = '#6061a4'
    } else {
        img.src = 'night.png'
        ico.href = 'night.png'
        window.document.body.style.background = '#282129'
    }
}
