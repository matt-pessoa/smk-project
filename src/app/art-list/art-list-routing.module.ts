import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtListComponent } from './art-list.component';

const routes: Routes = [{ path: 'search', component: ArtListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtListRoutingModule {}
