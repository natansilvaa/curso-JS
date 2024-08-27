function carregar() { 
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours(); // Obtém a hora atual

    msg.innerHTML = `Agora são ${hora} horas.`;
    
    if (hora >= 0 && hora < 12) {
        img.src = 'dia.png'; // Imagem para o período da manhã
        document.body.style.background ='#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'tarde.png'; // Imagem para o período da tarde
        document.body.style.background ='#b9846f'
    } else {
        img.src = 'noite.png'; // Imagem para o período da noite
        document.body.style.background ='#515154'
    }
}