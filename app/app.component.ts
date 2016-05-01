import { Component, ViewChild, AfterViewInit } from 'angular2/core';

@Component({
    selector: 'quintus-preybird-app',
    templateUrl: 'app/app.component.html',
    directives: [],
    providers: [
    ],
    styleUrls: ['app/app.component.css'],
})

export class AppComponent {
    rectW:number = 100;
    rectH:number = 100;
    rectColor: string = "#FF0000";
    context: CanvasRenderingContext2D;

    // https://angular.io/docs/ts/latest/api/core/ViewChild-var.html
    // You can use the ViewChild annotation to grab an instance of your canvas element
    // get element with #gameCanvas reference
    @ViewChild("gameCanvas") gameCanvas: HTMLCanvasElement;

    constructor(){
        this._width = 800;
        this._height = 600;
    }

    ngAfterViewInit() {
        let canvas: HTMLCanvasElement = this.gameCanvas.nativeElement;
        this.context = canvas.getContext("2d");

        this.tick();
    }

    tick() {
        requestAnimationFrame(()=> {
            this.tick()
        });

        let ctx = this.context;

        ctx.clearRect(0, 0, 400, 400);
        ctx.fillStyle = this.rectColor;
        ctx.fillRect(0, 0, this.rectW, this.rectH);
    }
}