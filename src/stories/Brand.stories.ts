import { storiesOf } from '@storybook/angular';
import { BrandComponent } from 'src/app/shared/components/brand/brand.component';

storiesOf('Brand', module)
  .add('Default', () => ({
    component: BrandComponent

  }))
  .add('With custom size', () => ({
    component: BrandComponent,
    props: {
      width: 300,
      height: 160
    }
  }));
