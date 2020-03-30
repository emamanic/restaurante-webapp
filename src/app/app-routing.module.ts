import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/components/default/default.component';
import { DefaultModule } from './layouts/default.module';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DefaultComponent,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: { preload: true, delay: false }
  },
  {
    path: 'posts',
    component: DefaultComponent,
    loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule),
    data: { preload: true, delay: false }
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [
    DefaultModule,
    RouterModule.forRoot(routes, { useHash: true, enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
