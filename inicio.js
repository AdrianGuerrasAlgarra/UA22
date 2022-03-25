var tocar=false;

function cargarMenu()
{
    if(!tocar)
    {
        console.log('hola uwu');
    }
    else
    {
        console.log('adios iwi');
    }
    html=`<nav>
    <img src="candado.png" alt="" class="icono" hight=100px width=100px>
    <section id="clock"></section>

    </nav>`;
    document.getElementById('menu').innerHTML=html;
    

}
    

function onTouch()
{
    tocar=!tocar;
}
//--------------RELOJ-------------------
function startTime() {
    
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    html=`<h1>` + hr + `:`+ min+`:`+ sec +`</h1>`
    //Add a zero in front of numbers<10
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = html;
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}