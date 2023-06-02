function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 9
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'fotomanha.jpeg'  
        document.body.style.background = '#cf8c61'
    }else if (hora >=12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'fototarde.jpeg'
        document.body.style.background = '#89461c'      
    }else {
        //BOA NOITE!
        img.src = 'fotonoite.jpeg'
        document.body.style.background ='#3b4039'
    }
}
