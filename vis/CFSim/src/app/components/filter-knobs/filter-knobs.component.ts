import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-knobs',
  templateUrl: './filter-knobs.component.html',
  styleUrls: ['./filter-knobs.component.scss']
})
export class FilterKnobsComponent implements OnInit {

  // slider event
  @Output('filterschanged') filterschanged: EventEmitter<{'sparsity': number | null }> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}


}
