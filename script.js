//Utilizando Contructor e métodios para calcular Retangulo,Perímetro de Uum Retangulo,Diagonal de um Retangulo

class Area{
    constructor(base,altura){
        this.altura = altura; this.base = base;
    }


    get printer(){
        return this.CalcularRetangulo()
    }

    get printer1(){
        return this.CalcularPRetangulo()
    } 

    get printer2(){
        return this.CalcularDRetangulo()
    }

    //Calcular Retangulo
    CalcularRetangulo(){
        return this.base * this.altura;
    }


    //Calcular Perímetro do Retangulo
    CalcularPRetangulo(){
        return 2 * (this.base + this.altura)
    }

    //Calcular Diagonal do Retangulo
    CalcularDRetangulo(){
        return (this.altura * this.altura) + (this.base * this.base)
    }

}

const retangulo = new Area(20,20);
console.log('Calculo do Retangulo ' + retangulo.printer)
console.log('Calculo do Perímetro do Retangulo ' + retangulo.printer1)
console.log('Calculo da Diagonal do Retangulo ' +  retangulo.printer2)

