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

const promise1 = new MyPromise((resolve, reject) => {
  resolve(5);
})
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err", err);
  })
  .finally(() => {
    console.log("finally process happened");
  });
