interface ISourceData {
    title: string;
    year: string;
    author: string;
}

interface ITargetData{
    title: string;
    year: string;
    author: string;
    preview: string;
    url: string;
}

const source: ISourceData = {
    title: "Harry Potter",
    year: "1997",
    author: "J.K. Rowling",
};

function createBook(source: ISourceData): ITargetData {
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
