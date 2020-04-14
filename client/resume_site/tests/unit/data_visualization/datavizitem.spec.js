import { shallowMount } from '@vue/test-utils'
import DataVisualsItem from '../../../src/components/Data_Visualizations/DataVisualsItem.vue';

describe('Data Viz Item', () => {
  it('renders properly', () => {
    const dataVizItem = shallowMount(DataVisualsItem, {
      stubs: ['router-link'],
      propsData: {
          visual: {
                id: 1,
                name: "Metro Denver Housing Resource Finder",
                url_link: 'https://public.tableau.com/profile/brandon3955#!/vizhome/FindanOrganization/Dashboard1',
                anchor_link: 'resource_finder',
                details: `An interface used by the Close to Home Campaign to display housing resources in Metro Denver. 
                        Data collected from organization database queries and internet research. 
                        Formatted and organized with Python. Includes filtering by county, shelter type and service population.`,
                viz: {id: 4220, url: 'https://res.cloudinary.com/btdigital/image/upload/v1586810704/data-viz-housing-resource.jpg', alt: "An interface used by the Close to Home Campaign to display housing resources in Metro Denver."}
          }
      }
    });
    expect(dataVizItem.exists()).toBeTruthy();
  });
});