import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimecardComponent } from './timecard/timecard.component';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { ApiServiceService } from './api-service.service';
import { AuthService } from './auth.service';
import { AuthInterceptor } from './auth.interceptor';
import { TimecardCreateComponent } from './timecard/timecard-create/timecard-create.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { HomeComponent } from './user/home/home.component';
import { TimecardHomeComponent } from './timecard/timecard-home/timecard-home.component';
import { TimecardDetailsComponent } from './timecard/timecard-details/timecard-details.component';
import { WorkdayCreateComponent } from './workday/workday-create/workday-create.component';
import { WorkdayDetailsComponent } from './workday/workday-details/workday-details.component';
import { CompanyCreateComponent } from './company/company-create/company-create.component';
import { CreateCompanyAdminComponent } from './company/create-company-admin/create-company-admin.component';

@NgModule({
	declarations: [ AppComponent, TimecardComponent, UserComponent, LoginComponent, RegisterComponent, TimecardCreateComponent, UserCreateComponent, HomeComponent, TimecardHomeComponent, TimecardDetailsComponent, WorkdayCreateComponent, WorkdayDetailsComponent, CompanyCreateComponent, CreateCompanyAdminComponent ],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		HttpClientModule,
		MatButtonModule,
		MatSelectModule,
		MatInputModule,
		MatCheckboxModule,
		MatChipsModule,
		MatDatepickerModule,
		MatMomentDateModule,
		MatCardModule,
		MatToolbarModule,
		MatIconModule,
		MatMenuModule,
		MatSidenavModule
	],
	providers: [
		ApiServiceService,
		AuthService,
		AuthInterceptor,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true
		}
	],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
