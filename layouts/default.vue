<template>
  <NavbarComponent/>
  <slot/>
  <FooterComponent/>
</template>

<script setup lang="ts">
import {NavbarComponent} from '#components'
import {FooterComponent} from '#components'
</script>