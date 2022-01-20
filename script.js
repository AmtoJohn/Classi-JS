import Animale from "./animale";

export function cGallo() {
    var gallo = new Animale("Gallo", "Andalusa", "2 zampe", "https://www.laleggepertutti.it/wp-content/uploads/2019/10/canto-gallo.jpg" )
    document.getElementById("idImg").src = gallo.img_url
    document.getElementById("idTipo").innerHTML = gallo.tipo
    document.getElementById("idRazza").innerHTML = gallo.razza
    document.getElementById("idZampe").innerHTML = gallo.nzampe
}
export function cMucca() {
    var mucca = new Animale("Mucca", "Bovina", "4 zampe", "https://storage.ecodibergamo.it/media/photologue/2019/9/20/photos/cache/la-mucca-a-otto-zampe_a99aad48-db95-11e9-847f-c8c6a4b24fb7_998_638_display.jpeg" )
}
export function cMaiale() {
    var maiale = new Animale("Gallo", "Andalusa", "2 zampe", "https://www.traccedisardegna.it/sites/default/files/styles/social_cover/public/logo/maiale.jpg?itok=Mu1QUMGE" )
}