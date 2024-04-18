/*
uni.promisify.adaptor.js

Interceptor for Uni-app, ensuring that asynchronous functions always return Promises.
A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.
Promises are created during async functions and can be in one of two states: Resolved or Rejected upon completion.

This code snippet adds an interceptor to Uni-app to promisify asynchronous functions, simplifying handling of asynchronous operations.
*/

uni.addInterceptor({
  returnValue (res) {
    if (!(!!res && (typeof res === "object" || typeof res === "function") && typeof res.then === "function")) {
      return res;
    }
    return new Promise((resolve, reject) => {
      res.then((res) => res[0] ? reject(res[0]) : resolve(res[1]));
    });
  },
});