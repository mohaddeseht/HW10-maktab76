let promise = new Promise(function (resolve, reject) {
    resolve(1);
    setTimeout(() => resolve(2), 1000);
});
promise.then(alert)

// every promise can have one resolve and reject
// and if there are more then one only the first one will count and the rest will be ignored.