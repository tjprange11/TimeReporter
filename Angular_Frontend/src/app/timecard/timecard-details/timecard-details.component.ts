import { Component, OnInit, Input } from '@angular/core';
import { Timecard } from 'src/app/Models/Timecard';
import { Workday } from 'src/app/Models/Workday';

@Component({
	selector: 'app-timecard-details',
	templateUrl: './timecard-details.component.html',
	styleUrls: [ './timecard-details.component.css' ]
})
export class TimecardDetailsComponent implements OnInit {
	@Input() timecard: Timecard;
	workdays: Workday[];
	constructor() {}

	ngOnInit() {}

	getTotalHours(): number {
		var total = 0;
		this.workdays.forEach((element) => {
			total += element.hoursWorked;
		});
		return total;
	}
}
