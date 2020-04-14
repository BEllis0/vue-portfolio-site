import { shallowMount } from '@vue/test-utils'
import Navbar from '../../../src/components/Global/Navbar.vue';

describe('Navbar', () => {

    const nav = shallowMount(Navbar, {
        propsData: {
            page: 'Home',
            over: false,
            updateContact: function() {
                this.over = true
            }
        },
        stubs: ['router-link', 'v-menu', 'v-list', 'v-list-item', 'v-list-item-title']
    });

    it('renders properly', () => {
        expect(nav.exists()).toBeTruthy();
    });


  it('contact button triggers method', () => {
        //before click
        expect(nav.props().over).toBeFalsy();

        //target button
        let contactBtn = nav.find('.contact-link');
        // contactBtn.trigger('click');

        // expect(nav.props().over).toBeTruthy();
  });
});