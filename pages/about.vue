<template>
  <div
    class="bg-cover bg-center min-h-screen font-mono"
    :style="`background-image: url('https://images.unsplash.com/photo-1698779166001-c912577014a6?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`"
  >
    <Navbar />
    <div class="w-full min-h-screen text-white overflow-hidden mx-auto">
      <div class="grid md:grid-cols-2 grid-cols-1 p-8 pt-32 md:pt-8">
        <div class="">
          <h1
            class="font-mono pt-12 text-3xl md:text-5xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]"
          >
            About Me
          </h1>
          <hr
            class="w-56 md:w-96 h-1 my-4 bg-white border-0 rounded md:my-10"
          />
          <h1 class="text-3xl">The Lens Behind the Art:</h1>
          <p>
            Ever since I picked up my first camera, I've been on a relentless
            pursuit of the perfect shot. Photography, for me, is more than just
            freezing moments in time; it's about weaving emotions and stories
            into each frame. From the soft glow of a sunrise to the vibrant
            chaos of a bustling cityscape, I aim to encapsulate the essence of
            every subject I encounter.
          </p>
          <h1 class="text-3xl pt-4">What Drives Me:</h1>
          <p class="">
            Photography, to me, is a dance between technical precision and
            creative intuition. It's about finding beauty in the ordinary,
            seeking inspiration in the unexpected, and creating a visual
            narrative that resonates with others. Whether it's a candid
            portrait, a breathtaking landscape, or a slice of urban life, I
            strive to evoke emotions and provoke thought through my lens.
          </p>
          <h1 class="text-3xl pt-4">Let's Create Together!</h1>
          <p>
            I believe that the best photographs are a collaboration between the
            photographer and the subject. Whether you're looking for
            professional portraits, event coverage, or simply want to capture a
            moment in time, I'm here to bring your vision to life. Thank you for
            joining me on this visual adventure. Let's capture moments, tell
            stories, and create memories together. Feel free to reach out, and
            let's start a conversation!
          </p>
        </div>

        <div class="text-center align-middle pt-10 md:pt-44">
          <div
            class="text-5xl text-center font-bold uppercase flex flex-col justify-around"
          >
            <span>Make</span>

            <span>YOUR MOMENTS</span>
            <div class="overflow-hidden h-20">
              <div class="animate-slide">
                <span
                  class="inline-block text-black py-1 px-3 mt-1 mb-11 bg-blue-100"
                  >Timeless</span
                >
              </div>
              <div>
                <span
                  class="inline-block text-black py-1 px-3 mb-11 bg-green-100"
                  >special</span
                >
              </div>
              <div>
                <span class="inline-block text-black py-1 px-3 mb-11 bg-red-100"
                  >Magical</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
