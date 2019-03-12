import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './Models/User';

@Injectable({
	providedIn: 'root'
})
export class ApiServiceService {
	constructor(private http: HttpClient) {}

	postUser(user) {
		if (this.validatePostUser(user.email)) {
			this.http.post('https://localhost:44345/api/Users', user).subscribe((res) => {
				console.log(res);
			});
		}
	}
	validatePostUser(email: string) {
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
}
