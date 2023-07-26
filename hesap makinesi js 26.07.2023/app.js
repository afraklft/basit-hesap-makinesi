"use"; // ?
var _buttons=document.getElementsByTagName("button"),
uzunluk=_buttons.length,
i=0,
sonuc=document.getElementById("result");




for(i=0 ; i< uzunluk; i++){
    _buttons[i].onclick=hesapla;
}
function hesapla(){
    var deger =this.innerHTML;
    
    if( deger == "="){
        try {
            sonuc.value=eval(sonuc.value)

        } catch(e ){
            sonuc.value="0;"
        }
        return;
        
    } else if (deger == "Clear") { // "Clear" butonuna özel işlevsellik ekledik
        sonuc.value = "";
        return;
    }

    sonuc.value+=deger;
}
  
