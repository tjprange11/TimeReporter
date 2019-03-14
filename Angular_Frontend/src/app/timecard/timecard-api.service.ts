import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Timecard } from '../Models/Timecard';
import { Workday } from '../Models/Workday';

@Injectable({
	providedIn: 'root'
})
export class TimecardApiService {
	constructor(private http: HttpClient) {}

	getAllTimecards(userId): Timecard[] {
		var timecards: any = this.http.get('https://localhost:44345/api/Timecard', userId).subscribe((res) => {
			timecards = res;
		});
		return timecards;
	}

	getWorkdays(timecard): Workday[] {
		var workdays: any = this.http.get('https://localhost:44345/api/Workday', timecard).subscribe((res) => {
			workdays = res;
		});
		return workdays;
	}
	postTimecard(timecard: Timecard) {
		this.http.post('https://localhost:44345/api/Users', timecard).subscribe((res) => {
			console.log(res);
		});
	}
}
