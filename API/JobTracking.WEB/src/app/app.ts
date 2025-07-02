import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: '../../src/app/pages/dashboard/dashboard.component.html',
  styleUrl: './app.css'
})
export class App {
deleteJobApplication(arg0: any) {
throw new Error('Method not implemented.');
}
addJobApplication(arg0: string,arg1: string,arg2: string) {
throw new Error('Method not implemented.');
}
  protected title = 'JobTracking.WEB';
}

export { Component };
