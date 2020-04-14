import { shallowMount } from '@vue/test-utils'
import HomeBio from '../../../src/components/Home/HomeBio.vue';

describe('Home Bio Section', () => {
  it('renders properly', () => {
    const Bio = shallowMount(HomeBio, {
      stubs: ['router-link']
    });
    expect(Bio.exists()).toBeTruthy();
  });
});