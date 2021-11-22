<template>
    <header>
        <div
            class="back-button"
            v-if="currentView == 'v-2'"
            @click="goBack"
        >
            <font-awesome-icon class="arrow" icon="arrow-left" />
            Подходящие решения
        </div>
        <transition name="fade" mode="out-in">
            <span key="v-1" v-if="currentView == 'v-1'">1/2 Какая у вас АТС?</span> 
            <span key="v-2" v-else>2/2 Вы получите следующие функции</span> 
        </transition>        
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: ['currentView', 'changeView'],

    methods: {
        goBack() {
            this.changeView();
        }
    }
}
</script>

<style>
header {
    background: #002B7E;
    color: white;
    opacity: 0.8;   
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 23px 0;
    font-size: 32px;
    margin-bottom: 17px;
    position: relative;
}

header .back-button {
    position: absolute;
    left: 28px;
    font-size: 14px;
    cursor: pointer;
}

header .back-button .arrow {
    margin-right: 8px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>