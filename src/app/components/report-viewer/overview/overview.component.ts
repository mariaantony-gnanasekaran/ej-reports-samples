import { Component } from '@angular/core';

@Component({
  selector: 'ej-sample',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class ReportViewerOverView {
  serviceURL = "https://reports.syncfusion.com/demos/services/api/SamplesReportViewer";
  reportPath = "mail-merge";
}