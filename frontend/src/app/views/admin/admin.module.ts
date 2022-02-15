import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/layouts/admin/admin.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { UserDropdownComponent } from './components/dropdowns/user-dropdown/user-dropdown.component';
import { FooterAdminComponent } from './components/footers/footer-admin/footer-admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderStatsComponent } from './components/headers/header-stats/header-stats.component';
import { NotificationDropdownComponent } from './components/dropdowns/notification-dropdown/notification-dropdown.component';
import { CardStatsComponent } from './components/cards/card-stats/card-stats.component';


@NgModule({
  declarations: [
    AdminComponent,
    AdminNavbarComponent,
    UserDropdownComponent,
    FooterAdminComponent,
    SidebarComponent,
    HeaderStatsComponent,
    CardStatsComponent,
    NotificationDropdownComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
