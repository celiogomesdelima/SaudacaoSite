function carregar(){
    var msg = document.getElementById('msg')
    var imagem = document.querySelector('img#foto')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    if (hora<=6){
        msg.innerHTML = `Boa madrugada, agora são ${hora} hora(s) e ${minuto} minuto(s)`
        imagem.src="madrugada.jpg"
        document.body.style.backgroundColor="#466673"
    }else if (hora<=12){
        msg.innerHTML = `Bom dia, agora são ${hora} hora(s) e ${minuto} minuto(s)`
        document.body.style.backgroundColor="#8C7B6C"
        imagem.src="manha.jpg"
    }else if (hora<=18){
        msg.innerHTML = `Boa tarde, agora são ${hora} hora(s) e ${minuto} minuto(s)`
        imagem.src="tarde.jpg"
        document.body.style.backgroundColor="#b9846f"
    }else{
        msg.innerHTML = `Boa noite, agora são ${hora} hora(s) e ${minuto} minuto(s)`
        imagem.src="noite.jpg"
        document.body.style.backgroundColor="#011826"
    }
}