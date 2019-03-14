import { Component, OnInit, Input } from '@angular/core';
import { Timecard } from 'src/app/Models/Timecard';
import { Workday } from 'src/app/Models/Workday';
import { TimecardApiService } from '../timecard-api.service';
import { User } from 'src/app/Models/User';

@Component({
	selector: 'app-timecard-home',
	templateUrl: './timecard-home.component.html',
	styleUrls: [ './timecard-home.component.css' ]
})
export class TimecardHomeComponent implements OnInit {
	@Input() user: User;
	timecardList: Timecard[];
	viewTimecardList: Timecard[];
	constructor(private service: TimecardApiService) {
		this.timecardList = this.service.getAllTimecards(this.user.id);
		this.viewTimecardList = this.getViewTimecardList(this.timecardList);
	}

	ngOnInit() {}

	getViewTimecardList(list: Timecard[]): Timecard[] {
		if (list.length > 10) {
			list.slice(list.length - 11, list.length - 2);
		}
		return list;
	}
}
