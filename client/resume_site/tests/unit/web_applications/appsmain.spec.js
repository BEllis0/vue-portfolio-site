import { shallowMount } from '@vue/test-utils'
import AppsMain from '../../../src/components/Web_Applications/AppsMain.vue';

describe('Home Banner', () => {
  it('renders properly', () => {
    const appsMain = shallowMount(AppsMain, {
      stubs: ['router-link']
    });
    expect(appsMain.exists()).toBeTruthy();
  });
});