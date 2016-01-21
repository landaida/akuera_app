import {App, IonicApp, Page} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import * as helpers from '../../helpers';

@Page({
  templateUrl: './build/pages/menu/menu-home.html',
  directives: [forwardRef(() => helpers.AndroidAttribute)]
})
export class BasicPage{
  constructor(app: IonicApp) {
    this.app = app;
    //this.app.getComponent('leftMenu').enable(true);
  }
}

@Page({
  templateUrl: './build/pages/menu/menu-home.html',
  directives: [forwardRef(() => helpers.AndroidAttribute)]
})
export class PageOne{
  constructor() {
  }
}

@Page({
  templateUrl: './build/pages/menu/menu-friends.html',
  directives: [forwardRef(() => helpers.AndroidAttribute)]
})
export class PageTwo{
}

@Page({
  templateUrl: './build/pages/menu/menu-events.html',
  directives: [forwardRef(() => helpers.AndroidAttribute)]
})
export class PageThree{
}
