var n1 = 0, n2 = 0, n3 = 0, Resul;
var semiperimetro; 
var area; 

function captura1() {
    n1 = document.getElementById("Lado1").value;
    n1 = Number.parseFloat(n1); 
    console.log(n1);
}
function captura2() {
    n2 = document.getElementById("Lado2").value;
    n2 = Number.parseFloat(n2); 
    console.log(n2);
}
function captura3() {
    n3 = document.getElementById("Lado3").value;
    n3 = Number.parseFloat(n3); 
    console.log(n3);
}
function Semi()
{
    semiperimetro = (n1+n2+n3)/2; 
    console.log(semiperimetro);
}
function Area() {

    var x1 = (semiperimetro - n1);
    var x2 = (semiperimetro - n2);
    var x3 = (semiperimetro- n3); 
    area = Math.sqrt(semiperimetro* x1 * x2 * x3);
    console.log(area);
}
function Semiperimetro()
{
    document.getElementById("Lista").innerHTML += '<h2 id="D"> El semiperimetro es: '+semiperimetro+'</h2>'   
}

function Areas()
{
    document.getElementById("Lista").innerHTML += '<h2 id="D">El área es: '+area+'</h2>'   
}

function Calcular()
{
    if ((n1+n2)>n3 && (n1+n3)>n2 && (n2+n3)> n1)
    {
        if (n1==n2 && n2==n3 && n3==n1) {

            document.getElementById("Lista").innerHTML += '<h2 id="D">Equilatero</h2>'   
        }
        if (n1==n2 || n2 != n3 || n3 != n1 ) {
            document.getElementById("Lista").innerHTML += '<h2 id="D">Isoceles</h2>'   
        }else{
            
            document.getElementById("Lista").innerHTML += '<h2 id="D">Escaleno</h2>'   
        }
    }else
    {
        document.getElementById("Lista").innerHTML += '<h2 id="D">No se puede</h2>'   
    }
}




