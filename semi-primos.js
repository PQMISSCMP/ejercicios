// obtener un listado de numeros semi-primos contenidos en un rango de numeros.

const getSemiPrimos = (inicio, fin) => {

    let semiPrimos = [];
    const primos = getPrimos(fin);
    primos.map(n => {
        const secSemis = nextSemiInRango(n, primos, inicio, fin)
        semiPrimos = semiPrimos.concat(secSemis);
    });
    const dataNoRepeat = [...new Set(semiPrimos)];
    return dataNoRepeat.sort((a, b) => a - b );
}


const getPrimos = (fin) => {
    let primos = [];
    for (let i = 1; i <= fin; i++){
        if (isPrimo(i)) primos.push(i);
    }
    return primos
}

const nextSemiInRango = (el, primos = [], inicio, fin) => {
    let semisByEl = [];
    for (let primo of primos){
        const mul = (el * primo);
        if (!isPrimo(mul) && (mul >= inicio && mul <= fin))
            semisByEl.push(mul);
    }
    return semisByEl;
}

const isPrimo = (numero) => {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false;
    }
    return numero !== 1;
} 
