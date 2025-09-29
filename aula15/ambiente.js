// let num =[5,8,2]
// num[3]= 6
// num.push(7)
// num.length
// num.sort()
// console.log(`Nosso vetor é o ${num}`)

let num = [5,8,9,2]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(5)
    if(pos == -1){
        console.log('O valor não foi encontrado')
    }else{
        console.log(`O valor ${num[pos]} está na posição ${pos}`)
    }


