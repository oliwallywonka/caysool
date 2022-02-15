import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styles: [
  ]
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input()
  response = {
    totalPages: 0,
    currentPage: 0,
    itemCount: 0
  };

  @Output() pageEvent = new EventEmitter<number>();

  pageController = {
    prev_page: 0,
    last_page: 0,
    next_page: 0
  }
  constructor(
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    this.pageController = {
      prev_page: (changes.response.currentValue.currentPage -1) <= 0 ? null : changes.response.currentValue.currentPage -1,
      last_page: changes.response.currentValue.totalPages,
      next_page: (changes.response.currentValue.currentPage +1) > changes.response.currentValue.totalPages ? null: changes.response.currentValue.currentPage +1
    }
  }
  ngOnInit(): void {
  }

  clickPagination(page){
    this.pageEvent.emit(page);
  }

}
