import { shallowMount } from '@vue/test-utils'; // Vue提供的快速测试方法
import { expect } from 'chai';

import Carsouel from '@/packages/Carsouel/carsouel.vue';
import CarsouelItem from '@/packages/Carsouel/carsouel-item.vue';
import Button from '@/packages/Button/button.vue';
import Icon from '@/packages/Icon/icon.vue';

describe('carsouel.vue', () => {
    it('1.测试initaialIndex', () => {
        const wrapper = shallowMount(Carsouel, {
            attachToDocument: true,
            stubs: {

            },
            slots: {
                default: 'vee-button'
            },
            propsData: {

            }
        });
        expect().to.eq('')
    });
})