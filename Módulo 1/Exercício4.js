/* Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

function experiencia(anos) {
 // código aqui
}
var anosEstudo = 7;
experiencia(anosEstudo);

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
*/

let anosEstudo = 7;

function experiencia(anos) {
    switch(true) {
        case anos < 1:
            return 'Iniciante'
            break
        case anos < 3:
            return 'Intermediário'
            break
        case anos < 6:
            return 'Avançado'
            break
        case anos >= 7:
            return 'Jedi Master'
            break
        default:
            return 'Argumento inválido. Apenas números inteiros positivos são aceitos.'
    }
}

console.log(experiencia(anosEstudo))