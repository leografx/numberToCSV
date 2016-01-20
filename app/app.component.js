System.register(['angular2/core', './app.numbering'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_numbering_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_numbering_1_1) {
                app_numbering_1 = app_numbering_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.numberOfLots = 4;
                    this.padLimit = 6;
                    this.startingNumber = 1;
                }
                AppComponent.prototype.submit = function () {
                    var num = new app_numbering_1.default({
                        startingNumbers: this.generatedStartingNumbers(),
                        prefix: this.prefix,
                        padLimit: this.padLimit,
                        postfix: this.postfix
                    });
                    this.myNumbers = num.result;
                };
                AppComponent.prototype.generatedStartingNumbers = function () {
                    var numbers = [];
                    var numOfLots = Number(this.numberOfLots);
                    var IncrementsOf = Number(4000);
                    var stNum = Number(this.startingNumber);
                    for (var i = 0; i < numOfLots; i++) {
                        (i === 0) ? numbers.push(stNum = stNum) : numbers.push(stNum = stNum + IncrementsOf);
                        console.log(numbers);
                    }
                    return numbers;
                };
                AppComponent.prototype.saveToFile = function () {
                    function dataUrl(output) {
                        return "data:x-application/text," + escape(output);
                    }
                    window.open(dataUrl(this.myNumbers));
                };
                AppComponent.prototype.save = function () {
                    this.saveToFile();
                    console.log(this.myNumbers);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app'
                    }),
                    core_1.View({
                        templateUrl: "templates/form.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map