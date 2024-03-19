let entrada = 'Felipe'
let data = entrada.split('')
const size = data.length

for (let i = 0; i < size / 2; i++) {
    let aux = data[i]
    data[i] = data[size -i -1]
    data[size - i-1] = aux
    
}
const dataReverse = data.toString().replace(/,/g, '')
console.log('String inicial', entrada);
console.log('String reversa',dataReverse);