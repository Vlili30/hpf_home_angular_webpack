import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './networks.routes';
import { NetworksComponent } from './networks.component';
import { NetworkComponent } from './network/network.component';
// import { ArticleComponent } from './article/article.component';
import { StuctureService } from './networks.service';
import { NetworkService } from './network/network.service';


console.log('`Networks` bundle loaded asynchronously');

@NgModule({
  declarations: [
    NetworksComponent,
    NetworkComponent
    // ArticleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    StuctureService,
    NetworkService,
  ]
})

export class NetworksModule {
  public static routes = routes;
}
