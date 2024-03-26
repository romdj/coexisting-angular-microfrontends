import { Component, OnInit } from '@angular/core';
import { registerApplication, start } from 'single-spa';

interface Application {
  name: string;
  appURL: string;
  route: string;
}

@Component({
  selector: 'navbar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FGTB Navbar';
  applications: Application[] = []; // Add this line

  ngOnInit() {
    fetch('applications.json')
      .then(res => res.json())
      .then(apps => {
        this.applications = apps; // Store fetched apps
        apps.forEach(app => {
          registerApplication({
            name: app.name,
            app: () => import(app.appURL),
            activeWhen: app.route
          });
        });

        start(); // Start single-spa
      })
      .catch(error => {
        console.error("Failed to register micro frontends", error);
      });
  }
}
