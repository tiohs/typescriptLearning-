// O never e p tipo de função que nunca vai returna nada
// Ele nunca returna nada
export function creatErr(): never{
    throw new Error('Erro qualquer')
}

creatErr();
