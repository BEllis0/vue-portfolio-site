import { shallowMount } from '@vue/test-utils'
import HomeClients from '../../../src/components/Home/HomeClients.vue';

describe('Home Clients section', () => {
  it('renders properly', () => {
    const clientsSection = shallowMount(HomeClients, {
        stubs: ['router-link']
    });
    expect(clientsSection.exists()).toBeTruthy();
  });
});