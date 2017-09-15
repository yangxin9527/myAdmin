import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AdminRoutes } from './admin.routes';
import { AdminComponent } from './admin.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
@NgModule({
    imports: [
        NgZorroAntdModule,
        RouterModule.forChild(AdminRoutes)
    ],
    declarations: [
        AdminComponent,
        AdminManageComponent
    ],
    providers: []
})
export class AdminModule { }
