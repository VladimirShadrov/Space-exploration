import { MainPage } from '../components/mainPage';
import { Categories } from '../components/categories';
import { DetailPage } from '../components/detailPage';

export const routes = [
  { path: '', component: MainPage },
  { path: 'spacers', component: Categories },
  { path: 'rockets', component: Categories },
  { path: 'effect', component: Categories },
  { path: 'spacers/gagarin', component: DetailPage },
  { path: 'spacers/titov', component: DetailPage },
  { path: 'spacers/leonov', component: DetailPage },
  { path: 'spacers/savitskaya', component: DetailPage },
  { path: 'rockets/souz', component: DetailPage },
  { path: 'rockets/proton', component: DetailPage },
  { path: 'rockets/buran', component: DetailPage },
  { path: 'effect/blood', component: DetailPage },
  { path: 'effect/bones', component: DetailPage },
  { path: 'effect/endocrine', component: DetailPage },
  { path: 'effect/nervous', component: DetailPage },
  { path: 'effect/respiratory', component: DetailPage },
];
