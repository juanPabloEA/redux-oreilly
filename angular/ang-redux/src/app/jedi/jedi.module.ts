import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from './jedi-list/jedi-list.reducer';
import { JediListComponent } from './jedi-list/jedi-list.component';



@NgModule({
  declarations: [JediListComponent],
  imports: [
    FormsModule,
    CommonModule,
    StoreModule.forFeature('jediList', reducer)
  ],
  exports: [
    JediListComponent
  ]
})
export class JediModule { }
