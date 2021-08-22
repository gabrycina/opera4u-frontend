<template name="Info">
    <div>
        <w-flex class="column pa5 no-shrink align-center">
            <h4>{{title}}</h4>
            <p @click="goToLink" :class="{underlined: link != ''}">
                {{info}}
            </p>
        </w-flex>
    </div>
</template>

<script>
export default {
    name: "Info",
    props: {
        title: String,
        info: String,
        link: String
    },
    methods: {
        goToLink(){
            window.open(this.link);
        },
    },
}
</script>

<style scoped>
h4 {
    background: linear-gradient(180deg, #A6291E 0%, #640800 100%);
    font-size: 1.2vw;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

p {
    color: #868686;
    padding-top: .5em;
    font-size: 1vw;
}

.underlined {
    text-decoration: underline;
}
</style>