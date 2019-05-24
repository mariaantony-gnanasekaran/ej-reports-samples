import { BrowserModule } from '@angular/platform-browser';
import { Type, ModuleWithProviders, NgModule } from '@angular/core';
import { EJ_REPORTVIEWER_COMPONENTS } from '@syncfusion/reporting-angular/src/ej/reportviewer.component';
import { EJ_REPORTDESIGNER_COMPONENTS } from '@syncfusion/reporting-angular/src/ej/reportdesigner.component';
import { Routes, RouterModule } from '@angular/router';
import { ReportViewerGettingStartedComponent } from '../components/report-viewer/getting-started/getting-started.component';
import { ReportViewerOverViewComponent } from '../components/report-viewer/overview/overview.component';
import { ReportViewerReportsComponent } from '../components/report-viewer/reports/reports.component';
import { ReportDesignerGettingStartedComponent } from '../components/report-designer/getting-started/getting-started.component';
import { ReportDesignerOverViewComponent } from '../components/report-designer/overview/overview.component';
import { ReportDesignerReportsComponent } from '../components/report-designer/reports/reports.component';
const components: any[] | Type<any> | ModuleWithProviders<{}> = [
  EJ_REPORTVIEWER_COMPONENTS,
  EJ_REPORTDESIGNER_COMPONENTS,
  ReportViewerGettingStartedComponent,
  ReportViewerOverViewComponent,
  ReportViewerReportsComponent,
  ReportDesignerGettingStartedComponent,
  ReportDesignerOverViewComponent,
  ReportDesignerReportsComponent
];
const routes: Routes = [
  { path: '', redirectTo: 'report-viewer/getting-started', pathMatch: 'full' },
  { path: 'report-viewer/getting-started', component: ReportViewerGettingStartedComponent },
  { path: 'report-viewer/overview', component: ReportViewerOverViewComponent },
  { path: 'report-viewer/reports', component: ReportViewerReportsComponent },
  { path: 'report-designer/getting-started', component: ReportDesignerGettingStartedComponent },
  { path: 'report-designer/overview', component: ReportDesignerOverViewComponent },
  { path: 'report-designer/reports', component: ReportDesignerReportsComponent },
  { path: '**', redirectTo: 'report-viewer/getting-started' }
];
@NgModule({
  declarations: components,
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule],
})

export class AppRouterModule { }
