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

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3))



// Common elements in both array


const data1 = [1, 3, 5, 7, 9];
const data2 = [2, 7, 1, 8, 5];

// output = [7,1,5];

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
