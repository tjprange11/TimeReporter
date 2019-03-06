import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimecardComponent } from './timecard/timecard.component';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [ AppComponent, TimecardComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatSelectModule,
		MatInputModule,
		MatCheckboxModule,
		MatChipsModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
