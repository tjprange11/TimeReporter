import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-timecard-create',
	templateUrl: './timecard-create.component.html',
	styleUrls: [ './timecard-create.component.css' ]
})
export class TimecardCreateComponent implements OnInit {
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
