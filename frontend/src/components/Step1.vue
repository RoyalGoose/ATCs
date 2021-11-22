<template>
    <div class="card">
        <ul class="list">
            <li
                :class="{
                    'selected-item': selectedItem == 'У меня нет ATC',
                    'list-item': true,
                    'no-atc': true,
                }"
                @click="selectItem('У меня нет ATC')"
            >
                У меня нет ATC
                <div class="check">
                    <font-awesome-icon class="icon-check" icon="check" />
                </div>
            </li>
            <li class="list-item" v-for="category in categories" :key="category">
                {{ category }}
                <ul class="sublist">
                    <li
                        v-for="item in items[category]"
                        :class="{
                            'selected-item': selectedItem == item,
                            'sublist-item': true,
                        }"
                        :key="item"
                        @click="selectItem(item)"
                    >
                        {{ item }}
                        <div class="check">
                            <font-awesome-icon icon="check" />
                        </div>
                    </li>
                </ul>
            </li>
        </ul>

        <div
            :class="{
                'button': true,
                'disabled': selectedItem == '',
            }"
            @click="isChangeView"
        >
            Перейти к следующему шагу
            <font-awesome-icon class="arrow" icon="arrow-right" />
        </div>        
    </div>
</template>

<script>
import AtcService from '../../AtcService'

export default {
    metaInfo() {
        return {
            title: 'Контрольная работа',
        };
    },

    props: ['changeView', 'selectedItem', 'changeSelectedItem'],

    data: () => ({
        items: {},
        categories: [],
        isLoading: true,
    }),

    async mounted() {
        await this.fetchItems();
        this.isLoading = false;
    },

    methods: {
        async fetchItems() {
            try {
                const data = await AtcService.getAtc();
                this.categories = Object.keys(data);
                this.items = data;
            } catch (e) {
                console.log(e);
                throw e;
            }
        },

        selectItem(item) {
            this.changeSelectedItem(item);
        },

        isChangeView() {
            if (this.$props.selectedItem != '') {
                this.changeView();
            }
        }
    }
}
</script>

<style lang="scss">
.card {
    background: white;
    padding: 32px 40px;
    border-radius: 8px;
}

.list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    columns: 4;
    column-gap: 20px;

    .list-item {
        font-family: Verdana, sans-serif;
        font-size: 12px;
        font-weight: 700;
        color: #0096F2;
        margin-bottom: 24px;
        
        &.no-atc {
            padding: 4px 0;
            padding-left: 12px;
            padding-right: 4px;
            margin: 4px 0;
            margin-left: -12px;
            font-family: 'Open Sans', sans-serif;
            font-size: 14px;
            color: #F2291F;
            margin-bottom: 24px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: .2s ease-out;

            &.selected-item {
                background-color: rgba(242, 41, 31, 0.1);
                border-radius: 20px;
                
                .check {
                    opacity: 1;
                    color: #fee5e5 !important;
                }
            }

            .check {
                background-color: #F2291F;
                color: #fee5e5 !important;
                width: 22px;
                height: 22px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: .2s ease-out;
                opacity: 0;
                font-size: 13px;
            }
        }
    }
}

.sublist {
    list-style-type: none;
    margin: 0;
    padding: 0;

    .sublist-item {
        padding: 4px 0;
        padding-left: 12px;
        padding-right: 4px;
        margin: 4px 0;
        margin-left: -12px;
        font-weight: 400;
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        color: #1D2335;
        cursor: pointer;
        transition: .2s ease-out;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .check {
            background-color: #0096F2;
            color: #E5F5FE !important;
            width: 22px;
            height: 22px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: .2s ease-out;
            opacity: 0;
            font-size: 12px;
        }

        &.selected-item {
            background-color: rgba(0,150,242, 0.1);
            border-radius: 20px;
            color: #0096F2;
            font-weight: 600;

            .check {
                opacity: 1;
                color: #E5F5FE !important;
            }
        }
    }
}

.button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    padding: 12px 0;
    border-radius: 8px;
    background-color: #00C853;
    color: white;
    font-size: 16px;
    transition: 0.2s ease-out;
    cursor: pointer;

    &:not(.disabled):hover {
        background-color: #019b41;
    }

    &.disabled {
        background-color: #D3DBE8;
    }

    .arrow {
        margin-left: 13px;
    }
}
</style>