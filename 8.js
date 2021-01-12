const Chemeleon = {
    static colorChange(newColor){
        this.newColor = newColor;
        return this.newColor;
    }
    constructor({newColor = 'green'} ={}){
        this.newColor = newColor;
    }
}


const result = new Chemeleon({newColor: 'purple'});
console.log(result.colorChange('Nothing'));