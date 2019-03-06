import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-timecard',
	templateUrl: './timecard.component.html',
	styleUrls: [ './timecard.component.css' ]
})
export class TimecardComponent implements OnInit {
	myFilter: any;
	myForm: FormGroup;
	constructor(private fb: FormBuilder) {
		this.myFilter = (d: Date): boolean => {
			const day = d.getDay();

			return day == 1; // Only Modays are able to be selected
		};
	}

	ngOnInit() {
		this.myForm = this.fb.group({
			startDate: [ '', [ Validators.required ] ],
			password: [ '', [ Validators.required ] ]
		});

		this.myForm.valueChanges.subscribe(console.log);
	}

	create(formValue) {}
}
