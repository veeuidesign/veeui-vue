import { shallowMount } from '@vue/test-utils'; // Vue提供的快速测试方法
import { expect } from 'chai';

import Row from '@/packages/Layout/row.vue';
import Col from '@/packages/Layout/col.vue';

describe('row.vue', () => {
    it('1.测试gutter', async () => {
        let wrapper = shallowMount(Row, {
            attachToDocument: true,
            stubs: {
                'vee-col': Col
            },
            slots: {
                default: '<vee-col></vee-col>'
            },
            propsData: {
                gutter: 20
            }
        });
        expect(getComputedStyle(wrapper.vm.$el).marginLeft).to.eq('-10px');
        expect(getComputedStyle(wrapper.vm.$el).marginRight).to.eq('-10px');

        await wrapper.vm.$nextTick();

        const col = wrapper.vm.$el.querySelector('.vee-col');
        expect(getComputedStyle(col).paddingLeft).to.eq('10px');
        expect(getComputedStyle(col).paddingRight).to.eq('10px');
    });
    it('2.测试justify属性', async () => {
        let wrapper = shallowMount(Row, {
            attachToDocument: true,
            stubs: {
                'vee-col': Col
            },
            slots: {
                default: '<vee-col></vee-col>'
            },
            propsData: {
                justify: 'start'
            }
        });

        expect(getComputedStyle(wrapper.vm.$el).justifyContent).to.eq('flex-start');

        wrapper.setProps({justify:'end'});
        await wrapper.vm.$nextTick();
        expect(getComputedStyle(wrapper.vm.$el).justifyContent).to.eq('flex-end');
        
        wrapper.setProps({justify:'center'});
        await wrapper.vm.$nextTick();
        expect(getComputedStyle(wrapper.vm.$el).justifyContent).to.eq('center');
        
        wrapper.setProps({justify:'space-around'});
        await wrapper.vm.$nextTick();
        expect(getComputedStyle(wrapper.vm.$el).justifyContent).to.eq('space-around');
        
        wrapper.setProps({justify:'space-between'});
        await wrapper.vm.$nextTick();
        expect(getComputedStyle(wrapper.vm.$el).justifyContent).to.eq('space-between');
    });
})