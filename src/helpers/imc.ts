export type Level = {
    titulo:string,
    cor:string,
    icone:'down'|'up',
    imc:number[],
    seuIMC?:number
}

export const levels:Level[]= [
    {titulo:'Magreza', cor:'#96a3ab', icone:'down',imc:[0, 18.59]},
    {titulo:'Normal', cor:'#0ead69', icone:'up',imc:[18.6, 24.99]},
    {titulo:'Sobrepeso', cor:'#e2b036', icone:'down',imc:[25, 30]},
    {titulo:'Obesidade', cor:'#c3423f', icone:'down',imc:[30.1, 99]},
];

export const calcularIMC = (altura:number, peso:number)=>{
    const imc = Math.round((peso / (altura * altura)) * 10) / 10;

    for(let i in levels){
        if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]){
           
            let levelCopy:Level = {...levels[i]};

           levelCopy.seuIMC = parseFloat(imc.toFixed(2));
            return levelCopy;
        }
    }

    return null;
}