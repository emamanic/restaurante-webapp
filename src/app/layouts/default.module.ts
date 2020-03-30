import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultComponent } from './components/default/default.component';

@NgModule({
  declarations: [
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    DefaultComponent
  ]
})
export class DefaultModule { }
