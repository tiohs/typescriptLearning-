// Encadeamento opcional é esse simbolo ? e Operador de coalescència nula ??

type Doc = {
    title: string;
    text: string;
    data?: Date;
}

const doc: Doc = {
    title: 'React',
    text: 'Welcome framework'
}

console.log(doc.data?.toDateString() ?? 'Ixi, não existe data');
