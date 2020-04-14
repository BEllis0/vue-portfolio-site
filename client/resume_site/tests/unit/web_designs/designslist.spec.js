import { shallowMount } from '@vue/test-utils'
import DesignsList from '../../../src/components/Web_Designs/DesignsList.vue';

describe('Designs List', () => {
  it('renders properly', () => {
    const designsList = shallowMount(DesignsList, {
      stubs: ['router-link']
    });
    expect(designsList.exists()).toBeTruthy();
  });
});