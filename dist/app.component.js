System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.width = 800;
                    this.height = 600;
                    this.player = new Image();
                    this.player.src = "app/static/player.gif";
                }
                AppComponent.prototype.ngAfterViewInit = function () {
                    var canvas = this.gameCanvas.nativeElement;
                    this.context = canvas.getContext("2d");
                    this.tick();
                };
                AppComponent.prototype.tick = function () {
                    // requestAnimationFrame(()=> {
                    //     this.tick()
                    // });
                    var ctx = this.context;
                    ctx.strokeRect(0, 0, this.width, this.height);
                    ctx.drawImage(this.player, this.width / 2, this.height / 2);
                };
                __decorate([
                    core_1.ViewChild("gameCanvas"), 
                    __metadata('design:type', core_1.ElementRef)
                ], AppComponent.prototype, "gameCanvas", void 0);
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'quintus-preybird-app',
                        templateUrl: 'app/app.component.html',
                        directives: [],
                        providers: [],
                        styleUrls: ['app/app.component.css'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map