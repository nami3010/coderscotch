import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatepostRoutingModule } from './createpost-routing.module';
import {CreatepostComponent} from './createpost.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CreatepostRoutingModule,
    FormsModule, ReactiveFormsModule 
  ],
  declarations: [CreatepostComponent]
})
export class CreatepostModule { }
