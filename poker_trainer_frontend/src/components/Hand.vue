<template>
    <div class='hand-container'>
        <card v-for="card in $store.state.cards" v-bind:card="card" v-bind:key="card.code"/>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';
    export default {
        name: 'hand',
        
        components: {
            Card
        }
    }

</script>

<style scoped>
.hand-container {
    display: flex;
    justify-content: center;
}
</style>