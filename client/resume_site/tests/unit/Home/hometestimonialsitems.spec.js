import { shallowMount } from '@vue/test-utils'
import HomeTestimonialsItems from '../../../src/components/Home/HomeTestimonialsItems.vue';

describe('Home testimonial item', () => {
  it('renders properly', () => {
    const testimonialItem = shallowMount(HomeTestimonialsItems, {
        stubs: ['router-link']
    });
    expect(testimonialItem.exists()).toBeTruthy();
  });
});