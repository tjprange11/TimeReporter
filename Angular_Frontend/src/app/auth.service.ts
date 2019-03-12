import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './Models/User';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private http: HttpClient, private router: Router) {}

	get isAuthenticated() {
		return !!localStorage.getItem('token');
	}

	register(credentials) {
		if (this.validateRegister(credentials.email)) {
			this.http.post<any>('https://localhost:44345/api/account/register', credentials).subscribe((res) => {
				this.authenticate(res);
			});
		}
	}

	validateRegister(email: string) {
		var users: any = this.http.get('https://localhost:44345/api/Users').subscribe((res) => {
			users = res;
		});
		users.forEach((element: User) => {
			if (element.email == email) {
				return false;
			}
		});
		return true;
	}

	login(credentials) {
		this.http.post<any>('https://localhost:44345/api/account/login', credentials).subscribe((res) => {
			this.authenticate(res);
		});
	}

	authenticate(res) {
		localStorage.setItem('token', res);

		this.router.navigate([ '/user' ]);
	}

	logout() {
		localStorage.removeItem('token');
	}
}
