import { shallowMount } from '@vue/test-utils'
import WebAppsPage from '../../../src/components/Web_Applications/WebAppsPage.vue';

describe('Web Apps Page', () => {
  it('renders properly', () => {
    const webAppsPage = shallowMount(WebAppsPage, {
      stubs: ['router-link']
    });
    expect(webAppsPage.exists()).toBeTruthy();
  });
});