interface User{
    name: string,
    email: string,
    isActive: boolean,
}

let users: User[] = [
    {
        name: "John Doe",
        email: "john@email.com",
        isActive: false,
    },
    {
        name: "John     Smith   ",
        email: "smith@email.com",
        isActive: true,
    },
    {
        name: "Gleb Smolenskiy",
        email: "gleb@email.com",
        isActive: true,
    }
]

async function cleanUserData(users: User[]): Promise<User[]> {
    try {
        let random= Math.floor(Math.random() * 10) + 1;
        const newArray: User[] = [];
        if (random == 1) {
            throw new Error('Random error');
        }
        for (let i = 0; i < users.length; i++) {
            if (users[i].isActive) {
                newArray.push(users[i]);
            }
        }
        for (let j = 0; j < newArray.length; j++) {
            newArray[j].name = newArray[j].name.trim().toLowerCase().replace(/\s+/g, ' ');
            newArray[j].email = newArray[j].email.toLowerCase();
        }
        return newArray;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

cleanUserData(users).then(result => console.log(result)).catch(error => console.error(error));
