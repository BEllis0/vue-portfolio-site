import { shallowMount } from '@vue/test-utils'
import HomeTestimonials from '../../../src/components/Home/HomeTestimonials.vue';

describe('Home Testimonials section', () => {
  it('renders properly', () => {
    const testimonialsSection = shallowMount(HomeTestimonials, {
        stubs: ['router-link']
    });
    expect(testimonialsSection.exists()).toBeTruthy();
  });
});