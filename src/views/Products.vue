<template>
  <div class="produts my-4">
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <!-- Productcards -->
      <template>
        <div class="mt-5 mb-5">
          <b-carousel
            class="carousel"
            id="carousel-1"
            :interval="4000"
            background="#ababab"
            img-width="400px"
            img-height="200px"
            style="text-shadow: 1px 1px 2px #333;"
          >
            <!-- slides with image -->
            <b-carousel-slide
              img-width="400px"
              img-height="200px"
              img-src="https://images.unsplash.com/photo-1549439602-43ebca2327af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80 750w, https://images.unsplash.com/photo-1549439602-43ebca2327af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80 1050w, https://images.unsplash.com/photo-1549439602-43ebca2327af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80 1350w, https://images.unsplash.com/photo-1549439602-43ebca2327af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80 1500w, https://images.unsplash.com/photo-1549439602-43ebca2327af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80 1650w, https://images.unsplash.com/photo-1549439602-43ebca2327af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80 1950w, https://images.unsplash.com/photo-1549439602-43ebca2327af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80 2100w, https://images.unsplash.com/photo-1549439602-43ebca2327af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80 2250w, https://images.unsplash.com/photo-1549439602-43ebca2327af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80 2550w, https://images.unsplash.com/photo-1549439602-43ebca2327af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2700&q=80 2700w, https://images.unsplash.com/photo-1549439602-43ebca2327af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80 2850w, https://images.unsplash.com/photo-1549439602-43ebca2327af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80 3150w, https://images.unsplash.com/photo-1549439602-43ebca2327af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80 3300w, https://images.unsplash.com/photo-1549439602-43ebca2327af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80 3450w, https://images.unsplash.com/photo-1549439602-43ebca2327af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3456&q=80 3456w"
            />

            <!-- Slides with custom text -->
            <b-carousel-slide
              img-width="400px"
              img-height="200px"
              img-src="https://images.unsplash.com/photo-1521127376958-80338b32f37b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=80 500w, https://images.unsplash.com/photo-1521127376958-80338b32f37b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80 800w, https://images.unsplash.com/photo-1521127376958-80338b32f37b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80 1000w, https://images.unsplash.com/photo-1521127376958-80338b32f37b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1100&q=80 1100w, https://images.unsplash.com/photo-1521127376958-80338b32f37b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80 1400w, https://images.unsplash.com/photo-1521127376958-80338b32f37b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80 1600w, https://images.unsplash.com/photo-1521127376958-80338b32f37b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1700&q=80 1700w, https://images.unsplash.com/photo-1521127376958-80338b32f37b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2000&q=80 2000w, https://images.unsplash.com/photo-1521127376958-80338b32f37b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2048&q=80 2048w"
            />

            <!-- Slides with image only -->
            <b-carousel-slide
              img-width="400px"
              img-height="200px"
              img-src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80 750w, https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80 1050w, https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80 1350w, https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80 1500w, https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80 1650w, https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80 1950w, https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80 2100w, https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80 2250w, https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80 2550w, https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2700&q=80 2700w, https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2850&q=80 2850w, https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3150&q=80 3150w, https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3300&q=80 3300w, https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3450&q=80 3450w, https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3750&q=80 3750w, https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3900&q=80 3900w, https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=4050&q=80 4050w, https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=4350&q=80 4350w, https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=4500&q=80 4500w, https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=4650&q=80 4650w, https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=4950&q=80 4950w, https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=5100&q=80 5100w, https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=5185&q=80 5185w"
            />

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <template #img>
                <img
                  class="d-block img-fluid w-100"
                  img-width="400px"
                  img-height="200px"
                  src="https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80 750w, https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80 1050w, https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80 1350w, https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80 1500w, https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80 1650w, https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80 1950w, https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80 2100w, https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80 2250w, https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2550&q=80 2550w, https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2700&q=80 2700w, https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2850&q=80 2850w, https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3150&q=80 3150w, https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3300&q=80 3300w, https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3450&q=80 3450w, https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3750&q=80 3750w, https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3900&q=80 3900w, https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=4050&q=80 4050w, https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=4350&q=80 4350w, https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=4500&q=80 4500w, https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=4650&q=80 4650w, https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=4950&q=80 4950w, https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=5100&q=80 5100w, https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=5250&q=80 5250w, https://images.unsplash.com/photo-1482954363933-4bed6bbea570?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=5472&q=80 5472w"
                  alt="image slot"
                />
              </template>
            </b-carousel-slide>

            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
            <b-carousel-slide
              img-width="400px"
              img-height="200px"
              img-src="https://images.unsplash.com/photo-1590739241856-cc8c15419fc5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=957&q=80 957w, https://images.unsplash.com/photo-1590739241856-cc8c15419fc5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1257&q=80 1257w, https://images.unsplash.com/photo-1590739241856-cc8c15419fc5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1557&q=80 1557w, https://images.unsplash.com/photo-1590739241856-cc8c15419fc5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1857&q=80 1857w, https://images.unsplash.com/photo-1590739241856-cc8c15419fc5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1914&q=80 1914w, https://images.unsplash.com/photo-1590739241856-cc8c15419fc5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2157&q=80 2157w, https://images.unsplash.com/photo-1590739241856-cc8c15419fc5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2457&q=80 2457w, https://images.unsplash.com/photo-1590739241856-cc8c15419fc5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2514&q=80 2514w, https://images.unsplash.com/photo-1590739241856-cc8c15419fc5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2757&q=80 2757w, https://images.unsplash.com/photo-1590739241856-cc8c15419fc5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3057&q=80 3057w, https://images.unsplash.com/photo-1590739241856-cc8c15419fc5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3114&q=80 3114w, https://images.unsplash.com/photo-1590739241856-cc8c15419fc5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3357&q=80 3357w, https://images.unsplash.com/photo-1590739241856-cc8c15419fc5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3657&q=80 3657w, https://images.unsplash.com/photo-1590739241856-cc8c15419fc5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3714&q=80 3714w, https://images.unsplash.com/photo-1590739241856-cc8c15419fc5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3957&q=80 3957w, https://images.unsplash.com/photo-1590739241856-cc8c15419fc5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=4257&q=80 4257w, https://images.unsplash.com/photo-1590739241856-cc8c15419fc5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=4314&q=80 4314w, https://images.unsplash.com/photo-1590739241856-cc8c15419fc5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=4557&q=80 4557w, https://images.unsplash.com/photo-1590739241856-cc8c15419fc5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=4608&q=80 4608w"
            />
          </b-carousel>
        </div>
      </template>
      <b-row>
        <!-- Dropdown menu -->

        <div class="maindropdown ">
          <b-dropdown
            id="dropdown-right"
            right
            text="Products"
            variant="primary"
            size="sm"
            class="m-2"
          >
            <b-dropdown-item>All</b-dropdown-item>
            <b-dropdown-item>Women clothes</b-dropdown-item>
            <b-dropdown-item>Men clothes</b-dropdown-item>
            <b-dropdown-item>Accessories</b-dropdown-item>
          </b-dropdown>
          <b-dropdown
            id="dropdown-left"
            text="Sort by"
            variant="primary"
            size="sm"
            class="m-2"
          >
            <b-dropdown-item href="#">Color</b-dropdown-item>
            <b-dropdown-item href="#">Pattern</b-dropdown-item>
            <b-dropdown-item href="#">Low price</b-dropdown-item>
            <b-dropdown-item href="#">High Price</b-dropdown-item>
            <b-dropdown-item href="#">Newest</b-dropdown-item>
          </b-dropdown>
        </div>
      </b-row>

      <div id="product-wrapper">
        <b-row>
          <b-col cols="12"> <productCard /></b-col>
        </b-row>
      </div>
      <!-- Productcards -->
      <h3 class="other-products pb-10px">Also check out new arrivals</h3>
      <hr />
      <b-row class="mt-5">
        <template>
          <div class="mb-2  col-sm-12 col-md-4">
            <b-card
              title="Pink tie suit"
              :img-src="require('@/assets/Man/Suit/Suit1.png')"
              img-alt="Image"
              tag="article"
              class="productcontainer p-5"
            >
              <b-card-text>
                <p class="pricetag">$1999</p>
              </b-card-text>
              <div class="cardbuttoncontainer">
                <b-button
                  style="width:100px"
                  class="cardbutton"
                  v-b-modal.pink-suit
                  href="#"
                  variant="primary"
                  >View</b-button
                >
              </div>
            </b-card>
          </div>
          <div class="mb-2  col-sm-12 col-md-4">
            <b-card
              title="Blue tie suit"
              :img-src="require('@/assets/Man/Suit/Suit0.png')"
              img-alt="Image"
              tag="article"
              class="productcontainer p-5"
            >
              <b-card-text>
                <p class="pricetag">$2999</p>
              </b-card-text>
              <div class="cardbuttoncontainer">
                <b-button
                  class="cardbutton"
                  style="width:100px"
                  href="#"
                  variant="primary"
                  v-b-modal.blue-suit
                  >View</b-button
                >
              </div>
            </b-card>
          </div>
          <div class="mb-2  col-sm-12 col-md-4">
            <b-card
              title="Yellow tie suit"
              :img-src="require('@/assets/Man/Suit/Suit3.png')"
              img-alt="Image"
              tag="article"
              class="productcontainer p-5"
            >
              <b-card-text>
                <p class="pricetag">$3999</p>
              </b-card-text>
              <div class="cardbuttoncontainer">
                <b-button
                  class="cardbutton"
                  style="width:100px"
                  href="#"
                  variant="primary"
                  v-b-modal.yellow-suit
                  >View</b-button
                >
              </div>
            </b-card>
          </div>
        </template>
      </b-row>
    </b-container>
    <b-modal
      id="pink-suit"
      class="no-border"
      content-class="shadow"
      hide-backdrop
      hide-footer
    >
      <img
        :src="require('../assets/Man/Suit/Suit1.png')"
        alt="product"
        class="img-modal"
      />
      <h2>Pink tie suit</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in
      </p>
    </b-modal>
    <b-modal
      id="blue-suit"
      class="no-border"
      content-class="shadow"
      hide-backdrop
      hide-footer
    >
      <img
        :src="require('../assets/Man/Suit/Suit0.png')"
        alt="product"
        class="img-modal"
      />
      <h2>Blue suit tie</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in
      </p>
    </b-modal>
    <b-modal
      id="yellow-suit"
      class="no-border"
      content-class="shadow"
      hide-backdrop
      hide-footer
    >
      <img
        :src="require('../assets/Man/Suit/Suit3.png')"
        alt="product"
        class="img-modal"
      />
      <h2>Yellow tie suit</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in
      </p>
    </b-modal>
  </div>
