import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrentWeatherComponent } from './current-weather.component';

describe('CurrentWeatherComponent', () => {

  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [CurrentWeatherComponent]
    }).compileComponents();

  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
