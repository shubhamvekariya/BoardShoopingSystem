import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { GetBoardComponent } from './get-board/get-board.component';
import { EditBoardComponent } from './edit-board/edit-board.component';
import { AddBoardComponent } from './add-board/add-board.component';
import { AddAccessoryComponent } from './add-accessory/add-accessory.component';
import { GetAccessoryComponent } from './get-accessory/get-accessory.component';
import { EditAccessoryComponent } from './edit-accessory/edit-accessory.component';
import { GetDetailComponent } from './get-detail/get-detail.component';
import { GetPaymentDetailComponent } from './get-payment-detail/get-payment-detail.component';
import { GetAdminComponent } from './get-admin/get-admin.component';
import { GetIssueComponent } from './get-issue/get-issue.component';


@NgModule({
  declarations: [LoginComponent, EditAdminComponent, AdminHeaderComponent, GetBoardComponent, EditBoardComponent, AddBoardComponent, AddAccessoryComponent, GetAccessoryComponent, EditAccessoryComponent, GetDetailComponent, GetPaymentDetailComponent, GetAdminComponent, GetIssueComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
