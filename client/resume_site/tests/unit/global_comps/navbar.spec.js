import { shallowMount } from '@vue/test-utils'
import Navbar from '../../../src/components/Global/Navbar.vue';

describe('Navbar', () => {

    it('renders properly', () => {
        const nav = shallowMount(Navbar, {
        propsData: {
            page: 'Home',
            over: false
        },
        stubs: ['router-link', 'v-menu', 'v-list', 'v-list-item', 'v-list-item-title']
        });

        expect(nav.exists()).toBeTruthy();
    });

  it('contact button triggers method', () => {
        const nav = shallowMount(Navbar, {
            propsData: {
                page: 'Home',
                over: false
            },
            stubs: ['router-link', 'v-menu', 'v-list', 'v-list-item', 'v-list-item-title']
        });

        const handleUpdate = function() {
            this.over = true
        };

        nav.setMethods({ updateContact: handleUpdate });

        let contactBtn = nav.find('.contact-link');
        console.log(contactBtn)
  });
});