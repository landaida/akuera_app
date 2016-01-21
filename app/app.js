import {App, Platform, Config} from 'ionic/ionic';
// import {HomePage} from './pages/home/home';
import {BasicPage} from './pages/menu/menu-home';

@App({
  template: `
    <ion-nav [root]="root"></ion-nav>
  `,
  // Check out the config API docs for more info
  // http://ionicframework.com/docs/v2/api/config/Config/
  config: {}

})
export class MyApp {
  constructor(platform: Platform) {
    this.platform = platform;
    this.initializeApp();
    this.root = BasicPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('Platform ready');
    });
  }
}
