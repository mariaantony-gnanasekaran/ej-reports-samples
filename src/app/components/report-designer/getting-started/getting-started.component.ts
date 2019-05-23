import { Component } from '@angular/core';

@Component({
  selector: 'ej-sample',
  templateUrl: './getting.component.html',
  styleUrls: ['./getting.component.css']
})
export class ReportDesignerGettingStarted {
  public serviceUrl: string;  
  public reportPath: string;

    constructor() {
        this.serviceUrl = "https://reports.syncfusion.com/demos/services/api/SamplesReportViewer";
        this.reportPath = 'sales-order-detail';
    }
}
