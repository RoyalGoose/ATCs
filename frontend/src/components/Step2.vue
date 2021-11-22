<template>
    <div class="card">
        <div class="up-info">
            <p class="up-info__line">
                Модель ATC:
                <span class="atc-model" @click.self="toggleModal">
                    {{ selectedItem }}
                    <font-awesome-icon
                        :class="{
                            'chevron': true,
                            'rotate': isShowModal,
                        }"
                        icon="chevron-down"
                    />
                    <div
                        :class="{
                            'modal': true,
                            'show': isShowModal,
                        }"
                    >
                        <ModalList
                            :selectedItem="selectedItem"
                            :changeSelectedItem="changeSelectedItem"
                            :toggleModal="toggleModal"
                        />
                    </div>
                </span>
            </p>
            <p class="up-info__line">
                Программа 1С:
                <span class="static-info">Управление нашей фирмой</span>
            </p>
            <p class="up-info__line">
                Подходящие решения:
                <span class="static-info">Интеграция с телефонией</span>
            </p>
        </div>
        <div class="button disabled title">
            Интеграция с телефонией
        </div>           

        <div class="functions-wrapper">
            <div class="column supported">
                <span class="column-header supported">
                    Поддерживаемые функции:
                </span>
                <ul class="functions-list">
                    <li class="functions-list__item">
                        <div class="functions-list__item__icon">
                            <font-awesome-icon class="icon" icon="check" />
                        </div>
                        Получение информации о звонках
                    </li>
                    <li class="functions-list__item">
                        <div class="functions-list__item__icon">
                            <font-awesome-icon class="icon" icon="check" />
                        </div>
                        Создать исходящий звонок
                    </li>
                    <li class="functions-list__item">
                        <div class="functions-list__item__icon">
                            <font-awesome-icon class="icon" icon="check" />
                        </div>
                        Положить трубку
                    </li>
                    <li class="functions-list__item">
                        <div class="functions-list__item__icon">
                            <font-awesome-icon class="icon" icon="check" />
                        </div>
                        Постановка на удержание
                    </li>
                    <li class="functions-list__item">
                        <div class="functions-list__item__icon">
                            <font-awesome-icon class="icon" icon="check" />
                        </div>
                        Перевод на безусловный
                    </li>
                    <li class="functions-list__item">
                        <div class="functions-list__item__icon">
                            <font-awesome-icon class="icon" icon="check" />
                        </div>
                        Перевод условный
                    </li>
                    <li class="functions-list__item">
                        <div class="functions-list__item__icon">
                            <font-awesome-icon class="icon" icon="check" />
                  
                        </div>Динамическая маршрутизация командой перевода
                    </li>
                </ul>
            </div>
            <div class="column">
                <span class="column-header">
                    Неподдерживаемые функции:
                </span>
                <ul class="functions-list">
                    <li class="functions-list__item">
                        <div class="functions-list__item__icon">
                            <font-awesome-icon class="icon" icon="times" />
                        </div>
                        Получение информации о звонках
                    </li>
                    <li class="functions-list__item">
                        <div class="functions-list__item__icon">
                            <font-awesome-icon class="icon" icon="times" />
                        </div>
                        Создать исходящий звонок
                    </li>
                    <li class="functions-list__item">
                        <div class="functions-list__item__icon">
                            <font-awesome-icon class="icon" icon="times" />
                        </div>
                        Положить трубку
                    </li>
                </ul>
            </div>
        </div>
        <div class="card-footer">
            <span class="card-footer__title">
                Ссылки на инструкции:
            </span>
            <ul class="footer-list">
                <li class="footer-list__item">
                    <a href="https://t.me/royalgoose" target="__blank">
                        <font-awesome-icon class="icon" icon="external-link-alt" />
                        Инструкция к ATC Mango
                    </a>
                </li>
                <li class="footer-list__item">
                    <a href="https://t.me/royalgoose" target="__blank">
                        <font-awesome-icon class="icon" icon="external-link-alt" />
                        Инструкция к ATC Яндекс
                    </a>
                </li>
                <li class="footer-list__item">
                    <a href="https://t.me/royalgoose" target="__blank">
                        <font-awesome-icon class="icon" icon="external-link-alt" />
                        Инструкция к ATC iToolabs
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import ModalList from '@/components/ModalList'

export default {
    props: ['selectedItem', 'changeSelectedItem'],

    data: () => ({
        isShowModal: false,
    }),

    methods: {
        toggleModal() {
            this.isShowModal = !this.isShowModal;
        },
    },

    components: {
        ModalList,
    },
}
</script>

<style lang="scss">
.up-info__line {
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
    color: #677687;
    font-weight: 500;
    font-size: 14px;
    user-select: none;
}

.atc-model {
    margin-left: 8px;
    color: #0096F2;
    font-weight: 600;
    cursor: pointer;
    position: relative;

    & .chevron {
        font-size: 11px;
        transition: 0.2s ease-out;

        &.rotate {
            transform: rotate(-180deg);
        }
    }

    .modal {
        position: absolute;
        top: 140%;
        left: -20px;
        width: 900px;
        background-color: white;
        border-radius: 12px;
        box-shadow: 0px 8px 40px rgba(14, 38, 100, 0.32);
        padding: 24px;
        display: none;

        &.show {
            display: block;
        }

        &:before {
            content: '';
            width: 10px;
            height: 10px;
            border-radius: 3px;
            position: absolute;
            top: -5px;
            left: 20px;
            background-color: white;
            transform: rotate(45deg);
        }
    }
}


.static-info {
    color: #1D2335;
    font-weight: 600;
    margin-left: 8px;
}

.button.title {
    background-color: #F2F2F2;
    color: #677687;
    font-weight: 600;
    font-size: 14px;
    cursor: default;
    user-select: none;
}

.functions-wrapper {
    display: flex;
    align-items: flex-start;
    margin: 30px 0;
    
    & .column {
        flex: 1;
    }
}


.column-header {
    color: #F2291F;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 10px;
    display: block;
    
    &.supported {
        color: #00C853;
    }
}

.functions-list {
    list-style: none;
    margin: 0;
    padding: 0;

    &__item {
        display: flex;
        align-items: center;        
        color: #929AA3;
        font-size: 14px;
        margin: 10px 0;

        &__icon {
            background-color: #F2F2F2;
            color: #929AA3;
            border-radius: 8px;
            margin-right: 12px;
            width: 22px;
            height: 22px;
            display: flex;
            align-items: center;
            justify-content: center;

            .icon {
                font-size: 10px;
            }
        }
    }
}

.column.supported {
    .functions-list {
        &__item {
            color: #1D2335;

            &__icon {
                background-color: rgba(#0096F2, 0.1);
                color: #0096F2;
            }
        }
    }
}

.card-footer {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 24px;

    &__title {
        color: #677687;
        font-size: 14px;
        font-weight: 600;
        margin-bottom: 10px;
        display: block;
    }

    .footer-list {
        list-style-type: none;
        margin: 0;
        padding: 0;

        &__item a {
            margin: 10px 0;
            cursor: pointer;
            color: #006DA3;
            font-size: 14px;
            font-weight: 600;
            display: flex;
            align-items: center;
            text-decoration: none;

            .icon {
                margin-right: 7px;
                font-size: 12px;
            }
        }
    }
}
</style>