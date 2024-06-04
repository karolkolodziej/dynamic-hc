import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
	selector: "dynamic",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./dynamic.component.html",
	styleUrl: "./dynamic.component.scss",
})
export class DynamicComponent {
	async ngOnInit() {
		const Highcharts = await import("highcharts");

		Highcharts.chart("container", {
			chart: {
				renderTo: "container",
			},
			title: {
				text: "My chart",
			},
			series: [
				{
					type: "line",
					data: [1, 2, 3, 4, 5],
				},
			],
		});
	}
}
