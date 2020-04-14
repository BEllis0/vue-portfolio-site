import { shallowMount } from '@vue/test-utils'
import WebDesignsPage from '../../../src/components/Web_Designs/WebDesignsPage.vue';

describe('Web Design Page', () => {
  it('renders properly', () => {
    const designsPage = shallowMount(WebDesignsPage, {
      stubs: ['router-link']
    });
    expect(designsPage.exists()).toBeTruthy();
  });
});