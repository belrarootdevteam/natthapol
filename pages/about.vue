<template>
  <img src="/img/cover.png" alt="Cover Image">

  <section>
    <div class="container mx-auto py-8">
      <div class="grid grid-cols-12">
        <div class="flex justify-center lg:justify-start col-span-12 mb-8">
          <h1 class="ml-8 bg-black w-fit p-4 px-8 text-white font-bold text-lg">
            สภาเด็กและเยาวชน คืออะไร?
          </h1>
        </div>

        <div
            class="order-2 lg:order-1 col-span-12 lg:col-span-6 items-center lg:items-end flex flex-col pr-4 mb-8 justify-center">
          <h2 class="w-[400px] text-center lg:text-end text-lg text-black font-bold">สภาเด็กและเยาวชนเป็นองค์กรประสานงาน
            เพื่อดำเนินกิจกรรมการพัฒนาเด็กและเยาวชน</h2>
          <p class="w-[400px] text-center lg:text-end text-sm">
            สภานี้มุ่งสนับสนุนให้เด็กและเยาวชนพัฒนาทักษะทางด้านการเรียนรู้,
            คิดสร้างสรรค์, และการเป็นผู้นำ.</p>
        </div>
        <div class="order-1 lg:order-2 col-span-12 lg:col-span-6 flex justify-center lg:justify-start pl-4 mb-8">
          <img src="/img/01.png" alt="">
        </div>


        <div class="order-3 col-span-12 lg:col-span-6 flex flex-col items-center lg:items-end pr-4 mb-8">
          <img src="/img/02.png" alt="">
        </div>
        <div class="order-4 col-span-12 lg:col-span-6 pl-4 mb-8 flex flex-col justify-center items-center lg:items-start">
          <h2 class="w-[400px] text-center lg:text-start text-lg text-black font-bold">
            สภาเด็กและเยาวชนเป็นองค์กรประสานงาน
            เพื่อดำเนินกิจกรรมการพัฒนาเด็กและเยาวชน</h2>
          <p class="w-[400px] text-center lg:text-start text-sm">
            สภานี้มุ่งสนับสนุนให้เด็กและเยาวชนพัฒนาทักษะทางด้านการเรียนรู้, คิดสร้างสรรค์,
            และการเป็นผู้นำ.</p>
        </div>


        <div
            class="order-6 lg:order-5 col-span-12 lg:col-span-6 flex flex-col items-center lg:items-end pr-4 mb-8 justify-center">
          <h2 class="w-[400px] text-center lg:text-end text-lg text-black font-bold">
            คุ้มครองจากความล่วงละเมิดและการทำร้าย</h2>
          <p class="w-[400px] text-center lg:text-end text-sm">
            สภานี้เป็นที่รู้จักในการคุ้มครองเด็กและเยาวชนจากการล่วงละเมิดและการทำร้ายทุกรูปแบบ.</p>
        </div>
        <div class="order-5 lg:order-6 col-span-12 lg:col-span-6 flex justify-center lg:justify-start pl-4 mb-8">
          <img src="/img/03.png" alt="">
        </div>

        <div class="order-7 col-span-12 lg:col-span-6 flex flex-col items-center lg:items-end pr-4 mb-8">
          <img src="/img/04.png" alt="">
        </div>
        <div class="order-8 col-span-12 lg:col-span-6 pl-4 mb-8 flex flex-col justify-center items-center lg:items-start">
          <h2 class="w-[400px] text-center lg:text-start text-lg text-black font-bold">สนับสนุนโอกาสในการศึกษา</h2>
          <p class="w-[400px] text-center lg:text-start text-sm">
            สภานี้มุ่งเน้นการสนับสนุนโอกาสในการศึกษาที่เท่าเทียมและเป็นธรรม</p>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {useHead} from 'unhead'

useHead({
  title: 'ณัฐพล แสงอรุณ'
})
</script>