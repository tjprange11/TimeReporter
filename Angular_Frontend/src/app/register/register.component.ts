import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
	myForm: FormGroup;
	constructor(private service: AuthService, private fb: FormBuilder) {}

	ngOnInit() {
		this.myForm = this.fb.group({
			firstName: [ '', [ Validators.required ] ],
			middleInitial: [ '', [ Validators.maxLength(1) ] ],
			lastName: [ '', [ Validators.required ] ],
			email: [ '', [ Validators.required, Validators.email ] ],
			password: [ '', [ Validators.required, Validators.minLength(6) ] ],
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

	get password() {
		return this.myForm.get('password');
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

	register(formValue) {
		var credentials: object = {
			email: formValue.email,
			password: formValue.password
		};
		this.service.register(credentials);
	}
}
