import { shallowMount } from '@vue/test-utils'
import HomeContact from '../../../src/components/Home/HomeContact.vue';

describe('Home Contact section', () => {
  it('renders properly', () => {
    const contactSection = shallowMount(HomeContact, {
        stubs: ['router-link']
    });
    expect(contactSection.exists()).toBeTruthy();
  });
});