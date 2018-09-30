import { StreamComponent } from './stream.component';

export const routes = [
  { path: '', children: [
    { path: '', component: StreamComponent },
  ]},
];
