import Animale from "./animale.js"

export default class Fattoria {
    constructor()
    {
        document.getElementById('bt').addEventListener('click', this.cGallo);
        document.getElementById('bt2').addEventListener('click', this.cMucca);
        document.getElementById('bt3').addEventListener('click', this.cMaiale);
    }
    cGallo() {
        console.log("ciao");
        var gallo = new Animale("Gallo", "Andalusa", "2 zampe", "https://staticfanpage.akamaized.net/wp-content/uploads/2019/09/gallo.jpg")
        document.getElementById("idImg").src = gallo.img_url
        document.getElementById("idTipo").innerHTML = gallo.tipo
        document.getElementById("idRazza").innerHTML = gallo.razza
        document.getElementById("idZampe").innerHTML = gallo.nzampe
    } 
    cMucca() {
        var mucca = new Animale("Mucca", "Bovina", "4 zampe", "https://storage.ecodibergamo.it/media/photologue/2019/9/20/photos/cache/la-mucca-a-otto-zampe_a99aad48-db95-11e9-847f-c8c6a4b24fb7_998_638_display.jpeg" )
        document.getElementById("idImg").src = mucca.img_url
        document.getElementById("idTipo").innerHTML = mucca.tipo
        document.getElementById("idRazza").innerHTML = mucca.razza
        document.getElementById("idZampe").innerHTML = mucca.nzampe
    } 
    cMaiale() {
        var maiale = new Animale("Maiale", "Porco", "4 zampe", "https://www.traccedisardegna.it/sites/default/files/styles/social_cover/public/logo/maiale.jpg?itok=Mu1QUMGE" )
        document.getElementById("idImg").src = maiale.img_url
        document.getElementById("idTipo").innerHTML = maiale.tipo
        document.getElementById("idRazza").innerHTML = maiale.razza
        document.getElementById("idZampe").innerHTML = maiale.nzampe            
    } 
    
}