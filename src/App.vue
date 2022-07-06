<template>
    <router-view />
</template>

<style lang="scss">
#app {
    background: rgb(209, 213, 219);
}
/** 暗黑模式 */
html.dark {
    #app {
        background: rgb(20, 20, 20);
    }
}
</style>
