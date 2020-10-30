
import { App } from 'vue'
import Button from '@/packages/Button/button.vue';
import ButtonGroup from '@/packages/Button/button-group.vue';
import Icon from '@/packages/Icon/icon.vue';

function install(app: App) {
    app.component(Button.name, Button);
    app.component(ButtonGroup.name, ButtonGroup);
    app.component(Icon.name, Icon);
}

export default {
    install
}