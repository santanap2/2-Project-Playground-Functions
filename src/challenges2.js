// Desafio 11
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  
  for (let n of array) {
      if (n < 0 || n > 9){
      return 'não é possível gerar um número de telefone com esses valores';
      }
      let contador = 0;
      for (let count of array) {
          if (count === n) {
              contador +=1;
          }
      }
      if (contador >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
      }  
  }

  let DDD = '(' + array.slice(0,2).join('') + ') ';
  let cincoPrimeiros = array.slice(2,7).join('');
  let quatroUltimos = '-' + array.slice(7,11).join('');
  let resultado = DDD + cincoPrimeiros + quatroUltimos;
  
  return resultado;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let difAbsolutaA = Math.abs(lineB - lineC);
    let difAbsolutaB = Math.abs(lineA - lineC);
    let difAbsolutaC = Math.abs(lineA - lineB);

  if ((lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) && (lineA > difAbsolutaA && lineB > difAbsolutaB && lineC > difAbsolutaC)){
return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  let numerosExtraidos = string.match(/\d+/g);
  let numerosParseInt = [];
  for (let i = 0; i < numerosExtraidos.length; i += 1) {
    numerosParseInt[i] = parseInt(numerosExtraidos[i]);
  }

  let resultado = numerosParseInt.reduce((soma1, soma2) => soma1 + soma2, 0);
  if (resultado === 1) {
    return resultado + ' copo de água';
  }
  else {
    return resultado + ' copos de água'
  }
}

let teste = '1 cachaça, 2 cervejas,  3 copos de vinho, 4 garrafas de whisky, 5 caixas de vodka, 6 galões de suco';
console.log(hydrate(teste));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
}