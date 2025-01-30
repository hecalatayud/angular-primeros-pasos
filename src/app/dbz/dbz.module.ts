import { NgModule } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    JsonPipe
  ],
  exports: [MainPageComponent],
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ]
})
export class DbzModule {}
