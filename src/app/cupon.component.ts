import { Component } from "@angular/core";
import { ConnectableObservable } from "rxjs";

@Component({
    selector: "app-cupon",
    templateUrl: "./cupon.component.html"
})

export class AppCupon{
    generarCupon(){
        console.log("me diste click")
    }
}