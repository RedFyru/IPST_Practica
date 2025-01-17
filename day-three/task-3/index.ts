import { v4 as uuidv4 } from 'uuid';

interface IFakeApi{
    id: string,
    name: string,
    phone: string,
    email: string,
    location: string,
    status: "active" | "deleted",
}

async function fake(): Promise<IFakeApi[]> {
    const FakeData: IFakeApi[] = [
        {
            id: uuidv4(),
            name: "John Doe",
            phone: "123-456-7890",
            email: "john.doe@example.com",
            location: "London",
            status: "active",
        },
        {
            id: uuidv4(),
            name: "Jane Smith",
            phone: "987-654-3210",
            email: "jane.smith@example.com",
            location: "New York",
            status: "deleted"
        }
    ];
    return new Promise(function (resolve){
        setTimeout(() => {resolve(FakeData)}, 2000);
    });
}

fake().then(result => console.log(result));
