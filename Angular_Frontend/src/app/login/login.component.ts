import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	myForm: FormGroup;
	router: Router;
	constructor(private fb: FormBuilder, private service: AuthService) {}

	ngOnInit() {
		this.myForm = this.fb.group({
			email: [ '', [ Validators.required, Validators.email ] ],
			password: [ '', [ Validators.required ] ]
		});

		this.myForm.valueChanges.subscribe(console.log);
	}

	get email() {
		return this.myForm.get('email');
	}

	get password() {
		return this.myForm.get('password');
	}

	login(value) {
		this.service.login(value);
		this.router.navigate([ '/user', this.service.getUser() ]);
	}
}
