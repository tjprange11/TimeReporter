import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {
	myForm: FormGroup;
	router: Router;
	constructor(private service: AuthService, private fb: FormBuilder) {}

	ngOnInit() {
		this.myForm = this.fb.group({
			email: [ '', [ Validators.required, Validators.email ] ],
			password: [ '', [ Validators.required, Validators.minLength(6) ] ]
		});

		this.myForm.valueChanges.subscribe(console.log);
	}

	get email() {
		return this.myForm.get('email');
	}

	get password() {
		return this.myForm.get('password');
	}

	register(formValue) {
		if (this.service.validateRegister(formValue.email)) {
			this.service.register(formValue);
			this.router.navigate([ '/user', this.service.getUser() ]);
		}
	}
}
