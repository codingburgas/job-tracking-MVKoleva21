import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
<<<<<<< HEAD
  templateUrl: '../app/components/job-application/job-application-component.html',
  styleUrl: './app.css'
})
export class App {
=======
  templateUrl: '../../src/app/pages/dashboard/dashboard.component.html',
  styleUrl: './app.css'
})
export class App {
countByStatus(arg0: string) {
throw new Error('Method not implemented.');
}
jobs: any;
userName: any;
>>>>>>> d40806d57a250322488dfda7070bf9e4209c23f4
deleteJobApplication(arg0: any) {
throw new Error('Method not implemented.');
}
addJobApplication(arg0: string,arg1: string,arg2: string) {
throw new Error('Method not implemented.');
}
  protected title = 'JobTracking.WEB';
}

export { Component };
