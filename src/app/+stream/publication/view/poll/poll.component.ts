import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { PublicationPollService } from './poll.service';

@Component({
	selector: 'publication-poll',
	styles: [``],
	templateUrl: 'poll.component.html'
})

export class PublicationPollComponent implements OnInit {

	public displayVotesDetails : boolean;
	public submitLoading : boolean;
	public pollForm : any;

	@Input('poll') poll: any ;
	@Input('publicationId') publicationId: any ;

	@Output() voted = new EventEmitter<any>();

	constructor(
		public route: ActivatedRoute,
		public _pollService : PublicationPollService,
		private fb: FormBuilder
	) {}

	public ngOnInit() {
		this.initPoll();
	}

	initPoll() {
		this.displayVotesDetails = false;
		this.pollForm = this.fb.group({
			'multipleChoices': this.buildMultipleChoices(),
			'singleChoice' : ['']
		});
	}

	submitVote(value) {
		let body = this.createBody(value);
        this.submitLoading = true;
		this._pollService.savePollVote(body).subscribe(
			data => {
				this.submitLoading = false;
				this.poll.hasVoted = true;
				this.voted.emit(data);
			},
			err => console.error(err),
			() => console.log('done saving poll vote')
		);
    }

	createBody(value){
		let body = {
			publicationId : this.publicationId,
			choices : []
		};
		if(this.poll.type === 'MULTIPLE') {
			for (let i in value.multipleChoices) {
				if(value.multipleChoices[i]) body.choices.push(this.poll.choices[i].id);
			}
		}else{
			console.warn(value.singleChoice);
			body.choices.push(value.singleChoice);
		}
		return body;
	}

	get multipleChoices(): FormArray {
		return this.pollForm.get('multipleChoices') as FormArray;
	}

	isSumbitEnable(){
		let enable;
		if(this.poll.type === 'MULTIPLE') {
			enable = this.pollForm.get('multipleChoices').value.some(x => x === true);
		}else{
			enable = this.pollForm.get('singleChoice').value.length > 0;
		}
		return enable;
	}

	buildMultipleChoices(){
		const arr = this.poll.choices.map(c => {
			return this.fb.control(false);
		})
		return this.fb.array(arr);
	}

}
