// 所有组件的入口

import Button from '@/packages/Button/button.vue';
import Icon from '@/packages/Icon/icon.vue';
import ButtonGroup from '@/packages/Button/button-group.vue';
import Row from '@/packages/Layout/row.vue';
import Col from '@/packages/Layout/col.vue';
import Aside from '@/packages/Container/aside.vue';
import Container from '@/packages/Container/container.vue';
import Footer from '@/packages/Container/footer.vue';
import Header from '@/packages/Container/header.vue';
import Main from '@/packages/Container/main.vue';
import Input from '@/packages/Input/input.vue';
import Upload from '@/packages/Upload/upload.vue';
import Progress from '@/packages/Progress/progress.vue';

const install = (Vue) => {
    Vue.component(Button.name, Button);
    Vue.component(Icon.name, Icon);
    Vue.component(ButtonGroup.name, ButtonGroup);
    Vue.component(Row.name, Row);
    Vue.component(Col.name, Col);
    Vue.component(Aside.name, Aside);
    Vue.component(Container.name, Container);
    Vue.component(Footer.name, Footer);
    Vue.component(Header.name, Header);
    Vue.component(Main.name, Main);
    Vue.component(Input.name, Input);
    Vue.component(Upload.name, Upload);
    Vue.component(Progress.name, Progress);
}

if(typeof window.Vue != 'undefined') {
    install(Vue);
}

export default {
    install
}