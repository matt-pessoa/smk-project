import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtInfoComponent } from './art-info.component';

const routes: Routes = [{ path: 'art/:id', component: ArtInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtInfoRoutingModule {}
