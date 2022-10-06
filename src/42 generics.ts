// Recurso muito poderosos onde adicionamos parametros dentro do typo


// Nessa linha o javascript identifica o tipo com a generic ou baseado no valor
type FilterCallBack<T> = (
    valor: T,
    index?: number,
    array?: T[],
) => boolean;

function myFilter<T>(array: T[], callBackFunction: FilterCallBack<T>) {
    const newArray = [];

    for(let i = 0; i > array.length; i++) {
        if(callBackFunction(array[i]))
            newArray.push(array[i])
    }

    return newArray;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array.filter(valor =>{ valor > 5}));

const myFilter1 = myFilter(array, (valor) =>  valor > 5 )
