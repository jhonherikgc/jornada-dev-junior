anoNascimento = int(input("Digite o ano de seu nascimento:"))
anoAtual = int(input("Digite o ano atual:"))

def calcularIdade (anoNascimento, anoAtual):
    idade = anoAtual - anoNascimento
    return idade

print(calcularIdade(anoNascimento, anoAtual))