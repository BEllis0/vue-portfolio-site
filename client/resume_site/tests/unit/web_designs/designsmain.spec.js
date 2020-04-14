import { shallowMount } from '@vue/test-utils'
import DesignsMain from '../../../src/components/Web_Designs/DesignsMain.vue';

describe('Designs Main section', () => {
  it('renders properly', () => {
    const designsMain = shallowMount(DesignsMain, {
      stubs: ['router-link']
    });
    expect(designsMain.exists()).toBeTruthy();
  });
});