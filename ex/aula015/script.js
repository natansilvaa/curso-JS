function verificar() { 
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert(' [ERRO] verifique os dados e tente novamente! ')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homen'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'bbmasculino.png')
            }else if (idade < 21){
                img.setAttribute('src','adolecentemas.png')
            }else if (idade <50){
                img.setAttribute('src','homen.png')
            }else  {
                img.setAttribute('src','idoso.png')
            }
         
       } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'bbfeminino.png')
            } else if (idade < 21){
                img.setAttribute('src', 'addolecentefem.png')
            } else if (idade <50){
                img.setAttribute('src', 'melher.png')
            } else  {
                img.setAttribute('src', 'idosa.png')
            }
       }
       res.style.textAlign = ' center'
       res.innerHTML =` Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}