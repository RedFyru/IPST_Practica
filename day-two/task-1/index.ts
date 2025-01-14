function countFilledValues(data: {name: any; age: any; address: any; phone: any; email: any;
    notes: any}){
    let sum: number = 0;
    const values = Object.values(data);

    values.forEach(value => {
        if (value === null || value === undefined || value === "") {
        } else {
            sum += 1;
        }
    })
    console.log(sum);
}

let info = {name: 'fdgdfg', age: null, address: 'John Doe', phone: '8958954123',
    email: undefined, notes: ''};

countFilledValues(info);