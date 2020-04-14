import { shallowMount } from '@vue/test-utils'
import DataVisualsPage from '../../../src/components/Data_Visualizations/DataVisualsPage.vue';

describe('Data Viz Page', () => {
  it('renders properly', () => {
    const dataVizPage = shallowMount(DataVisualsPage, {
      stubs: ['router-link']
    });
    expect(dataVizPage.exists()).toBeTruthy();
  });
});