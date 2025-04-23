class MyPromise {
  _state = "pending";
  _successCallBacksHandlers = [];
  _failureCallBacksHandlers = [];
  _finallyCallBacksHandlers = undefined;
  _value = undefined;
  _reason = undefined;
  constructor(executor) {
    executor(this.promiseResolver, this.promiseRejector);
  }

  promiseResolver = (value) => {
    if (this._state === "fulfilled") return;
    this._state = "fulfilled";
    this._value = value;
    this._successCallBacksHandlers.forEach((cb) => cb(value));
    if (this._finallyCallBacksHandlers) {
      this._finallyCallBacksHandlers();
    }
  };
  promiseRejector = (reason) => {
    if (this._state === "rejected") return;
    this._state = "rejected";
    this._reason = reason;
    this._failureCallBacksHandlers.forEach((cb) => cb(reason));
    if (this._finallyCallBacksHandlers) {
      this._finallyCallBacksHandlers();
    }
  };

  then(handlerFn) {
    if (this._state === "fulfilled") {
      handlerFn(this._value);
    } else {
      this._successCallBacksHandlers.push(handlerFn);
    }
    return this;
  }
  catch(handlerFn) {
    if (this._state === "rejected") {
      handlerFn(this._reason);
    } else {
      this._failureCallBacksHandlers.push(handlerFn);
    }
    return this;
  }
  finally(handlerFn) {
    if (this._state !== "pending") return handlerFn();
    this._finallyCallBacksHandlers = handlerFn;
  }
}

// const promise1 = new MyPromise((resolve, reject) => {
//   resolve(5);
// })
//   .then((res) => {
//     console.log("res", res);
//   })
//   .catch((err) => {
//     console.log("err", err);
//   })
//   .finally(() => {
//     console.log("finally process happened");
//   });






// promise.all polyfill

const func1 = () =>{
  return new Promise((resolve, reject)=>
    setTimeout(()=>resolve("func1 resolved"), 1000)
  )
}

const func2 = () =>{
 return  new Promise((resolve, reject)=>
    setTimeout(()=>resolve("func2 resolved"),5000)
//  setTimeout(()=>reject("func2 rejected"),5000)
  )
}

const func3 = () =>{
  return new Promise((resolve, reject)=>
    setTimeout(()=>resolve("func3 resolved"), 0)
  )
}


Promise.myAll = (promises) =>{
  let result = [];
  let n = promises.length;
  let resolvedCount = 0
  return new Promise((resolve, reject)=>{
promises.forEach((promise, index)=>{

    promise.then((res)=>{
      result[index] = res;
      resolvedCount++
      if (resolvedCount === n) {
        resolve(result);
        return
      }
    }).catch((err)=>{
      reject(err);
      return
    })
})

  })
}


// with async await


Promise.myAllWithAsync = (promises) =>{
  let result = [];
  let n = promises.length;
  let promiseCount = 0
  return new Promise((resolve, reject)=>{
   promises.forEach(async(promise, index)=>{
  try {
    let res = await promise;
    result[index] = res;
  promiseCount++
  promiseCount === n && resolve(result) 
  return
  } catch (error) {
    reject(error);
    return
  }
 
})
  })
}


// Promise.all([func1(), func2(), func3()]).then((res)=>console.log(res, "result of promises")).catch((err)=>console.log(err))


// Promise.myAll([func1(), func2(), func3()]).then((res)=>console.log(res, "result of promises111")).catch((err)=>console.log(err))


Promise.myAllWithAsync([func1(), func2(), func3()]).then((res)=>console.log(res, "result of promises0000")).catch((err)=>console.log(err))


// ------------------- Promise.all settled --------------------//

Promise.myAllSettled = function(promises){
let result = []
let length = promises.length
let promiseCount = 0
return new Promise((resolve, reject)=>{
  promises.forEach((promise, index)=>{
    promise.then((res)=>{
       result[index] = {status:'fulfilled', value:res}
   
    }).catch((err)=>{
      result[index] = {status:'rejected', reason:err}
    }).finally(()=>{
      promiseCount++
      if(length === promiseCount){

        resolve(result)
      }
    })
  })
})
}

// Promise.allSettled([func1(), func2(), func3()]).then((res)=>console.log(res, "result of promises111")).catch((err)=>console.log(err))


Promise.myAllSettled([func1(), func2(), func3()]).then((res)=>console.log(res, "result of promises111")).catch((err)=>console.log(err))