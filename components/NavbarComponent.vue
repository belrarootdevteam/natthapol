<template>
  <div class="navbar bg-[#6D38FB] h-24">
    <div class="container mx-auto">
      <div class="flex">
        <a href="/"><img src="/img/logo.png" alt="Logo"></a>
      </div>
      <div class="flex-1"></div>
      <div class="flex-none flex items-center">
        <ul class="hidden lg:flex menu menu-horizontal px-1 font-bold text-white">
          <li><a href="/about" class="link link-hover underline-offset-8 text-lg">คืออะไร?</a></li>
          <li><a href="/policy" class="link link-hover underline-offset-8 text-lg">นโยบาย</a></li>
          <li><a href="/faq" class="link link-hover underline-offset-8 text-lg">ตอบข้อสงสัย</a></li>
        </ul>
        <button v-if="!isMenu" @click="isMenu = !isMenu" class="lg:hidden btn btn-square btn-ghost text-white">
          <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H36V4H0V0ZM0 10H36V14H0V10ZM0 20H36V24H0V20Z" fill="white"/>
          </svg>
        </button>
        <button v-else @click="isMenu = !isMenu" class="lg:hidden btn btn-square btn-ghost text-white">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28 2.82L25.18 0L14 11.18L2.82 0L0 2.82L11.18 14L0 25.18L2.82 28L14 16.82L25.18 28L28 25.18L16.82 14L28 2.82Z" fill="white"/>
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!--  Menu Mob-->
  <div v-if="isMenu" class="lg:hidden navbar bg-[#6D38FB] h-24 relative py-24 pt-16">
    <div class="flex items-center w-full">
      <ul class="flex-col items-center w-full menu menu-horizontal px-1 font-bold text-white">
        <li><a class="link link-hover underline-offset-8 text-lg">คืออะไร?</a></li>
        <li><a class="link link-hover underline-offset-8 text-lg">นโยบาย</a></li>
        <li><a class="link link-hover underline-offset-8 text-lg">ตอบข้อสงสัย</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const isMenu = ref(false);
</script>