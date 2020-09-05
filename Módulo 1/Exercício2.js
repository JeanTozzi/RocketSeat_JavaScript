/*Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

function pares(x, y) {
 // código aqui
}
pares(32, 321);
*/

function pares(x, y) {
    for(i = min(x, y); i <= max(x, y); i++) {
        if(i % 2 == 0){
            console.log(i)
        }
    }
}

function min(x, y) {
    return (x < y) ? x : y
}

function max(x, y) {
    return (x > y) ? x : y
}

pares(25, 2)