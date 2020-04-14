import { shallowMount } from '@vue/test-utils'
import ContactOverlay from '../../../src/components/Global/ContactOverlay.vue';

describe('Contact Overlay', () => {
  it('renders properly', () => {
    const contactOverlay = shallowMount(ContactOverlay, {
        stubs: ['router-link', 'v-btn', 'v-overlay']
    });
    expect(contactOverlay.exists()).toBeTruthy();
  });
});