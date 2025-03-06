
//Sem listas

function somaContaImparPar(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10)
{
    let soma = n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10;
    let impares = 0;
    let pares = 0;

    if(n1 % 2 == 0)
    {
        pares++;
    }else
    {
        impares++;
    }

    if(n2 % 2 == 0)
    {
        pares++;
    }else
    {
        impares++;
    }

    if(n3 % 2 == 0)
    {
        pares++;
    }else
    {
        impares++;
    }

    if(n4 % 2 == 0)
    {
        pares++;
    }else
    {
        impares++;
    }

    if(n5 % 2 == 0)
    {
        pares++;
    }else
    {
        impares++;
    }

    if(n6 % 2 == 0)
    {
        pares++;
    }else
    {
        impares++;
    }

    if(n7 % 2 == 0)
    {
        pares++;
    }else
    {
        impares++;
    }

    if(n8 % 2 == 0)
    {
        pares++;
    }else
    {
        impares++;
    }

    if(n9 % 2 == 0)
    {
        pares++;
    }else
    {
        impares++;
    }

    if(n10 % 2 == 0)
    {
        pares++;
    }else
    {
        impares++;
    }

    console.log("A soma de todos os número foi " + soma + ".");
    console.log("Tiveram " + pares + " números pares.");
    console.log("Tiveram " + impares + " número ímpares.");
}

somaContaImparPar(11, 22, 33, 44, 55, 66, 77, 88, 99, 100);

//Usando listas

console.log("---------------------------------------------------------------------------------");

function somaContaImparPar2(n)
{
    let soma = 0;
    let impar = 0;
    let par = 0;
    n.forEach(i => {
        soma += i;
        if(i % 2 == 0)
        {
            par++;
        }else
        {
            impar++;
        }
    });

    console.log("A soma de todos os número foi " + soma + ".");
    console.log("Tiveram " + par + " números pares.");
    console.log("Tiveram " + impar + " número ímpares.");
}

somaContaImparPar2([15, 24, 74, 29, 72, 98, 96, 100, 83, 11]);