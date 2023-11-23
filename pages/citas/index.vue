<template>
    <ui-citas/>
</template>

<script>
import UiCitas from '~/components/uiPatients/uiCitas.vue';
import { Icon } from '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';
export default {
    layout: 'dashboard',
    components: {
        UiCitas,
        Icon
}
}
</script>

