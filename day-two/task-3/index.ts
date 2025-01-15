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
    const queryParams = new URLSearchParams({
        title: source.title,
        year: source.year,
        author: source.author,
    });
    return {
        ...source,
        preview: `Название: ${source.title}, Автор: ${source.author}, Год: ${source.year}`,
        url: `www.someurl.com/preview?${queryParams.toString()}`,
    };
}

const target = createBook(source);
console.log(target);
