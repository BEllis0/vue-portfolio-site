import { shallowMount } from '@vue/test-utils'
import AppsList from '../../../src/components/Web_Applications/AppsList.vue';

describe('Apps List', () => {
  it('renders properly', () => {
    const appsList = shallowMount(AppsList, {
      stubs: ['router-link']
    });
    expect(appsList.exists()).toBeTruthy();
  });
});