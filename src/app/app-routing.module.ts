import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './profile/form/form.component';
import { BodyComponent } from './addstory/body/body.component';
import { EntriesComponent } from './diary/entries/entries.component';

const routes: Routes = [
    {path: 'profile', component: FormComponent},
    {path: 'addstory', component: BodyComponent},
    {path: 'diary', component: EntriesComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
export const routingComponents = [FormComponent, BodyComponent, EntriesComponent]