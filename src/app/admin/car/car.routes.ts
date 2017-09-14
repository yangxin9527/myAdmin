import { CarRouteComponent } from './car-route/car-route.component';
import { CarDriverComponent } from './car-driver/car-driver.component';
import { CarCostComponent } from './car-cost/car-cost.component';
import { CarLedgerComponent } from './car-ledger/car-ledger.component';
import { CarComponent } from './car.component';
export const CarRoutes = [
	{
		path: '',
		component: CarComponent,
		children: [
			{ path: '', redirectTo: 'CarLedger', pathMatch: 'full' },
			{ path: 'CarLedger', component: CarLedgerComponent},
			{ path: 'CarDriver', component: CarDriverComponent},
			{ path: 'CarRoute', component: CarRouteComponent},
			{ path: 'CarCost', component: CarCostComponent}
		]
	}
];
