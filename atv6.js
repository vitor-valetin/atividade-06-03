
//Usando listas
let n = [4, 7, 0]



function maiorNum(n)
{
    var maior = 0;

    for(let i = 0; i < 3; i++)
    {
        if(i == 0)
        {
            maior = n[i];
        }else if(n[i] > maior)
        {
            maior = n[i];
        }
    }

    return maior;
}

console.log("O maior número é:", maiorNum(n));

//Sem listas

function maiorNumero(n1, n2, n3)
{
    let maiorN = 0;

    if(n1 > n2 && n1 > n3)
    {
        maiorN = n1;
    }else if(n2 > n3)
    {
        maiorN = n2;
    }else{
        maiorN = n3;
    }

    return maiorN;
}

console.log("O maior número é:", maiorNumero(0, 52, 103));