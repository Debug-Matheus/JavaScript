let num = [5,9,6,3,7,8]
num.sort()

for(var pos=0; pos<=num.length; pos++){
console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
