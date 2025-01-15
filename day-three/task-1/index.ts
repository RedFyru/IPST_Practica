function asyncFunction(delay: number, message: string) {
    return new Promise(function(resolve) {
        setTimeout(() =>{resolve(message)}, delay);
    });
}

asyncFunction(3000, "Hello World!").then((result)=>console.log(result));
