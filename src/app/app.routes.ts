import { ProductList } from './feature/pages/product-list/product-list';
import { Routes } from '@angular/router';
import { Dashboard } from './feature/pages/dashboard/dashboard';
import { NotFoundComponent } from './feature/pages/not-found/not-found.component';

export const routes: Routes = [
  {path:'', redirectTo:'dashboard', pathMatch:'full'},
  {path:'dashboard', component:Dashboard, title:'Dashboard'},
  {path:'products', loadComponent: () => import('./feature/pages/product-list/product-list').then((c) => c.ProductList), title:'Products'},
  {path:'products/:p_id', loadComponent: () => import('./feature/pages/product-details/product-details').then((c) => c.ProductDetails)},
  {path: '**', component: NotFoundComponent, title: 'Error 404'},

];
