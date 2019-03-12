import { Component, OnInit, Input } from '@angular/core';
import { User } from '../Models/User';
import { ApiServiceService } from '../api-service.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: [ './user.component.css' ]
})
export class UserComponent implements OnInit {
	@Input() user: User;
	route: string;

	constructor(private service: ApiServiceService) {
		this.user = new User();
		this.user.isAdmin = true;
		this.user.fullName = 'Sucky Wuck';
		this.route = '';
	}

	ngOnInit() {}

	logout() {
		console.log('sup');
	}
}
