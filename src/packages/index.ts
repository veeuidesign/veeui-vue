
import { App } from 'vue'
import Button from '@/packages/Button/button.vue';
import ButtonGroup from '@/packages/Button/button-group.vue';
import Icon from '@/packages/Icon/icon.vue';
import Row from '@/packages/Layout/row.vue';
import Col from '@/packages/Layout/col.vue';
import Input from '@/packages/Input/input.vue';
import Aside from '@/packages/Container/aside.vue';
import Container from '@/packages/Container/container.vue';
import Footer from '@/packages/Container/footer.vue';
import Header from '@/packages/Container/header.vue';
import Main from '@/packages/Container/main.vue';
import Popover from '@/packages/Popover/popover.vue';

function install(app: App) {
    app.component(Button.name, Button);
    app.component(ButtonGroup.name, ButtonGroup);
    app.component(Icon.name, Icon);
    app.component(Row.name, Row);
    app.component(Col.name, Col);
    app.component(Input.name, Input);
    app.component(Aside.name, Aside);
    app.component(Container.name, Container);
    app.component(Footer.name, Footer);
    app.component(Header.name, Header);
    app.component(Main.name, Main);
    app.component(Popover.name, Popover);
}

export default {
    install
}