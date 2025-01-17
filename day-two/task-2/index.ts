interface ISourceData {
    user_id: string;
    full_name: string;
    contact: {
        phone: string;
        email: string;
    };
    address: {
        city: string;
        zip: string;
    };
    is_active: boolean;
    }

interface ITargetData {
    id: string;
    name: string;
    phone: string;
    email: string;
    location: string;
    status: string;
}

const source: ISourceData = {
    user_id: "123",
    full_name: "John Doe",
    contact: {
        phone: "+123456789",
        email: "john.doe@example.com",
    },
    address: {
        city: "New York",
        zip: "10001",
    },
    is_active: true,
};

function convert(source: ISourceData): ITargetData {
    const target: ITargetData = {
        id: source.user_id,
        name: source.full_name,
        ...source.contact,
        location: `${source.address.city}, ${source.address.zip}`,
        status: source.is_active? 'active' : 'inactive',
    };
    return target;
}

const target = convert(source);
console.log(target);
