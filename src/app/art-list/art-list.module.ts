import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtListComponent } from './art-list.component';
import { ArtListRoutingModule } from './art-list-routing.module';

@NgModule({
  imports: [CommonModule, ArtListRoutingModule],
  declarations: [ArtListComponent],
  exports: [ArtListComponent],
})
export class ArtListModule {}
