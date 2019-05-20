import { Component } from '@angular/core';

@Component({
  selector: 'ej-sample',
  templateUrl: './getting.component.html',
  styleUrls: ['./getting.component.css']
})
export class GettingStarted {
  serviceURL = "https://reports.syncfusion.com/demos/services/api/SamplesReportViewer";
  reportPath = "mail-merge";
}
