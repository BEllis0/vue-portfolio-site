<template>
<div>
    <div v-for="design in DesignsItems" :key="design.id">
        <DesignsItem v-bind:design="design" />
    </div>
</div>
</template>

<script>
import DesignsItem from './DesignsItem.vue';

export default {
    name: "DesignsList",
    components: {
        DesignsItem
    },
    data: () => ({
        DesignsItems: [
            { 
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
            },
            { 
                id: 2,
                name: "National Retail Concept Partners",
                url_link: 'http://nrcpartners.com/',
                anchor_link: 'nrcp',
                details: `Provided full website design and development (custom WordPress Divi theme). 
                        Customized responsive designs for mobile, tablet and desktop views. 
                        Developed content, setup and integrated email marketing services. 
                        Implemented SEO practices. 
                        Built out Google Analytics traffic and conversion reporting.`,
                images: [
                    {id: 145223, link: 'https://res.cloudinary.com/btdigital/image/upload/v1550806012/nrcp-home-page-1_pzjfll.jpg', alt_text: ''},
                    {id: 2506, link: 'https://res.cloudinary.com/btdigital/image/upload/v1550806007/nrcp-blog-1_p9rru8.jpg', alt_text: ''},
                    {id: 3088, link: 'https://res.cloudinary.com/btdigital/image/upload/v1550806002/nrcp-services-2_sdxcz3.jpg', alt_text: ''}
                ]
            },
            { 
                id: 3,
                name: "Third Sector Communication Strategies",
                url_link: 'https://tscstrategies.com/',
                anchor_link: 'tscs',
                details: `Provided full website design and development (custom WordPress Divi theme) with heavy use of custom CSS and JavaScript. 
                        Customized responsive designs for mobile, tablet and desktop views. 
                        Implemented SEO practices.`,
                images: [
                    {id: 155321, link: 'https://res.cloudinary.com/btdigital/image/upload/v1574379941/TSCS1-6_ukknzd.jpg', alt_text: ''},
                    {id: 200056, link: 'https://res.cloudinary.com/btdigital/image/upload/v1574379943/TSCS-Vroom-Design-2_rbpwgx.png', alt_text: ''},
                ]
            },
            { 
                id: 4,
                name: "The Reciprocity Collective",
                url_link: 'http://thereciprocitycollective.org',
                anchor_link: 'trc',
                details: `Provided full website design and development (custom WordPress Divi theme). 
                        Customized responsive designs for mobile, tablet and desktop views. 
                        Integrated event management and donation platform. 
                        Implemented SEO practices. 
                        Built out Google Analytics traffic reporting.`,
                images: [
                    {id: 10343, link: 'https://res.cloudinary.com/btdigital/image/upload/v1586562330/trc-home.jpg'},
                    {id: 250666, link: 'https://res.cloudinary.com/btdigital/image/upload/v1586562327/trc-volunteer.jpg'},
                    {id: 388043, link: 'https://res.cloudinary.com/btdigital/image/upload/v1586562322/trc-donate.jpg'}
                ]
            },
            { 
                id: 5,
                name: "Close to Home CO",
                url_link: 'http://closetohomeco.org',
                anchor_link: 'cth',
                details: `Provided regular development of web pages, updates and maintenance (custom WordPress Divi theme). 
                            Managed troubleshooting and hosting issues.`,
                images: [
                    {id: 10043243, link: 'https://res.cloudinary.com/btdigital/image/upload/v1550806015/cth-message-card_wzvgdd.jpg'},
                    {id: 2500909096, link: 'https://res.cloudinary.com/btdigital/image/upload/v1550806933/Newsletter-CLOSE-TO-HOME-14_oukoc4.png'},
                    {id: 3845338, link: 'https://res.cloudinary.com/btdigital/image/upload/v1550806932/Summer-Resources-CLOSE-TO-HOME-24_zodkrq.png'}
                ]
            },
            { 
                id: 6,
                name: "Cry Without Tears",
                url_link: 'https://www.crywithouttears.org/',
                anchor_link: 'cwt',
                details: `Provided full website design and development (Squarespace). 
                        Customized responsive designs for mobile, tablet and desktop views. 
                        Implemented SEO practices.`,
                images: [
                    {id: 1438605, link: 'https://res.cloudinary.com/btdigital/image/upload/v1574380012/cwt-design-home-scaled_mh5icr.png'},
                    {id: 2503456, link: 'https://res.cloudinary.com/btdigital/image/upload/v1574380054/cwt-design-getinvolved-scaled_tamqao.png'},
                    {id: 3896058, link: 'https://res.cloudinary.com/btdigital/image/upload/v1574380009/cwt-design-programs-scaled_ds9591.jpg'}
                ]
            },
        ]
    })
}
</script>

<style scoped>

</style>