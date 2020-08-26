import Aurelia, { RouterConfiguration } from 'aurelia';
import { MyApp } from './my-app';

import '!style-loader!css-loader!prismjs/themes/prism.css';

Aurelia
.register(RouterConfiguration)  
.app(MyApp)
  .start();

