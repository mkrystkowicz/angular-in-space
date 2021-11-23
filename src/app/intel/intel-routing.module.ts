import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IntelBrowserComponent } from './intel-browser/intel-browser.component';

const routes: Routes = [
  { path: 'browser', component: IntelBrowserComponent },
  { path: '', redirectTo: 'browser', pathMatch: 'full' },
];

@NgModule({
  imports: [ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [ReactiveFormsModule, RouterModule],
})
export class IntelRoutingModule {}
