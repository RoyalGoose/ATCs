<template>
	<main>
		<div class="wrapper">	
			<Header :currentView="currentView" :changeView="changeView"/>
			<transition name="component-fade" mode="out-in">
				<component
					v-bind:is="currentView"
					:changeView="changeView"
					:selectedItem="selectedItem"
					:changeSelectedItem="changeSelectedItem"
				></component>
			</transition>
		</div>
	</main>
</template>

<script>
import Header from './components/Header';
import Step1 from './components/Step1';
import Step2 from './components/Step2';

export default {
	data: () => ({
		currentView: 'v-1',
		selectedItem: '',
	}),

	methods: {
		changeView() {
			if (this.currentView == 'v-1') {
				this.currentView = 'v-2'
			} else {
				this.currentView = 'v-1'
			}
		},

		changeSelectedItem(item) {
			if (this.selectedItem == item) {
                this.selectedItem = '';
            } else {
                this.selectedItem = item;
            }
		}
	},

	components: {
		Header,
		'v-1': Step1,
		'v-2': Step2,
	}
}
</script>

<style lang='scss'>
html {
	font-size: 14px;
}

body {
	padding: 0;
	margin: 0;
	font-family: 'Open Sans', sans-serif;
}

main {
	background-image: url("assets/bg.png");
	height: 100vh;
	width: 100%;
	background-size: cover;
	display: flex;
	justify-content: center;
	align-items: center;
}

.wrapper {
	width: 1110px;
	display: flex;
	flex-direction: column;
}

.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}

.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>
