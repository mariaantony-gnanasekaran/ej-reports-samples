import { Component } from '@angular/core';

@Component({
  selector: 'ej-sample',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./app.component.css']
})
export class ReportViewerGettingStarted {
  public serviceUrl: string;  
  public reportPath: string;

    constructor() {
        this.serviceUrl = "https://reports.syncfusion.com/demos/services/api/SamplesReportViewer";
        this.reportPath = 'sales-order-detail';
    }
}
