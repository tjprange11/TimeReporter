import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimecardComponent } from './timecard/timecard.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './user/home/home.component';
import { TimecardCreateComponent } from './timecard/timecard-create/timecard-create.component';
import { TimecardHomeComponent } from './timecard/timecard-home/timecard-home.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { CompanyCreateComponent } from './company/company-create/company-create.component';

const routes: Routes = [
	{ path: '', component: LoginComponent },
	{
		path: 'user',
		component: UserComponent,
		children: [
			{
				path: 'timecard',
				component: TimecardComponent,
				children: [
					{ path: '', component: TimecardHomeComponent },
					{ path: 'create', component: TimecardCreateComponent }
				]
			},
			{ path: '', component: HomeComponent },
			{ path: 'create', component: UserCreateComponent }
		]
	},
	{
		path: 'company',
		component: CompanyCreateComponent,
		children: [ { path: 'create', component: CompanyCreateComponent } ]
	},
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
