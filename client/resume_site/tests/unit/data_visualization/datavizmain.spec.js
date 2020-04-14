import { shallowMount } from '@vue/test-utils'
import DataVisualsMain from '../../../src/components/Data_Visualizations/DataVisualsMain.vue';

describe('Data Viz Main Section', () => {
  it('renders properly', () => {
    const dataVizMain = shallowMount(DataVisualsMain, {
      stubs: ['router-link']
    });
    expect(dataVizMain.exists()).toBeTruthy();
  });
});