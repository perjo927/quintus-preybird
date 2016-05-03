import {Component, ViewChild, AfterViewInit, ElementRef} from 'angular2/core';

@Component({
    selector: 'quintus-preybird-app',
    templateUrl: 'app/app.component.html',
    directives: [],
    providers: [
    ],
    styleUrls: ['app/app.component.css'],
})

export class AppComponent {
    width:number;
    height:number;
    context: CanvasRenderingContext2D;
    player: HTMLImageElement;

    // https://angular.io/docs/ts/latest/api/core/ViewChild-var.html
    // You can use the ViewChild annotation to grab an instance of your canvas element
    // get element with #gameCanvas reference
    @ViewChild("gameCanvas") gameCanvas: ElementRef;

    constructor(){
        this.width = 800;
        this.height = 600;

        this.player = new Image();
        this.player.src = "app/static/player.gif";

    }

    ngAfterViewInit() {
        let canvas: HTMLCanvasElement = this.gameCanvas.nativeElement;
        this.context = canvas.getContext("2d");

        this.tick();
    }

    tick() {
        // requestAnimationFrame(()=> {
        //     this.tick()
        // });

        let ctx = this.context;


        ctx.strokeRect(0, 0, this.width, this.height);
        ctx.drawImage(this.player, this.width/2, this.height/2);
    }
}