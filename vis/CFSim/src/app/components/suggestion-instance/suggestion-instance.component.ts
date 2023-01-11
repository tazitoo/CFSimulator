import { Component, Input, OnInit } from '@angular/core';
import { FeatureSuggestion } from 'src/app/model/feature-suggestion.model';
import { FeatureSuggestionState } from 'src/app/state/feature-suggestion.state';
import { SuggestionInstanceController } from './controller/suggestion-instance.controller';

@Component({
  selector: 'app-suggestion-instance',
  templateUrl: './suggestion-instance.component.html',
  styleUrls: ['./suggestion-instance.component.scss']
})
export class SuggestionInstanceComponent implements OnInit {

  // controller reference
  public suggestionInstanceController: SuggestionInstanceController | null = null;

  // input variables
  @Input('featuresuggestion') featureSuggestion!: FeatureSuggestion;

  constructor( public featureSuggestionState: FeatureSuggestionState ) {

    this.suggestionInstanceController = new SuggestionInstanceController( this. featureSuggestionState );

  }

  ngOnInit(): void {}

}
