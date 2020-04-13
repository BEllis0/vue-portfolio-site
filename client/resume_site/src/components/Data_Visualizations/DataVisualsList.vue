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
                details: ``,
                viz: 'https://public.tableau.com/views/FindanOrganization/Dashboard1'
            },
            { 
                id: 2,
                name: "Close to Home Pledge Supporters",
                url_link: 'https://public.tableau.com/profile/brandon3955#!/vizhome/ClosetoHomePledgeSupporters/Dashboard1',
                anchor_link: 'pledge',
                details: ``,
                viz: 'https://public.tableau.com/views/ClosetoHomePledgeSupporters/Dashboard1'
            },
            { 
                id: 3,
                name: "Denver Metro Area Food Resources",
                url_link: 'https://public.tableau.com/profile/brandon3955#!/vizhome/Food-relatedOrganizationsinMetroDenver/Sheet1',
                anchor_link: 'food',
                details: ``,
                viz: 'https://public.tableau.com/views/Food-relatedOrganizationsinMetroDenver/Sheet1'
            },
            { 
                id: 4,
                name: "Arts Community in Metro Denver",
                url_link: 'https://public.tableau.com/profile/brandon3955#!/vizhome/ArtsCommunityinMetroDenver/Sheet1',
                anchor_link: 'art',
                details: ``,
                viz: 'https://public.tableau.com/views/ArtsCommunityinMetroDenver/Sheet1'
            },
            { 
                id: 5,
                name: "Cryptocurrencies",
                url_link: 'https://public.tableau.com/profile/brandon3955#!/vizhome/Cryptocurrencies-lenthoftimebelow10/Story1',
                anchor_link: 'crypto',
                details: `Cryptocurrencies - The area in red reflects the period of time that the prices were below $10.`,
                width: 1000,
                height: 1000,
                viz: 'https://public.tableau.com/views/Cryptocurrencies-lenthoftimebelow10/Story1'
            },
            { 
                id: 6,
                name: "Bands I've Seen",
                url_link: 'https://public.tableau.com/profile/brandon3955#!/vizhome/BandsIveSeen/Dashboard1',
                anchor_link: 'bands',
                details: ``,
                width: 1000,
                height: 1000,
                viz: 'https://public.tableau.com/views/BandsIveSeen/Dashboard1'
            },
        ]
    })
}
</script>

<style scoped>

</style>