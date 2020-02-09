import { storiesOf } from '@storybook/angular';
import { LoaderComponent } from '~/shared/components/loader/loader.component';

storiesOf('Loader', module)
  .add('Default', () => ({
    component: LoaderComponent
  }))
  .add('With custom size', () => ({
    component: LoaderComponent,
    props: {
      width: 32,
      height: 32
    }
  }));
