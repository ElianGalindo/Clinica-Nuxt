<template>
 <ui-login /> 
</template>


<script>
import uiLogin from '@/components/uiUsers/uilogin'
import { Icon } from '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
export default {
  name: 'IndexPage',
  components: {
    uiLogin,
    Icon
  }
}
</script>


