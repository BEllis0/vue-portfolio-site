import { shallowMount } from '@vue/test-utils'
import HomePage from '../../../src/components/Home/HomePage.vue';

describe('Home Page', () => {
  it('renders properly', () => {
    const homePage = shallowMount(HomePage, {
        stubs: ['router-link']
    });
    expect(homePage.exists()).toBeTruthy();
  });
});