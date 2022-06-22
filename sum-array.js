//sum of the array

const arr = [4,5,3,6,8,9,3,4]

function findSum(arr){
    let sum = 0
    for (let i = 0; i< arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
}

console.log(findSum(arr))

//using the reduce function in array to find the sum of the array

const output = arr.reduce(function(curr,acc){
    acc = acc + curr
    return acc
},0)
console.log(output)

//finding the maximum number in the array

function findMax(arr){
    let max = 0
    for (let i = 0; i< arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}
console.log(findMax(arr))

//using the reduce function to find the maximum number of the array

const output1 = arr.reduce(function(max,curr){
if (curr > max){
    max = curr
}
return max
},0)

console.log(output1)


