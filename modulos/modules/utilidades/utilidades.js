
export function numerosAletorios(quantidade,numero){
    const numbersAleatorios = []
    for( let c = 0 ; c < quantidade ; c ++){        //Gerando numeros aleatorios
        numbersAleatorios.push(parseInt(Math.random() * numero));
    }
    return numbersAleatorios;
}

export function formatarDatas(data){
    let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear(); 
    return dataFormatada  //formatando datas para o modelo brasil
}