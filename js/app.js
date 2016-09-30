$(document).ready(function(){
    //alert("hola");
    $("#btn").click(function(){
            miFuncion();
        });
        $(".clase").click(function(){
            miFuncion2();
        });
        $("h1").click(function(){
            miFuncion2();
        });
});


function miFuncion(){
    alert("funcion");
}

function miFuncion2(){
    alert("clase");
}
