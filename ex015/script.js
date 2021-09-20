function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (formano.value.length == 0 || formano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                 img.setAttribute('src', 'babyboy.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'boy.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'man.png')
            } else {
                img.setAttribute('src', 'grandpa.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'babygirl.png')
           } else if (idade < 21) {
            img.setAttribute('src', 'girl.png')
           } else if (idade < 50) {
            img.setAttribute('src', 'women.png')
           } else {
            img.setAttribute('src', 'grandma.png')
           }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}