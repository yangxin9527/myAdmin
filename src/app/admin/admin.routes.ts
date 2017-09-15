

import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
export const AdminRoutes = [
	{
		path: '',
		component: AdminComponent,
		children: [

			{ path: '', redirectTo: 'home', pathMatch: 'full' },
			{ path: 'home', component:HomeComponent},
			{ path: 'car', loadChildren: './car/car.module#CarModule'}

		]
	}
];
