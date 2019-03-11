import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	myForm: FormGroup;
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
}