</template>

<script>
  import productCard from '@/components/productCard.vue'
  export default {
    components: {
      productCard
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .productbox {
    border: solid 1px rgba(185, 184, 184, 0.747);
    font-style: bold;
    margin-top: 50px;
    padding: 5px;
  }

  .pricetag {
    font-size: 24px !important;
    color: rgb(0, 0, 0);
    position: absolute;
    top: 0px;
    left: 0px;
    /* border-radius: 0px !important; */
    font-style: italic;
  }
  .cardbuttoncontainer {
    position: relative;
    bottom: 0px;
  }

  .cardbutton {
    position: absolute;
    left: 32%;
    top: 42%;
    opacity: 1;
  }
  .productcontainer {
    padding: 40px !important;
  }
  .header {
    text-decoration: underline;
    padding-left: 25px;
  }
  .row1 {
    /* padding-left: 100px; */
    padding: 10px;
  }
  .card-img-top {
    width: 200px !important;
    margin-left: auto;
    margin-right: auto;
  }
  .other-products {
    margin-top: 60px;
  }
  .maindropdown {
    margin-bottom: 20px;
    margin-left: 10px;
  }
  .carousel {
    max-height: 500px;
    overflow: hidden;
  }
  @media only screen and (max-width: 600px) {
    .carousel {
      max-height: 200px;
      overflow: hidden;
    }
  }
</style>
