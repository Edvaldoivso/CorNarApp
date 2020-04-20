/*Author:Edvaldo
18/04/2020
*/

$(document).ready(()=>{

    setTimeout(()=>{$("#inicio").hide()}, 2000);

})
    

function fAtivaRadar(){

if( $(".nome").val() !== ""){


    $( "#cornoTP" ).replaceWith( "<img id='radargif' src='img/analise.gif'>");
    $(".nome").hide(1000)
    
    $("#radargif").show( "slow");
    console.log("Rastreando cornos")
    

    setTimeout(() => { $("#radargif").hide() ; console.log("Saiu Display")}, 5000);
    setTimeout(fEscolheCorno,5000)



}else{

   $("#aviso").show();
   setTimeout(()=>{$("#aviso").hide("slow") }, 5000)

}

    
}

//Função que sorteia o Tipo de Corno.

function fEscolheCorno(){
var nome = $(".nome").val();       
var sorteio = Math.floor(Math.random() * 11 + 1);
console.log(sorteio +"Sorteio")
var arrayCorno=["cornoabelha","cornocamarada","cornoateu","cornobebida","cornobrincalhao","cornoburro","cornovidente","cornocrente","cornoteimoso","cornodenorex","cornodesconfiado","cornofrio"];
var pos=1;
var cornoEscolhido = arrayCorno.splice(sorteio , pos);
console.log(cornoEscolhido + " Corno do Array")
$( "#radargif" ).replaceWith( "<img id='cornoTP' src=img/" + cornoEscolhido + ".png>");

$( "#TextoCorno,h3" ).replaceWith("<h3>"+nome+" \u00e9 corno tipo:</h3>");

setTimeout(() => {$(".nome").val("").show("slow")}, 1000);
}



//Chamadas das Funções

$("#bBotao").on('click', fAtivaRadar)
