
function parImpar(num)
{
    if(num % 2 == 0)
    {
        return true;
    }else
    {
        return false;
    }
}

if(parImpar(8))
{
    console.log("É par!");
}else
{
    console.log("É ímpar!");
}