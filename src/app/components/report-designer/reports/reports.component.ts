import { Component } from '@angular/core';

@Component({
  selector: 'ej-sample',
  templateUrl: './reports.component.html',
  styleUrls: ['./app.component.css']
})
export class ReportDesignerReports {
  serviceURL = "https://reports.syncfusion.com/demos/services/api/SamplesReportViewer";
  reportPath = "mail-merge";
}
