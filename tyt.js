/* 1-Türkçe 40 soru, 
2-mat 40 soru, 
3-sosyal b. 40 soru, 
4-fen b. 40 soru

her bir soru 4 puan,
okul diploma notu max 60 puan veriyor
ösym herkese +100 puan ekliyor.
*/

let turkceD , turkceY=0;
let matD , matY=0;
let sosD , sosY=0;
let fenD , fenY=0;
let okulPuani=0;

let =yeniSatir="\r\n";
let mesaj="TYT puan hesaplaması"+yeniSatir
+"1-Puan Hesapla"+yeniSatir
+"2-ÇIKIŞ";

//alert(mesaj);

let secim = prompt(mesaj);

switch(secim){
    case "1":
        okulPuani = Number(prompt("Okul puanınızı giriniz:"));
 

        turkceD = Number(prompt("Türkçe doğru sayısı:"));
        turkceY = Number(prompt("Türkçe yanlış sayısı:"));
    
        matD = Number(prompt("Matematik doğru sayısı:"));
        matY = Number(prompt("Matematik yanlış sayısı:"));

        sosD = Number(prompt("Sosyal doğru sayısı:"));
        sosY = Number(prompt("Sosyal yanlış sayısı:"));

        fenD = Number(prompt("Fen doğru sayısı:"));
        fenY = Number(prompt("Fen yanlış sayısı:"));

        let dogruSayisi = turkceD+matD+sosD+fenD;
        let yanlisSayisi = turkceY+matY+sosY+fenY;

        let kalanDogru = dogruSayisi - (yanlisSayisi/4);
        let puan = (kalanDogru*3)+100+(okulPuani*0.6);

        alert("TYT puanınız:"+puan);
    
        break;
    
        
    case "2":
        alert("UYGULAMADAN ÇIKIŞ YAPILDI.");
        break;
    
        
    default:
        alert("Lütfen geçerli bir sayıya basınız.");
        break;    
}