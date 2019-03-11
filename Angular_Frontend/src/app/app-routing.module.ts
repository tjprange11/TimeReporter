import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimecardComponent } from './timecard/timecard.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
	{ path: 'timecard', component: TimecardComponent },
	{ path: '', component: LoginComponent },
	{ path: 'user', component: UserComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'login', component: LoginComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
