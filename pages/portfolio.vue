<template>
  <div class="bg-gray-50 bg-center min-h-screen">
    <Navbar />
    <div class="w-full text-center text-white pt-16">
      <div class="flex flex-col justify-center items-center">
        <!-- Center the images and align them vertically -->
        <div v-for="photo in photos" :key="photo.id" class="mb-6">
          <img
            :src="photo.urls.regular"
            :alt="photo.description || 'Unsplash Photo'"
            class="rounded-lg w-full mx-auto"
          />

          <p class="text-gray-500 pt-10">
            Published At: {{ formatDate(photo.created_at) }}
          </p>
          <hr class="my-12 border-t border-gray-300" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const username = "michielannaert"; // Replace with the specific Unsplash username you want to fetch photos from

const { data: photos } = await useFetch(
  `https://api.unsplash.com/users/${username}/photos`,
  {
    headers: {
      Authorization: "Client-ID nnXNVriYMSWbhnsR5Jx-Zw5KXufKtBnOdcFRU3ZpGEs", // Replace with your Unsplash API Key
    },
  }
);
const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString(undefined, options);
};
</script>
