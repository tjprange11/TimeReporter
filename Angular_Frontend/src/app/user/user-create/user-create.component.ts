import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
	selector: 'app-user-create',
	templateUrl: './user-create.component.html',
	styleUrls: [ './user-create.component.css' ]
})
export class UserCreateComponent implements OnInit {
	myForm: FormGroup;

	constructor(private fb: FormBuilder, private service: ApiServiceService) {}

	ngOnInit() {
		this.myForm = this.fb.group({
			firstName: [ '', [ Validators.required ] ],
			middleInitial: [ '', [ Validators.maxLength(1) ] ],
			lastName: [ '', [ Validators.required ] ],
			email: [ '', [ Validators.required, Validators.email ] ],
			isSupervisor: [ false ],
			isAdmin: [ false ],
			deleted: [ false ],
			companyId: [ '' ]
		});

		this.myForm.valueChanges.subscribe(console.log);
	}

	get firstName() {
		return this.myForm.get('firstName');
	}

	get middleInitial() {
		return this.myForm.get('middleInitial');
	}

	get lastName() {
		return this.myForm.get('lastName');
	}

	get email() {
		return this.myForm.get('email');
	}

	get isSupervisor() {
		return this.myForm.get('isSupervisor');
	}

	get isAdmin() {
		return this.myForm.get('isAdmin');
	}
	get deleted() {
		return this.deleted.myForm.get('deleted');
	}
}
