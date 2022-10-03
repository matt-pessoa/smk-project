import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArtInfoRoutingModule } from './art-info-routing.module';
import { ArtInfoComponent } from './art-info.component';

@NgModule({
  imports: [CommonModule, ArtInfoRoutingModule],
  declarations: [ArtInfoComponent],
  exports: [ArtInfoComponent],
})
export class ArtInfoModule {}
