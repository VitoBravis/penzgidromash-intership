import Barba from 'barba.js';
import { commonComponents } from '../../common/js/commonComponents';

Barba.BaseView.extend({
    namespace: 'index',
    onEnter() {

    },
    async onEnterCompleted() {
        await commonComponents.preloader.preloading;
        commonComponents.header.update();
        objectFitPolyfill();
    },
    onLeave() {

    },
    onLeaveCompleted() {

    },
}).init();
