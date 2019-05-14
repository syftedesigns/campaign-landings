import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrandingComponent } from './branding/branding.component';


const routes: Routes = [
    {
        path: 'branding',
        component: BrandingComponent,
        data: {Title: 'Start your brand today | Syftedesigns.com'}
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/branding'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule {}
