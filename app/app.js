import {App, Platform, Config} from 'ionic/ionic';
 // import {HomePage} from './pages/home/home';
//import {BasicPage} from './pages/menu/menu-home';
 // import {BasicPage} from './pages/menu/menu-home';
 import * as helpers from './helpers';



 import {App, IonicApp, Platform, ActionSheet, } from 'ionic-framework/ionic';
import {Page, Config, Events} from 'ionic-framework/ionic';
import {PageOne, PageTwo, PageThree} from './pages/menu/menu-home';
import {TabIconTextPage, IconTextPage} from './pages/tabs/tabs';
import {HeadersPage, HeadersPage} from './pages/lists/lists';
import * as actionSheets from './action-sheets/action-sheets';
import {NavigationDetailsPage, BasicPage} from './pages/navigation/navigation';


@App({
  templateUrl: './build/app.html',
  // Check out the config API docs for more info
  // http://ionicframework.com/docs/v2/api/config/Config/
  config: {
    production: true,
    platforms: {
      android: {
        activator: 'ripple',
        backButtonIcon: 'md-arrow-back'
      }
    }
  }

})
export class MyApp {
  rootPage: any;
  androidAttribute: any;
  constructor(app: IonicApp, platform: Platform, config: Config) {

    this.app = app;
    this.platform = platform;
    this.config = config;
    this.pages = [
      { title: 'Home', component: PageOne },
      { title: 'Friends', component: PageTwo },
      { title: 'Events', component: PageThree },
      { title: 'Tabs', component: TabIconTextPage },
      { title: 'Tabs Text', component: IconTextPage },
      { title: 'List headers', component: HeadersPage },
      { title: 'Navigation', component: BasicPage },
    ];

    this.initializeApp();
    // this.root = BasicPage;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      let nav = this.app.getComponent('nav');
      nav.push(PageOne);
      console.log('Platform ready');
    });




  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    // debugger;
    this.app.getComponent('leftMenu').close();

    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    let nav = this.app.getComponent('nav');
    nav.push(page.component, { name: page.title });
  }
}
