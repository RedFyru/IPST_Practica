interface IUserWithGadget {
    id: string,
    name: string,
    gadget: {
        id: string,
        name: string,
        price: string | undefined
    }
}

interface IUserWithGadgets {
    id: string,
    name: string,
    gadgets: {
        id: string,
        name: string,
        price: string | undefined
    } []
}

const input: IUserWithGadget[] = [
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

function group(data: IUserWithGadget[]): IUserWithGadgets[] {
    const userID = new Map<string, IUserWithGadgets>();
    for (const {id, name, gadget} of data) {
        if (userID.has(id)) {
            userID.get(id)!.gadgets.push(gadget);
        } else {
            userID.set(id, {id, name, gadgets: [gadget]});
        }
    }
    return [...userID.values()];
}

const output = group(input)
console.log(JSON.stringify(output, null, 2));
