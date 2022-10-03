import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ArtListComponent } from './art-list.component';
import { ArtListRoutingModule } from './art-list-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, ArtListRoutingModule],
  declarations: [ArtListComponent],
  exports: [ArtListComponent],
})
export class ArtListModule {}
