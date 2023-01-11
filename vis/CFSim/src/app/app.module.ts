import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainViewComponent } from './views/main-view/main-view.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material/material';
import { DatasetOverviewComponent } from './components/dataset-overview/dataset-overview.component';
import { ParameterSelectorComponent } from './components/parameter-selector/parameter-selector.component';
import { CounterfactualListComponent } from './components/counterfactual-list/counterfactual-list.component';
import { CounterfactualInstanceComponent } from './components/counterfactual-instance/counterfactual-instance.component';
import { DataLoaderDialogComponent } from './dialogs/data-loader-dialog/data-loader-dialog.component';
import { ActionListComponent } from './components/action-list/action-list.component';
import { ActionInstanceComponent } from './components/action-instance/action-instance.component';
import { ActionBuilderDialogComponent } from './dialogs/action-builder-dialog/action-builder-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CounterfactualFeatureInstanceComponent } from './components/counterfactual-feature-instance/counterfactual-feature-instance.component';
import { SelectorHistogramComponent } from './components/charts/selector-histogram/selector-histogram.component';
import { StaticHistogramComponent } from './components/charts/static-histogram/static-histogram.component';
import { CounterfactualDetailsComponent } from './components/counterfactual-details/counterfactual-details.component';
import { SuggestionListComponent } from './components/suggestion-list/suggestion-list.component';
import { SuggestionInstanceComponent } from './components/suggestion-instance/suggestion-instance.component';
import { FilterManagerComponent } from './components/filter-manager/filter-manager.component';
import { ExplanationOverviewComponent } from './components/explanation-overview/explanation-overview.component';
import { StaticScatterplotComponent } from './components/charts/static-scatterplot/static-scatterplot.component';
import { ExplanationMetricsListComponent } from './components/explanation-metrics-list/explanation-metrics-list.component';
import { CounterfactualsMetricsInstanceComponent } from './components/counterfactuals-metrics-instance/counterfactuals-metrics-instance.component';
import { StaticLineComponent } from './components/charts/static-line/static-line.component';
import { StaticGlScatterplotComponent } from './components/charts/static-gl-scatterplot/static-gl-scatterplot.component';
import { FilterKnobsComponent } from './components/filter-knobs/filter-knobs.component';
import { FeatureVariationComponent } from './components/feature-variation/feature-variation.component';
import { StaticBarplotComponent } from './components/charts/static-barplot/static-barplot.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    ToolbarComponent,
    DatasetOverviewComponent,
    ParameterSelectorComponent,
    CounterfactualListComponent,
    CounterfactualInstanceComponent,
    DataLoaderDialogComponent,
    ActionListComponent,
    ActionInstanceComponent,
    ActionBuilderDialogComponent,
    CounterfactualFeatureInstanceComponent,
    SelectorHistogramComponent,
    StaticHistogramComponent,
    CounterfactualDetailsComponent,
    SuggestionListComponent,
    SuggestionInstanceComponent,
    FilterManagerComponent,
    ExplanationOverviewComponent,
    StaticScatterplotComponent,
    ExplanationMetricsListComponent,
    CounterfactualsMetricsInstanceComponent,
    StaticLineComponent,
    StaticGlScatterplotComponent,
    FilterKnobsComponent,
    FeatureVariationComponent,
    StaticBarplotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
