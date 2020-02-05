import { Component, Input } from '@angular/core';

@Component({
  selector: 'wn-loader',
  templateUrl: './loader.component.html'
})
export class LoaderComponent {

  @Input()
  public width = 135;

  @Input()
  public height = 140;

}
