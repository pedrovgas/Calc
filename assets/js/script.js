const Calcs = [
    'imc',
    'sum',
]


function CalculaImc(peso, altura){
    result = peso / (altura)**2
    return result.toFixed(2) ; 
}