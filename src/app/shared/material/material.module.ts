import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatChipsModule,
    MatSelectModule
  ],
  exports: [MatStepperModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCheckboxModule, MatChipsModule,
    MatSelectModule]
})
export class MaterialModule { }
