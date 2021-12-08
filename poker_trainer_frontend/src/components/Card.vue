<template>
    <div class='playing-card'>
        <img class='card' v-bind:src="card.image" alt="Card Image">
    </div>
</template>

<script>
    export default {
        name: 'card',
        props:{
            card: Object
        }
        
    }
</script>

<style scoped>
.card {
    max-width: 200px;
}

.playing-card{
    max-width: 200px;
    justify-content: center;
    margin: 20px;
}
</style>