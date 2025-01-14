interface SourceData {
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

interface TargetData {
    id: string;
    name: string;
    phone: string;
    email: string;
    location: string;
    status: string;
}

const source: SourceData = {
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

function Convert(source: SourceData): TargetData {
    const target: TargetData = {
        id: source.user_id,
        name: source.full_name,
        phone: source.contact.phone,
        email: source.contact.email,
        location: `${source.address.city}, ${source.address.zip}`,
        status: source.is_active? 'active' : 'inactive',
    };
    return target;
}

const target = Convert(source);
console.log(target);
