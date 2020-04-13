<template>
<div>
    <div v-for="visual in DataVisualsItems" :key="visual.id">
        <DataVisualsItem v-bind:visual="visual" />
    </div>
</div>
</template>

<script>
import DataVisualsItem from './DataVisualsItem.vue';

export default {
    name: "DataVisualsList",
    components: {
        DataVisualsItem
    },
    data: () => ({
        DataVisualsItems: [
            { 
                id: 1,
                name: "Metro Denver Housing Resource Finder",
                url_link: 'https://public.tableau.com/profile/brandon3955#!/vizhome/FindanOrganization/Dashboard1',
                anchor_link: 'resource_finder',
                details: `An interface used by the Close to Home Campaign to display housing resources in Metro Denver. 
                        Data collected from organization database queries and internet research. 
                        Formatted and organized with Python. Includes filtering by county, shelter type and service population.`,
                viz: {id: 4220, url: 'https://res.cloudinary.com/btdigital/image/upload/v1586810704/data-viz-housing-resource.jpg', alt: "An interface used by the Close to Home Campaign to display housing resources in Metro Denver."}
            },
            { 
                id: 2,
                name: "Close to Home Pledge Supporters",
                url_link: 'https://public.tableau.com/profile/brandon3955#!/vizhome/ClosetoHomePledgeSupporters/Dashboard1',
                anchor_link: 'pledge',
                details: `A visualization of Close to Home Campaign supporters in Colorado. 
                        Includes filtering by county, city and zip code.`,
                viz: {id: 42234220, url: 'https://res.cloudinary.com/btdigital/image/upload/v1586810712/data-viz-pledge.jpg', alt: "A visualization of Close to Home Campaign supporters in Colorado."}
            },
            { 
                id: 3,
                name: "Denver Metro Area Food Resources",
                url_link: 'https://public.tableau.com/profile/brandon3955#!/vizhome/Food-relatedOrganizationsinMetroDenver/Sheet1',
                anchor_link: 'food',
                details: `A resourse map used by the Close to Home Campaign to display food resources in Metro Denver. 
                        Data collected from organization database queries and internet research. 
                        Formatted and organized with Python. Includes filtering by county and service type.`,
                viz: {id: 620, url: 'https://res.cloudinary.com/btdigital/image/upload/v1586810752/data-viz-food.jpg', alt: "A resourse map used by the Close to Home Campaign to display food resources in Metro Denver."}
            },
            { 
                id: 4,
                name: "Arts Community in Metro Denver",
                url_link: 'https://public.tableau.com/profile/brandon3955#!/vizhome/ArtsCommunityinMetroDenver/Sheet1',
                anchor_link: 'art',
                details: `A resource map displaying art-related organizations in Metro Denver. 
                        Data collected from organization database queries and internet research. 
                        Includes filtering by art focus and type.`,
                viz: {id: 90820, url: 'https://res.cloudinary.com/btdigital/image/upload/v1586810752/data-viz-art.jpg', alt: "A resource map displaying art-related organizations in Metro Denver."}
            },
            { 
                id: 5,
                name: "Cryptocurrencies",
                url_link: 'https://public.tableau.com/profile/brandon3955#!/vizhome/Cryptocurrencies-lenthoftimebelow10/Story1',
                anchor_link: 'crypto',
                details: `Created in December 2017 to track popular cryptocurrencies and the length of time they were below $10. 
                        The area in red reflects the period of time that the prices were below $10.`,
                viz: {id: 9320, url: 'https://res.cloudinary.com/btdigital/image/upload/v1586810752/data-viz-crypto.jpg', alt: 'Popular cryptocurrencies in 2017'}
            },
            { 
                id: 6,
                name: "Bands I've Seen",
                url_link: 'https://public.tableau.com/profile/brandon3955#!/vizhome/BandsIveSeen/Dashboard1',
                anchor_link: 'bands',
                details: `Bands I've seen between 2009 and 2019!`,
                viz: {id: 12096620, url: 'https://res.cloudinary.com/btdigital/image/upload/v1586810752/data-viz-bands.jpg', alt: "A visualization of bands I've seen"}
            },
        ]
    })
}
</script>

<style scoped>

</style>