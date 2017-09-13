import { CarComponent } from './car/car.component';
import { AdminComponent } from './admin.component';
export const AdminRoutes = [
	{
		path: '',
		component: AdminComponent,
		children: [
			{ path: '', redirectTo: 'car', pathMatch: 'full' },
			{ path: 'car', component: CarComponent },
		
		]
	}
];
