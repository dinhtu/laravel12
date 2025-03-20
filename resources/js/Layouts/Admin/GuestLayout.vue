<script setup>
import SpinBeforeLoaded from '@/Components/Common/SpinBeforeLoaded.vue';
import Notyf from '@/Components/Common/Notyf.vue';
</script>

<template>
  <div>
    <Notyf :data="$page.props.sessionAlert" />
    <SpinBeforeLoaded />
    <slot name="content" />
  </div>
</template>
