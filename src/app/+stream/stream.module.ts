import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './stream.routes';
import { StreamComponent } from './stream.component';
import { StreamService } from './stream.service';

import {PublicationComponent} from './publication';
import {PublicationViewComponent} from './publication/view';
import {PublicationPollComponent} from './publication/view/poll';
import {PublicationPollService} from './publication/view/poll/poll.service';


console.log('`Stream` bundle loaded asynchronously');

@NgModule({
  declarations: [
    StreamComponent,
    PublicationComponent,
    PublicationViewComponent,
    PublicationPollComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [
      StreamService,
      PublicationPollService,
  ]
})

export class StreamModule {
  public static routes = routes;
}
