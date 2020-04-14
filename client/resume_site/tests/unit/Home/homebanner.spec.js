import { shallowMount } from '@vue/test-utils'
import HomeBanner from '../../../src/components/Home/HomeBanner.vue';

describe('Home Banner', () => {
  it('renders properly', () => {
    const Banner = shallowMount(HomeBanner, {
      stubs: ['router-link']
    });
    expect(Banner.exists()).toBeTruthy();
  });
});
