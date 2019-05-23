import { BrowserModule } from '@angular/platform-browser';
import { Type, ModuleWithProviders, NgModule } from '@angular/core';
import { EJ_REPORTVIEWER_COMPONENTS } from '@syncfusion/reporting-angular/src/ej/reportviewer.component';
import { EJ_REPORTDESIGNER_COMPONENTS } from '@syncfusion/reporting-angular/src/ej/reportdesigner.component';
import { Routes, RouterModule } from '@angular/router';
import { ReportViewerGettingStarted } from '../components/report-viewer/getting-started/getting-started.component';
import { ReportViewerOverView } from '../components/report-viewer/overview/overview.component';
import { ReportViewerReports } from '../components/report-viewer/reports/reports.component';
import { ReportDesignerGettingStarted } from '../components/report-designer/getting-started/getting-started.component';
import { ReportDesignerOverView } from '../components/report-designer/overview/overview.component';
import { ReportDesignerReports } from '../components/report-designer/reports/reports.component';
const components: any[] | Type<any> | ModuleWithProviders<{}> = [
  EJ_REPORTVIEWER_COMPONENTS,
  EJ_REPORTDESIGNER_COMPONENTS,
  ReportViewerGettingStarted,
  ReportViewerOverView,
  ReportViewerReports,
  ReportDesignerGettingStarted,
  ReportDesignerOverView,
  ReportDesignerReports
];
const routes: Routes = [
  { path: '', redirectTo: 'report-viewer/getting-started', pathMatch: 'full' },
  { path: 'report-viewer/getting-started', component: ReportViewerGettingStarted },
  { path: 'report-viewer/overview', component: ReportViewerOverView },
  { path: 'report-viewer/reports', component: ReportViewerReports },
  { path: 'report-designer/getting-started', component: ReportDesignerGettingStarted },
  { path: 'report-designer/overview', component: ReportDesignerOverView },
  { path: 'report-designer/reports', component: ReportDesignerReports },
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
