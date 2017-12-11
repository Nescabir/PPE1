var tableaux = [
    {id:0, fichier:"P35_Merah_metua_no_Tehamana", nom:"Merah metua no Tehamana"},
    {id:1, fichier:"P52_Femmes_de_Tahiti", nom:"Femmes de Tahiti"},
    {id:2, fichier:"P53_Parau_api", nom:"Parau api"},
    {id:3, fichier:"P55_Fatata_te_moua", nom:"Fatata te moua"},
    {id:4, fichier:"P59_Laorana_Maria", nom:"Laorana Maria"},
    {id:5, fichier:"P75_La_sieste", nom:"La sieste"},
    {id:6, fichier:"P77_Nafea_faaipoipo", nom:"Nafea faaipoipo"},
    {id:7, fichier:"P89_Mahana_no_atua", nom:"Mahana no atua"},
    {id:8, fichier:"P101_No_te_aha_oe_riri", nom:"No te aha oe riri"},
    {id:9, fichier:"P149_Cavaliers_sur_la_plage", nom:"Cavaliers sur la plage"},
    {id:10, fichier:"P123_Trois_Tahitiens", nom:"Trois Tahitiens"},
    {id:11, fichier:"P117_Rupe_Rupe", nom:"Rupe Rupe"},
]

var imgArray = [1,2,3,4,5,6];
var imagesUtilisees = new Array();
var random;

imgArray.forEach(elem => {
    random = Math.floor(Math.random() * 12);
    while(imagesUtilisees.includes(random)){
        random = Math.floor(Math.random() * 12);
    }
    imagesUtilisees.push(random);
    $(".image-" + elem).attr("src", "assets/img/" + tableaux[random].fichier + ".jpg");
    $(".image-" + elem).attr("alt", tableaux[random].nom);
    $(".image-" + elem).attr("title", tableaux[random].nom);
    $("#content-image-" + elem).text(tableaux[random].nom);
});