import { Component, OnInit } from '@angular/core';
import { Timecard } from '../Models/Timecard';
import { Workday } from '../Models/Workday';

@Component({
	selector: 'app-timecard',
	templateUrl: './timecard.component.html',
	styleUrls: [ './timecard.component.css' ]
})
export class TimecardComponent implements OnInit {
	mostRecentTimecard: Timecard;
	mostRecentWorkdays: Workday[];
	timecardList: Timecard[];
	constructor() {}

	ngOnInit() {}
}
