interface SourceData {
    title: string;
    year: string;
    author: string;
}

interface TargetData{
    title: string;
    year: string;
    author: string;
    preview: string;
    url: string;
}

const source: SourceData = {
    title: "Harry Potter",
    year: "1997",
    author: "J.K. Rowling",
};

function createBook(source: SourceData): TargetData {
    const target = {
        title: source.title,
        year: source.year,
        author: source.author,
        preview: `Название: ${source.title}, Автор: ${source.author}, Год: ${source.year}`,
        url: `www.someurl.com/preview?title=${source.title}&year=${source.year}&author=${source.author}`.split(" ").join(""),
    };
    return target;
}

const target = createBook(source);
console.log(target);
