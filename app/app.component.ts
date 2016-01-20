import {Component,View} from 'angular2/core';
import Numbering from './app.numbering'

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: "templates/form.html"
})
export class AppComponent { 
    public startingNumber:number;
    public nup:number;
    public padLimit:number;
    public prefix:any;
    public postfix:any;
    public pad:boolean;
    public numberOfLots;
    public myNumbers;

    constructor(){
        this.numberOfLots = 4;
        this.padLimit = 6;
        this.startingNumber = 1;
    }


    submit(){
       var num = new Numbering({
            startingNumbers:this.generatedStartingNumbers(),
            prefix: this.prefix,
            padLimit: this.padLimit,
            postfix:this.postfix
        });
       this.myNumbers = num.result;
    }
    generatedStartingNumbers(){
        var numbers = [];
        var numOfLots = Number(this.numberOfLots);
        var IncrementsOf  = Number(4000);
        var stNum = Number(this.startingNumber);
        for (var i = 0; i < numOfLots; i++) {
            (i === 0) ? numbers.push(stNum = stNum) : numbers.push(stNum = stNum + IncrementsOf);
            console.log(numbers);
        }
        return numbers;
    }

    saveToFile(){
        function dataUrl(output) {
            return "data:x-application/text," + escape(output);
        }
        window.open(dataUrl(this.myNumbers));
    }

    save(){
        this.saveToFile();
        console.log(this.myNumbers);
    }
}