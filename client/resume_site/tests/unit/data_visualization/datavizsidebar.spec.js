import { shallowMount } from '@vue/test-utils'
import DataVisualsSidebar from '../../../src/components/Data_Visualizations/DataVisualsSidebar.vue';

describe('Data Viz Sidebar', () => {
  it('renders properly', () => {
    const dataVizSidebar = shallowMount(DataVisualsSidebar, {
      stubs: ['router-link']
    });
    expect(dataVizSidebar.exists()).toBeTruthy();
  });
});