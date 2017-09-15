import { AdminManageComponent } from './admin-manage/admin-manage.component';

import { AdminComponent } from './admin.component';
export const AdminRoutes = [
	{
		path: '',
		component: AdminComponent,
		children: [
			{ path: '', redirectTo: 'car', pathMatch: 'full' },
			{ path: 'admin', component: AdminManageComponent },

		]
	}
];
