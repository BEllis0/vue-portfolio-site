import { shallowMount } from '@vue/test-utils'
import AppsSidebar from '../../../src/components/Web_Applications/AppsSidebar.vue';

describe('Apps Sidebar', () => {
  it('renders properly', () => {
    const appsSidebar = shallowMount(AppsSidebar, {
      stubs: ['router-link']
    });
    expect(appsSidebar.exists()).toBeTruthy();
  });
});