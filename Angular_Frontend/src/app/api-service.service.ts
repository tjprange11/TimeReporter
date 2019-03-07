import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class ApiServiceService {
	constructor(private http: HttpClient) {}

	postUser(user) {
		this.http.post('https://localhost:44345/api/Users', user).subscribe((res) => {
			console.log(res);
		});
	}
}
