interface userWithGadget {
    id: string,
    name: string,
    gadget: {
        id: string,
        name: string,
        price: string | undefined
    }
}

interface userWithGadgets {
    id: string,
    name: string,
    gadgets: {
        id: string,
        name: string,
        price: string | undefined
    } []
}

const input: userWithGadget[] = [
    {
        id: "1",
        name: "Khalid Kashmiri",
        gadget: { id: "101", name: "Phone", price: "1000" },
    },
    {
        id: "2",
        name: "Khidir Karawita",
        gadget: { id: "102", name: "Tablet", price: undefined },
    },
    {
        id: "1",
        name: "Khalid Kashmiri",
        gadget: { id: "103", name: "Laptop", price: "1500" },
    },
];

function Group(data: userWithGadget[]): userWithGadgets[] {
    const userID: {[key: string]: userWithGadgets } = {}
    for (let i = 0; i < data.length; i++) {
        const user = data[i];
        if (userID[user.id]) {
            userID[user.id].gadgets.push(user.gadget);
        } else {
            userID[user.id] = {
                id: user.id,
                name: user.name,
                gadgets: [user.gadget],
            };
        }
    }
    return Object.values(userID);
}

const output = Group(input)
console.log(JSON.stringify(output, null, 2));
