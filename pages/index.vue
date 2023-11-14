<template>
  <div
    class="bg-cover bg-center min-h-screen"
    :style="`background-image: url('https://images.unsplash.com/photo-1698779165529-12a692bc132b?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`"
  >
    <Navbar />
    <div class="w-full text-center text-white overflow-hidden mx-auto">
      <div>
        <h1
          class="font-mono pt-12 text-3xl md:text-5xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
        >
          Capturing Moments in Every Frame
        </h1>
        <hr
          class="w-56 md:w-96 h-1 mx-auto my-4 bg-white border-0 rounded md:my-10"
        />
        <p class="text-xl pb-10">Photographer: Michiel Annaert</p>
      </div>
      <NuxtLink to="/portfolio">
        <h2 class="text-5xl font-mono pb-4">Discover more</h2>
        <Icon
          class="animate-bounce"
          name="typcn:arrow-down-outline"
          size="50"
        />
      </NuxtLink>

      <!-- Collections Section -->
      <div class="p-8 pt-32">
        <!-- Collection Grid -->

        <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 font-mono text-3xl p-8"
        >
          <!-- Loop through collections and display them -->
          <div
            v-for="(collection, index) in collections"
            :key="index"
            class="relative bg-transparent hover:scale-110"
          >
            <NuxtLink :to="collection.links.html">
              <p class="hover:animate-pulse text-2xl">{{ collection.title }}</p>
              <hr class="w-full h-0.5 mx-auto bg-white border-0 rounded my-4" />

              <div
                class="bg-gray-100 rounded-3xl overflow-hidden h-80 md:h-44 w-full"
              >
                <img
                  :src="collection.cover_photo.urls.regular"
                  :alt="collection.title"
                  class="rounded-lg h-full w-full object-cover drop-shadow-lg"
                />
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script setup>
const username = "michielannaert"; // Replace with the specific Unsplash username you want to fetch collections from
const apiKey = "nnXNVriYMSWbhnsR5Jx-Zw5KXufKtBnOdcFRU3ZpGEs"; // Replace with your Unsplash API Key

const { data: collections } = await useFetch(
  `https://api.unsplash.com/users/${username}/collections`,
  {
    headers: {
      Authorization: `Client-ID ${apiKey}`,
    },
  }
);
</script>
<style scoped></style>
