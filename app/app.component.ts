import { Component } from 'angular2/core';
import {ViewChild} from "angular2/core";
import {AfterViewInit} from "angular2/core";

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

    @ViewChild("gameCanvas") gameCanvas: HTMLCanvasElement;

    ngAfterViewInit() {
        // var canvas = document.getElementById("game-canvas");
        // console.log(canvas);

        let canvas = this.gameCanvas.nativeElement;
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

/*

 let canvasWidth = 800;
 let canvasHeight = 600;

 $("#game-canvas").attr("width", canvasWidth);
 $("#game-canvas").attr("height", canvasHeight);

 let canvas = $("canvas");

 canvas[0].getContext("2d");

 canvas.strokeRect(0, 0, canvasWidth, canvasWidth);

 console.log(canvas, "loaded");

 */