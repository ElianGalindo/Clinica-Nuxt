<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import router from '../../router.js'
import { Icon } from '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';

export default {
    layout:'dashboard',
    router,
    Icon
}
</script>