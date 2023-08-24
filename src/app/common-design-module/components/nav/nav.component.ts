import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthServiceService } from 'src/app/auth/auth-service.service';

@Component({
  selector: 'navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(private auth: AuthServiceService) {}

  items: MenuItem[];

  navItems: any = [
    {
      name: 'Dashboard',
      NavigationLink: 'dashboard',
      ActiveIcon:
        'https://stage.blendedsense.com/img/homedashboard-active.fca20bbd.svg',
      InactiveIcon:
        'https://stage.blendedsense.com/img/homedashboard.0a5d5e8f.svg',
    },
    {
      name: 'Projects',
      NavigationLink: 'projects',
      ActiveIcon:
        'https://stage.blendedsense.com/img/businesses-new-active.5cca70e2.svg',
      InactiveIcon:
        'https://stage.blendedsense.com/img/businesses-new.34ab3557.svg',
    },
    {
      name: 'Sweeps',
      NavigationLink: 'sweeps',
      ActiveIcon:
        'https://stage.blendedsense.com/img/calendar-active.059bf638.svg',
      InactiveIcon: 'https://stage.blendedsense.com/img/calendar.ca9aa29c.svg',
    },
    {
      name: 'User_management',
      NavigationLink: 'user_management',
      ActiveIcon:
        'https://stage.blendedsense.com/img/usersIcon-active.cd849ac6.svg',
      InactiveIcon: 'https://stage.blendedsense.com/img/usersIcon.76e903b7.svg',
    },
  ];

  sidebarVisible: boolean = false;
  openSideBar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  closeSideBar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Profile',
        command: () => {
          ('clicked Profile');
        },
      },
      {
        label: 'Preferences',
        command: () => {
          ('clicked Preference');
        },
      },
      {
        label: 'Logout',
        command: () => {
          this.auth.Logout();
        },
      },
    ];
  }
}
