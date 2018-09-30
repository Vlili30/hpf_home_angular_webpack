import { NetworksComponent } from './networks.component';
import { NetworkComponent } from './network/network.component';

export const routes = [
  { path: '', children: [
    { path: '', component: NetworksComponent },
    { path: 'network/:id', component: NetworkComponent },
  ]},
];
