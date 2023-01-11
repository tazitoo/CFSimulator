import { Component, OnInit } from '@angular/core';
import { FeatureSuggestionState } from 'src/app/state/feature-suggestion.state';
import { SuggestionListController } from './controller/suggestion-list.controller';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.scss']
})
export class SuggestionListComponent implements OnInit {

  // controller reference
  public suggestionListController: SuggestionListController | null = null;

  constructor( public featureSuggestionState: FeatureSuggestionState ) { 

    this.suggestionListController = new SuggestionListController( this.featureSuggestionState );

  }

  ngOnInit(): void {}

}
