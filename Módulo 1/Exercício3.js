/* Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript"
e retorna um booleano true/false caso exista ou não.

function temHabilidade(skills) {
 // código aqui
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false

Dica: para verificar se um vetor contém um valor, utilize o método indexOf
*/

var skills = ["JavaScript", "ReactJS", "React Native"]

function temHabilidade(skillsList, skill) {
    return (skillsList.indexOf(skill) !== -1) ? true : false
}

console.log(temHabilidade(skills, 'JavaScript'))
