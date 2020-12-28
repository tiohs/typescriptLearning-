// Type cath o correção de tipo


// Condicional
const body = document.querySelector('body');
if (body) body.style.background = 'red';



// Type assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

// HTMLElemt

const input = document.querySelector('.input') as HTMLInputElement;
input.value;
input.focus();

// Type assertion de assertion a primeira assertion tem que se unknown
// const body4 = (document.querySelector('body') as unknown) as number;

// Recomendado
// Com o ! estou a dizer que o objecto não pode ser null
const body2 = document.querySelector('body')!;
body2.style.background = 'red';
