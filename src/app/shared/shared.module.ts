import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
  declarations: [],
  exports: [
    MatToolbarModule,
    CommonModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
  ],
})
export class SharedModule { }
