import { Component } from '@angular/core';

@Component({
  selector: 'wn-page-footer',
  templateUrl: './page-footer.component.html'
})
export class PageFooterComponent {

  public initialYear = 2020;
  public currentYear = new Date().getFullYear();

}
