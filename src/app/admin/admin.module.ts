import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AdminRoutes } from './admin.routes';
import { CarComponent } from './car/car.component';
import { AdminComponent } from './admin.component';
@NgModule({
    imports: [
        NgZorroAntdModule,
        RouterModule.forChild(AdminRoutes)
    ],
    declarations: [
        CarComponent,
        AdminComponent
    ],
    providers: []
})
export class AdminModule { }
