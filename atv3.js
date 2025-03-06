
function notaAvalia(nomeAluno, nomeUC, nota)
{
    if(nota >= 8)
    {
        console.log("O aluno " + nomeAluno + " teve um excelente desempenho em " + nomeUC + "!");
    }else if(nota >=6)
    {
        console.log("O aluno " + nomeAluno + " teve um bom desempenho em " + nomeUC + "!");
    }else{
        console.log("O aluno " + nomeAluno + " teve um baixo desempenho em " + nomeUC + "!");
    }
}

notaAvalia("Vitor", "matemática", 8);