import Blob from './app/blob'
//var fs = require('fs');
// start number 8up sum first number plus 4000
export default class Numbering{
    public start;
    public startingNumbers;
    public result;
    public prepend;
    public apnd;
    public padLimit:number;

    constructor(obj: any) {
        this.apnd = obj.postfix ||'';
        this.prepend = obj.prefix ||'';
        this.padLimit = obj.padLimit;
        this.start = obj.startingNumbers;
        this.startingNumbers = this.start.length;
        console.log(this);
        this.run();
    }

    
    LeftPad(n,pad){
        var apnd = this.apnd;
        var padding = Number(pad) - Number(String(n).length);
        //console.log(String(n).length);
        var prepend=this.prepend;
        for(var i=0;i<padding;i++){
            prepend +='0';
        }
        return prepend+n+apnd;
    }
   
        // length of start array
     run() {  
         var start = this.start; 
         var startingNumbers = this.startingNumbers;    
        //3 columns
         var column1;
         var column2; 
         var column3;
         var column4;
         var column5; 
         var column6; 
         var column7;
         var column8;
            
        //columns labels
        var output = "a,b,c,d,e,f,g,h\n";

        var padLimit = this.padLimit;
        //Loops thru starting numbers on start array
        for (var i = 0; i < startingNumbers; i++) {
            //column 1 
            var col1 = start[i];

            //limit loop to 500 Lines per start Number
            var limit = start[i] + 500;
              
            //Numbering Loop
            for (col1; col1 < limit; col1++) {
                column1 = col1;
                column2 = col1 + 500;
                column3 = col1 + 1000;
                column4 = col1 + 1500;
                column5 = col1 + 2000;
                column6 = col1 + 2500;
                column7 = col1 + 3000;
                column8 = col1 + 3500;
                output += this.LeftPad(column1, padLimit) + ',';
                output += this.LeftPad(column2, padLimit) +',';
                output += this.LeftPad(column3, padLimit) +',';
                output += this.LeftPad(column4, padLimit) +',';
                output += this.LeftPad(column5, padLimit) +',';
                output += this.LeftPad(column6, padLimit) +',';
                output += this.LeftPad(column7, padLimit) +',';
                output += this.LeftPad(column8, padLimit) +'\n';
            } 
            this.result = output;
        }
    }  
}