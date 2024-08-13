import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card'
import {DragDropModule} from '@angular/cdk/drag-drop';
const MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  DragDropModule
]
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})

export class MaterialModule{ }