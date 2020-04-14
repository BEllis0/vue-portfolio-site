import { shallowMount } from '@vue/test-utils'
import DesignsSidebar from '../../../src/components/Web_Designs/DesignsSidebar.vue';

describe('Designs Sidebar', () => {
  it('renders properly', () => {
    const designsSidebar = shallowMount(DesignsSidebar, {
      stubs: ['router-link']
    });
    expect(designsSidebar.exists()).toBeTruthy();
  });
});