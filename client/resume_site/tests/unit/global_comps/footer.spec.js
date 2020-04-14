import { shallowMount } from '@vue/test-utils'
import Footer from '../../../src/components/Global/Footer.vue';

describe('Footer', () => {
  it('renders properly', () => {
    const footer = shallowMount(Footer, {
        stubs: ['router-link', 'v-menu', 'v-list', 'v-list-item', 'v-list-item-title']
    });
    expect(footer.exists()).toBeTruthy();
  });
});