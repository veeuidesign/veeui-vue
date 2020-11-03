
import { App } from 'vue'
import Button from '@/packages/Button/button.vue';
import ButtonGroup from '@/packages/Button/button-group.vue';
import Icon from '@/packages/Icon/icon.vue';
import Row from '@/packages/Layout/row.vue';
import Col from '@/packages/Layout/col.vue';

function install(app: App) {
    app.component(Button.name, Button);
    app.component(ButtonGroup.name, ButtonGroup);
    app.component(Icon.name, Icon);
    app.component(Row.name, Row);
    app.component(Col.name, Col);
}

export default {
    install
}