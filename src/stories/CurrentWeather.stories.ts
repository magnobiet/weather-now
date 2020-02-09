import { moduleMetadata, storiesOf } from '@storybook/angular';
import { CurrentWeatherComponent } from '~/modules/home/components/current-weather/current-weather.component';
import { SharedModule } from '~/shared/shared.module';

storiesOf('Current Weather', module)
  .addDecorator(
    moduleMetadata({
      imports: [SharedModule]
    })
  )
  .add('Default', () => ({
    component: CurrentWeatherComponent,
    props: {
      location: 'Joinville, BR'
    }
  }))
  .add('Error', () => ({
    component: CurrentWeatherComponent,
    props: {
      location: 'Invalid name, IN'
    }
  }));
