function capitalizeWords(sentence) {
    // Your implementation\
    let array = sentence.split(" ")
    let res = ''
    console.log(array)
    for (let item of array) {
        if (item !== '') {

            res += `${item.charAt(0).toUpperCase()}${item.slice(1, item.length).toLowerCase()} `
        }
    }
    return res.trim()
}

// console.log(capitalizeWords("   Multiple    SPACES   "))

function flattenObject(obj, parentKey = '', res = {}) {

    for (let key in obj) {
        let newKey = parentKey ? `${parentKey}.${key}` : key
        if (obj[key] === null) {
            res[key] = obj[key]
        }
        else if (typeof obj[key] === 'object') {
            flattenObject(obj[key], newKey, res)

        } else {
            res[newKey] = obj[key]
        }
    }
    return res
}



// let obj = {
//     a: { b: { c: 4 }, d: 5 },
//     e: 5
// }
let obj = {
    a: null,
    b: { c: 8 }
}
// resOut = {
// 'a.b.c':4,
// 'a.d':5,
// e:5
// }
// console.log(flattenObject(obj))




// Ex:3 

// chunkArray([1,2,3,4],2)
// out [[1,2],[3,4]]
// chunkArray([1,2,3,4,4,5,6,7],3)
// out [[1,2,3],[4,5,6],[7]]
// chunkArray([],3)
// out []



function chunkArray(arr, n) {
    let res = []
    let subArr = []
    for (let i = 0; i < arr.length; i++) {
        let length = subArr.push(arr[i])
        if (length < n && i === arr.length - 1) {
            res.push(subArr)
        } else if (length === n) {
            res.push(subArr)
            subArr = []
        }
    }
    return res
}


// Second solution


function chunkArray2(arr, n) {
    let res = []
    for (let i = 0; i < arr.length; i += n) {
        res.push(arr.slice(i, i + n))
    }
    return res
}

// console.log(chunkArray2([1, 2, 3, 4, 5, 6, 7], 3))



// Common elements in both array


const data1 = [1, 3, 5, 7, 9];
const data2 = [2, 7, 1, 8, 5];

// output = [7,1,5];

// method :- 1

function findCommonElement(arr1, arr2) {
    let res = [...arr1, ...arr2]
    let resObj = {}
    let result = []
    for (let item of res) {
        if (resObj[item]) {
            result.push(item)
        } else {
            resObj[item] = 1
        }
    }
    return result
}
// console.log(findCommonElement(data1, data2))



// method :- 2

function findCommonElement2(arr1, arr2) {
    let arr2Set = new Set(arr2)
    let result = []
    for (let item of arr1) {
        if (arr2Set.has(item)) {
            result.push(item)
        }
    }
    return result
}
// console.log(findCommonElement2(data1, data2))


// first common element of all arrays


// $2a$12$BpF7EdCgsA5cnH/okNTC/ePfDT6Op.ZdsfFHCJm6FOw76ao5mcXbq : Himreet

// $2a$12$BpF7EdCgsA5cnH/okNTC/ePfDT6Op.ZdsfFHCJm6FOw76ao5mcXbq : siddu

// method one

function commonElem(arr1, arr2, arr3) {

    let val;

    for (let i = 0; i < arr1.length; i++) {
        let j = 0;
        let k = 0;
        val = arr1[i]
        while (j < arr2.length && k < arr3.length) {
            if (val === arr2[j] && val === arr3[k]) {
                return val
            } else {
                j++
                k++
            }
        }
    }

}
// console.log(commonElem([1, 2, 3, 4], [2, 6, 7, 8], [2, 0, 9, 8]))


function commonElementInArrays(arr1, arr2, arr3) {
    let arr2Set = new Set(arr2)
    let arr3Set = new Set(arr3)
    for (let item of arr1) {
        if (arr2Set.has(item) && arr3Set.has(item)) {
            return item
        }
    }
}


// console.log(commonElementInArrays([3, 1, 2, 3, 4], [2, 6, 7, 1, 8, 3, 7], [2, 0, 1, 9, 8, 3]))



// count the vowels in given string 
// M:-1

function countVowels(str) {
    // Your implementation
    let duplicateStr = str.toLowerCase()
    let count = 0
    for (let i = 0; i < duplicateStr.length; i++) {
        if (duplicateStr[i] === 'a' || duplicateStr[i] == 'e' || duplicateStr[i] === 'i' || duplicateStr[i] === 'o' || duplicateStr[i] === 'u') {
            count++
        }
    }
    return count
}

// console.log(countVowels("JavaScrIpt"))

// M:-2
function countVowels2(str) {
    // Your implementation
    let vowelsSet = new Set(["a", "e", "i", "o", "u"])
    let count = 0
    for (let char of str.toLowerCase()) {
        if (vowelsSet.has(char)) {
            count++
        }
    }
    return count
}


// console.log(countVowels2("javAScrIpt"))