import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AdminRoutes } from './admin.routes';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
@NgModule({
    imports: [
        NgZorroAntdModule,
        RouterModule.forChild(AdminRoutes)
    ],
    declarations: [
        AdminComponent,
        HomeComponent
    ],
    providers: []
})
export class AdminModule { }
