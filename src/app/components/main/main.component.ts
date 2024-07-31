import {Component} from "@angular/core";
import {DynamicComponent} from "../dynamic/dynamic.component";

@Component({
	selector: "main",
	standalone: true,
	imports: [DynamicComponent],
	templateUrl: "./main.component.html",
	styleUrl: "./main.component.scss",
})
export class MainComponent {
  public showComponent = false;
}
