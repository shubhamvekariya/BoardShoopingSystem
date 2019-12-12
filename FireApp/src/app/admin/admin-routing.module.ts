import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component'

import { GetBoardComponent } from './get-board/get-board.component';
import { EditBoardComponent } from './edit-board/edit-board.component';
import { AddBoardComponent } from './add-board/add-board.component';
import { GetAccessoryComponent } from './get-accessory/get-accessory.component';
import { EditAccessoryComponent } from './edit-accessory/edit-accessory.component';
import { AddAccessoryComponent } from './add-accessory/add-accessory.component';
import { GetDetailComponent } from './get-detail/get-detail.component';
import { GetPaymentDetailComponent} from './get-payment-detail/get-payment-detail.component';
import { GetAdminComponent } from './get-admin/get-admin.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { GetIssueComponent } from './get-issue/get-issue.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'Login', component: LoginComponent},
  { path: 'DisplayBoard', component: GetBoardComponent},
  { path: 'AddBoard', component: AddBoardComponent},
  { path: 'EditBoard/:id', component: EditBoardComponent},
  { path: 'DisplayAccessory', component: GetAccessoryComponent},
  { path: 'AddAccessory', component: AddAccessoryComponent},
  { path: 'EditAccessory/:id', component: EditAccessoryComponent},  
  { path: 'DisplayDetail', component: GetDetailComponent},
  { path: 'DisplayPayment', component: GetPaymentDetailComponent},
  { path: 'DisplayAdmin', component: GetAdminComponent},
  { path: 'EditAdmin/:id', component: EditAdminComponent},
  { path: 'DisplayIssue', component: GetIssueComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
