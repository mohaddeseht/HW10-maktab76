promise.then(f1).catch(f2);
promise.then(f1, f2);

// if there is an error in the first one it will be handled by catch
// but since the error will get passed to the next element in the chain the error in the second example
// wouldn't get handled