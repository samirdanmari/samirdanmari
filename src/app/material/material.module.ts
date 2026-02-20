import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card'
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