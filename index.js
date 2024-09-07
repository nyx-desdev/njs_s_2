//let's create a callback example

function printName(name) {
    console.log(name);
}

function printNameCallback(callback) {
    callback("John");
}

printNameCallback(printName);
