<template>
  <div
    class="bg-cover bg-center min-h-screen"
    :style="`background-image: url('https://images.unsplash.com/photo-1698779165529-12a692bc132b?q=80&w=2025&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`"
  >
    <Navbar />
    <div
      class="w-full text-center text-white overflow-hidden min-h-screen max-w-screen-xl mx-auto"
    >
      <div>
        <h1
          class="pt-16 font-mono text-3xl md:text-5xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
        >
          Capturing Moments in Every Frame
        </h1>
        <hr
          class="w-56 md:w-96 h-1 mx-auto my-4 bg-white border-0 rounded md:my-10"
        />

        <h3 class="text-5xl font-mono pt-16">Discover more</h3>
        <Icon name="typcn:arrow-down-outline" size="50" />
      </div>

      <!-- Collection Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 font-mono text-3xl p-8"
      >
        <!-- Loop through collections and display them -->
        <div
          v-for="(collection, index) in collections"
          :key="index"
          class="relative bg-transparent pt-16"
        >
          <p>{{ collection.title }}</p>
          <hr class="w-full h-0.5 mx-auto bg-white border-0 rounded my-4" />
          <div class="bg-gray-100 rounded-lg overflow-hidden h-96 w-full">
            <img
              :src="collection.cover_photo.urls.regular"
              :alt="collection.title"
              class="rounded-lg h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
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

<style scoped>
@media (max-width: 768px) {
  /* Adjust the gap for smaller screens */
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 3rem; /* Adjust this value as needed */
  }

  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 3rem; /* Adjust this value as needed */
  }
}
</style>
