//mostra mes -1
// const hoje = new Date();
// console.log(hoje.getMonth());

//mostra dia contanto de 1 a 7, seg a domingo
// const hoje = new Date();
// console.log(hoje.getDay());

const hoje = new Date();
hoje.setDate(hoje.getDate() - 30);
console.log(hoje);