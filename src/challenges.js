// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(stringD3) {
  let palavrasSeparadas = stringD3.split(' ');
  return palavrasSeparadas;
}

// Desafio 4
function concatName(stringD4) {
  let index = stringD4.length - 1;
  let resultado = stringD4[index] + ',' + ' ' + stringD4[0];
  return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsResult = (wins * 3) + (ties * 1);
  return pointsResult;
}

// Desafio 6
function highestCount(number) {
  let biggest = number[0];
  for (let index = 0; index < number.length; index += 1) {
    if (biggest < number[index]) {
      biggest = number[index];
    }
  }
  let count = 0;
  for (let i = 0; i < number.length; i += 1) {
    if (number[i] === biggest) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);

  if (distancia1 < distancia2) {
    return 'cat1';
  }
  if (distancia2 < distancia1) {
    return 'cat2';
  }
  if (distancia1 === distancia2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let resultado = [];
  for (let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 !== 0) {
      resultado.push('fizz')
    }
    else if (numeros[index] % 5 === 0 && numeros[index] % 3 !== 0) {
      resultado.push('buzz')
    }
    else if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      resultado.push('fizzBuzz')
    }
    else {
      resultado.push('bug!')
    }
  }
  return resultado;
}

// Desafio 9
function encode(string) {
  let separados = string.split('');
  let codificado = [];

  for (let index of separados) {
    switch (index) {
      case 'a':
        codificado.push(1);
        break;

      case 'e':
        codificado.push(2);
        break;

      case 'i':
        codificado.push(3);
        break;

      case 'o':
        codificado.push(4);
        break;

      case 'u':
        codificado.push(5);
        break;

      default:
        codificado.push(index);
        break;
    }
  }
  return codificado.join('');
}


function decode(string) {
  let separados = string.split('');
  let decodificado = [];

  for (let index of separados) {
    switch (index) {
      case '1':
        decodificado.push('a');
        break;

      case '2':
        decodificado.push('e');
        break;

      case '3':
        decodificado.push('i');
        break;

      case '4':
        decodificado.push('o');
        break;

      case '5':
        decodificado.push('u');
        break;

      default:
        decodificado.push(index);
        break;
    }
  }
  return decodificado.join('');
}

// Desafio 10
function techList(array, string) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  else {
    let resultado = [];
    let arrayOrdenado = array.sort();

    for (key in arrayOrdenado) {
      let object = {
        tech: arrayOrdenado[key],
        name: string
      }
      resultado.push(object);
    }
    return resultado;
  }
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
}