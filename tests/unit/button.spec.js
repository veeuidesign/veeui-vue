import { shallowMount } from '@vue/test-utils'; // Vue提供的快速测试方法
import { expect } from 'chai';

import Button from '@/packages/Button/button.vue';
import Icon from '@/packages/Icon/icon.vue';

describe('button.vue', () => {
    it('1.测试button能否正常显示slot里的内容', () => {
        const wrapper = shallowMount(Button, {
            slots: {
                default: 'vee-button'
            }
        });
        expect(wrapper.text()).to.eq('vee-button')
    });
    it('2.测试icon传入是否能正常显示', () => {
        const wrapper = shallowMount(Button, {
            stubs: {
                'vee-icon': Icon
            },
            propsData: {
                icon: 'search'
            }
        });
        expect(wrapper.find('use').attributes('href')).to.eq('#iconsearch')
    });
    it('3.测试loading时按钮是禁用状态', () => {
        const wrapper = shallowMount(Button, {
            stubs: {
                'vee-icon': Icon
            },
            propsData: {
                loading: true
            }
        });
        expect(wrapper.find('use').attributes('href')).to.eq('#iconloading');
        expect(wrapper.find('button').attributes('disabled')).to.eq('disabled');
    });
    it('4.测试按钮能否正常点击', () => {
        const wrapper = shallowMount(Button, {
            stubs: [
                'vee-icon'
            ]
        });
        wrapper.find('button').trigger('click');
        expect(wrapper.emitted('click').length).to.eq(1);
    });
    it('5.测试按钮传入position是否正常显示', () => {
        const wrapper = shallowMount(Button, {
            attachToDocument: true, // 将组件挂载到浏览器上
            stubs: {
                'vee-icon': Icon
            },
            slots: {
                default: 'vee-ui'
            },  
            propsData: {
                iconPosition: 'left',
                icon: 'search'
            }
        });
        let ele = wrapper.vm.$el.querySelector('span');
        expect(getComputedStyle(ele).order).to.eq('2');
        wrapper.setProps({
            iconPosition: 'right'
        });
        return wrapper.vm.$nextTick().then(()=>{
            expect(getComputedStyle(ele).order).to.eq('1');
        })
    });
})