import {Page} from 'ionic-framework/ionic';
import {forwardRef} from 'angular2/core';
import * as helpers from '../../../helpers';

@Page({
    templateUrl: './build/pages/lists/headers/template.html',
    directives: [forwardRef(() => helpers.AndroidAttribute)]
})
export class HeadersPage {
    constructor() {

    }
}
