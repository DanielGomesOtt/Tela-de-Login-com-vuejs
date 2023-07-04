<script>
import LeftFirstPage from '../components/LeftFirstPage.vue';
import RightFirstPage from '../components/RightFirstPage.vue';
    export default{
        name:'FirstPage',
        components: {
            LeftFirstPage,
            RightFirstPage
        },   
    }
</script>

<template>
    <div class="grid lg:grid-cols-2 h-screen">
        <div>
            <LeftFirstPage />
        </div>
        <div>
            <RightFirstPage />
        </div>
    </div>
</template>