import { Component, Input } from '@angular/core';

@Component({
  selector: 'wn-brand',
  templateUrl: './brand.component.html'
})
export class BrandComponent {

  @Input()
  public width = 165;

  @Input()
  public height = 24;

}
