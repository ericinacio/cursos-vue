<template>
    <div>
        <img :src="avatar" :alt="descricao">
        <ChangeImage @change-image="replaceImage"/>
    </div>
</template>
<script>
import ChangeImage from './ChangeImage.vue';
    export default {
    name: 'Picture',
    components:{
        ChangeImage
    },
    data() {
        return {
            avatar: "/img/avatar.png",
            descricao: "Eric Inácio"
        };
    },
    methods:{
        replaceImage(){
            this.avatar = "/img/avatar2.png"
        }
    }
}
</script>