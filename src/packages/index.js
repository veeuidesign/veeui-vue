// 所有组件的入口

import Button from '@/packages/Button/button.vue';
import Icon from '@/packages/Icon/icon.vue';
import ButtonGroup from '@/packages/Button/button-group.vue';
import Row from '@/packages/Layout/row.vue';
import Col from '@/packages/Layout/col.vue';


const install = (Vue) => {
    Vue.component(Button.name, Button);
    Vue.component(Icon.name, Icon);
    Vue.component(ButtonGroup.name, ButtonGroup);
    Vue.component(Row.name, Row);
    Vue.component(Col.name, Col);
}

if(typeof window.Vue != 'undefined') {
    install(Vue);
}

export default {
    install
}