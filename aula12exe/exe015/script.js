function verificar() {
    window.alert
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.valeu) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente !')
        } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'photo-child-j.png')
            } else if (idade < 21) {
                 // Jovem
                img.setAttribute('src', 'photo-man-b.png')

            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'photo-man-w.png')

            } else  {
                // Idoso
                img.setAttribute('src', 'photo-idoso-n.png')

            }
               
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'photo-child-w.png')

            } else if (idade < 21) {
                 // Jovem
                img.setAttribute('src', 'photo-woman-b.png')

            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'photo-woman-w.png')

            } else  {
                // Idoso
                img.setAttribute('src', 'photo-idosa-w.png')

            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
        
    }

}
