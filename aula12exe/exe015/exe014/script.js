function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 8
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA! 
        img.src = 'fotomanha.jpeg'
        document.body.style.background = '#f3cb86'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'fototarde.jpeg'
        document.body.style.background = '#7a2d03'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite.jpeg'
        document.body.style.background ='#0e1316'
    }
}