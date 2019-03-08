import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(private http: HttpClient, private router: Router) {}

	get isAuthenticated() {
		return !!localStorage.getItem('token');
	}

	register(credentials) {
		this.http.post<any>('https://localhost:44345/api/account/register', credentials).subscribe((res) => {
			this.authenticate(res);
		});
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
