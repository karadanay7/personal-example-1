<template>
  <div
    class="bg-cover bg-center min-h-screen font-mono"
    :style="`background-image: url('https://images.unsplash.com/photo-1698778573682-346d219402b5?q=80&w=2036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`"
  >
    <Navbar />
    <div class="w-full text-white overflow-hidden mx-auto min-h-screen">
      <div class="grid lg:grid-cols-3 grid-cols-1 p-8 pt-44">
        <div></div>
        <div class="bg-transparent border-2 rounded-3xl h-full p-8">
          <h1
            class="font-mono text-center pt-10 text-3xl md:text-5xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] animate-pulse"
          >
            Contact
          </h1>
          <hr class="w-56 h-1 my-4 mx-auto bg-white border-0 rounded" />
          <div class="flex flex-col items-start m-8">
            <p>Email: example@example.com</p>
            <p>Linkedin: @yourlinkedinusername</p>
            <p>Unsplash: @yourunsplahusername</p>
            <p>Location : Your address here</p>
            <p>Website: www.example.com</p>
          </div>
          <div class="flex justify-evenly">
            <div class="hover:scale-110">
              <Icon name="cib:linkedin" size="70" />
            </div>
            <div class="hover:scale-110">
              <Icon name="formkit:email" size="70" />
            </div>
            <div class="hover:scale-110">
              <Icon name="grommet-icons:instagram" size="70" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
