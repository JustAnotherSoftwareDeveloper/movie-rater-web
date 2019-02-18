import { AllRatingsComponent } from './all-ratings/all-ratings.component';
import { AvailableInfoComponent } from './available-info/available-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRatingControlComponent } from './user-rating-control/user-rating-control.component';

const routes: Routes = [
            {
              path: 'available',
              component: AvailableInfoComponent
            },
            {
              path: 'ratings',
              component: AllRatingsComponent
            },
            {
              path: 'rate',
              component: UserRatingControlComponent
            },
            {
              path: '', 
              redirectTo: 'rate',
              pathMatch: 'full'
            }
        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
