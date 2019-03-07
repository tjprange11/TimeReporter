import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-timecard',
	templateUrl: './timecard.component.html',
	styleUrls: [ './timecard.component.css' ]
})
export class TimecardComponent implements OnInit {
	myForm: FormGroup;
	myFilter = (d: Date): boolean => {
		const day = d.getDay();
		// Prevent Saturday and Sunday from being selected.
		return day == 1;
	};
	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.myForm = this.fb.group({
			startDate: [ Date(), [ Validators.required ] ],
			password: [ '', [ Validators.required ] ]
		});

		this.myForm.valueChanges.subscribe(console.log);
	}

	create(formValue) {}
}
