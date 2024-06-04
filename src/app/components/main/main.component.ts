import { Component } from "@angular/core";
import { DynamicComponent } from "../dynamic/dynamic.component";
import { NgComponentOutlet } from "@angular/common";

@Component({
	selector: "main",
	standalone: true,
	imports: [DynamicComponent, NgComponentOutlet],
	templateUrl: "./main.component.html",
	styleUrl: "./main.component.scss",
})
export class MainComponent {
	public dynamicComponent: { new (): DynamicComponent } | null = null;

	public async loadDynamicComponent() {
		const { DynamicComponent } = await import("../dynamic/dynamic.component");

		this.dynamicComponent = DynamicComponent;
	}
}
