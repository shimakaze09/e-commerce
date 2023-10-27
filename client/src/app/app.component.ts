import {Component, OnInit} from '@angular/core';
import {BreadcrumbService} from "xng-breadcrumb";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Skinet';

  constructor(private bc: BreadcrumbService) {
  }

  ngOnInit(): void {
    this.bc.breadcrumbs$.subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }
}
