interface IUser{
    name: string,
    email: string,
    isActive: boolean,
}

let users: IUser[] = [
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

async function cleanUserData(users: IUser[]): Promise<IUser[]> {
    try {
        let random= Math.floor(Math.random() * 10) + 1;
        const newArray: IUser[] = users.filter(user => user.isActive)
            .map(user => ({...user, name: user.name.trim().toLowerCase().replace(/\s+/g, ' '),
                email: user.email.toLowerCase()}));
        if (random == 1) {
            throw new Error('Random error');
        }
        return newArray;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

cleanUserData(users).then(result => console.log(result)).catch(error => console.error(error));
