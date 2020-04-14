import { shallowMount } from '@vue/test-utils'
import HomeProjects from '../../../src/components/Home/HomeProjects.vue';

describe('Home Projects section', () => {
  it('renders properly', () => {
    const projectsSection = shallowMount(HomeProjects, {
        stubs: ['router-link']
    });
    expect(projectsSection.exists()).toBeTruthy();
  });
});