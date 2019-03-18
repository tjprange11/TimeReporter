import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-company-create',
	templateUrl: './company-create.component.html',
	styleUrls: [ './company-create.component.css' ]
})
export class CompanyCreateComponent implements OnInit {
	myForm: FormGroup;
	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.myForm = this.fb.group({
			name: [ '', Validators.required ]
		});

		this.myForm.valueChanges.subscribe(console.log);
	}

	get name() {
		return this.myForm.get('name');
	}
}
