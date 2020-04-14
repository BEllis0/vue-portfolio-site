import { shallowMount } from '@vue/test-utils'
import DesignsItem from '../../../src/components/Web_Designs/DesignsItem.vue';

Vue.use(lazy);

const designsItem = shallowMount(DesignsItem, {
    stubs: ['router-link', 'v-lazy'],
    propsData: {
        design: {
          id: 1,
          name: "The Center for Women's Health Research",
          url_link: 'http://cwhr.org/',
          anchor_link: 'cwhr',
          details: `Acted as lead developer and project manager for a content management system transition (to Sitefinity). 
                      Designed wireframes, navigation flow, user experience & interface, and a re-usable component library.
                      Worked with CWHR staff, leadership and stakeholders on all phases including initial concept, development, review, user testing and deployment.
                      Worked with University departments to ensure site met accessiblity and branding standards.
                      Trained staff on use of CMS platform.`,
          images: [
              {id: 15437, link: 'https://res.cloudinary.com/btdigital/image/upload/v1574380005/cwhr-homepage-scaled_vod7ms.png', alt_text: ''},
              {id: 25688, link: 'https://res.cloudinary.com/btdigital/image/upload/v1574380002/cwhr-newsblogpage-scaled_cwssx6.png', alt_text: ''},
              {id: 384821, link: 'https://res.cloudinary.com/btdigital/image/upload/v1574380006/cwhr-givingpage-scaled_xavn1r.png', alt_text: ''},
              {id: 4821, link: 'https://res.cloudinary.com/btdigital/image/upload/v1574380001/cwhr-researchpage-scaled_vfaf5w.jpg', alt_text: ''}
          ]
        }
    }
  });

describe('Web Design Item', () => {
  it('renders properly', () => {
    expect(designsItem.exists()).toBeTruthy();
  });
});