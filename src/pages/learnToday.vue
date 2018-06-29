<template>
    <div>
        <h2>{{ currentEsy.title }}</h2>
        <p v-for="(chapter, index) in currentEsy.content" :key="index">
            {{ chapter }}
        </p>
    </div>
</template>
<script>
import essay from '../config/articles'
export default {
    data() {
        return {
            writings: essay,
            currentIdx: this.$route.query.id,
        }
    },
    computed: {
        currentEsy() {
            if (this.currentIdx) {
                console.log('new: %s', this.currentIdx)
                return this.writings[this.currentIdx - 1];
            }else {
                return {};
            }
            
        }
    },
    mounted() {
        
    },
    methods: {
        
    }
}
</script>
<style scoped>
h2 {
    text-align: center;
}
</style>
