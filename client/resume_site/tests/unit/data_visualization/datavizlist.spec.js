import { shallowMount } from '@vue/test-utils'
import DataVisualsList from '../../../src/components/Data_Visualizations/DataVisualsList.vue';

describe('Data Viz List', () => {
  it('renders properly', () => {
    const dataVizList = shallowMount(DataVisualsList, {
      stubs: ['router-link']
    });
    expect(dataVizList.exists()).toBeTruthy();
  });
});