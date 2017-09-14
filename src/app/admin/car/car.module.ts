import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CarRoutes } from './car.routes';
import { CarComponent } from './car.component';
import { CarLedgerComponent } from './car-ledger/car-ledger.component';
import { CarDriverComponent } from './car-driver/car-driver.component';
import { CarRouteComponent } from './car-route/car-route.component';
import { CarCostComponent } from './car-cost/car-cost.component';
@NgModule({
    imports: [
        NgZorroAntdModule,
        RouterModule.forChild(CarRoutes)
    ],
    declarations: [
        CarComponent,
        CarLedgerComponent,
        CarDriverComponent,
        CarRouteComponent,
        CarCostComponent
    ],
    providers: []
})
export class CarModule { }
