import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/Models/User';
import { Timecard } from 'src/app/Models/Timecard';
import { TimecardApiService } from '../timecard-api.service';

@Component({
	selector: 'app-timecard-create',
	templateUrl: './timecard-create.component.html',
	styleUrls: [ './timecard-create.component.css' ]
})
export class TimecardCreateComponent implements OnInit {
	@Input() user: User;
	myForm: FormGroup;

	constructor(private fb: FormBuilder, private service: TimecardApiService) {}

	ngOnInit() {
		this.myForm = this.fb.group({
			startDate: [ { value: Date(), disabled: true }, [ Validators.required ] ]
		});

		this.myForm.valueChanges.subscribe(console.log);
	}

	create(formValue) {
		var timecard = new Timecard();
		timecard.startDate = formValue;
		timecard.userId = this.user.id;
		timecard.endDate = this.getEndDate(formValue);
		this.service.postTimecard(timecard);
	}
	getEndDate(value: Date): Date {
		value.setDate(value.getDate() + 6);
		return value;
	}
}
