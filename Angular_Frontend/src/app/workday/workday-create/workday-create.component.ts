import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Timecard } from 'src/app/Models/Timecard';
import { Task } from 'src/app/Models/Task';

@Component({
	selector: 'app-workday-create',
	templateUrl: './workday-create.component.html',
	styleUrls: [ './workday-create.component.css' ]
})
export class WorkdayCreateComponent implements OnInit {
	myForm: FormGroup;
	@Input() timecard: Timecard;
	tasks: Task[];
	constructor(private fb: FormBuilder) {
		this.myForm = this.fb.group({
			date: [ Date(), Validators.required ],
			taskId: [ '', Validators.required ],
			hours: [ 0, Validators.required ]
		});

		this.myForm.valueChanges.subscribe(console.log);
	}

	ngOnInit() {}
}
