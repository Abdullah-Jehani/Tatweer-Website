<template>
  <div class="grid grid-cols-12 py-12">
    <div class="col-start-1 col-span-3 mt-2">
      <div>
        <img src="../../../public/images/TatweerFooter.svg" alt="" />
      </div>
      <div class="mt-10">
        <form action="">
          <label class="text-sm font-medium text-secondWhite" for="email"
            >NewsLetter</label
          >
          <input
            class="rounded-lg px-4 py-3 bg-white stroke-strokeColor w-full mb-4 mt-2"
            type="email"
            name="email"
            id="email"
            placeholder="yourname@mail.com"
          />
          <subscribeButtonComponent>Subscribe</subscribeButtonComponent>
        </form>
      </div>

      <!-- Left Column -->
      <div class="mt-10 grid grid-cols-2 w-full">
        <div class="flex flex-col space-y-10 text-white font-medium">
          <h1>Follow us!</h1>
          <h1>Visit us!</h1>
        </div>

        <!-- Right Column -->
        <div class="flex flex-col space-y-10 items-start">
          <!-- Social Icons -->
          <div class="flex space-x-4">
            <img src="/icons/facebook.svg" alt="Facebook Icon" />
            <img src="/icons/instagram.svg" alt="Instagram Icon" />
            <img src="/icons/snapchat.svg" alt="Snapchat Icon" />
          </div>

          <!-- Locations -->
          <div class="flex flex-col space-y-4">
            <!-- Benghazi -->
            <div class="flex flex-col">
              <h1 class="text-xs text-secondWhite font-normal">Benghazi, HQ</h1>
              <div class="flex items-center space-x-1">
                <img src="/icons/location.svg" alt="Location Icon" />
                <h1 class="text-white font-medium">Dubai Street</h1>
              </div>
            </div>

            <!-- Tripoli -->
            <div class="flex flex-col">
              <h1 class="text-xs text-secondWhite font-normal">
                Tripoli Office
              </h1>
              <div class="flex items-center space-x-1">
                <img src="/icons/location.svg" alt="Location Icon" />
                <h1 class="text-white font-medium">Qarji St.</h1>
              </div>
            </div>

            <!-- Sebha -->
            <div class="flex flex-col">
              <h1 class="text-xs text-secondWhite font-normal">Sebha Office</h1>
              <div class="flex items-center space-x-1">
                <img src="/icons/location.svg" alt="Location Icon" />
                <h1 class="text-white font-medium">Ahmed Al-Sharif St.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-start-5 col-span-2 text-white font-light space-y-4 mt-16">
      <h1>Home</h1>
      <h1>About</h1>
      <h1>Services</h1>
      <h1>Projects</h1>
      <h1>Research</h1>
      <h1>Stories</h1>
      <h1>FAQ</h1>
      <h1>Contact Us</h1>
    </div>
    <div class="col-start-7 col-span-1 text-white space-y-4">
      <h1 class="font-semibold">Economic Empowerment</h1>
      <h1>Enjazi</h1>
      <h1>TEC</h1>
      <h1>Tec Talk</h1>
      <h1>Tec Crash</h1>
      <h1>Tec Camp</h1>
      <h1>Benghazi Hackathon</h1>
      <h1>Dedia</h1>
      <h1>Impact Fund</h1>
      <h1>AfriTec</h1>
      <h1>Tec+</h1>
      <h1>Public Private Dialogues</h1>
      <h1>Deraya</h1>
      <h1>Free Zone - Al Mraiseh</h1>
    </div>
    <div class="col-start-9 col-span-1 text-white space-y-4">
      <h1 class="font-semibold mb-10">Digital Transformation</h1>
      <h1>CRA Infrastructure assessment</h1>
      <h1>MOF Information System Management</h1>
      <h1>260 Application</h1>
      <h1>MOP dashboard</h1>
      <h1>wafed platform</h1>
      <h1>qudra platform</h1>
      <h1>voter registration portal for municipal councils</h1>
      <h1>D-crow</h1>
      <h1>Oil & Gas Production Dashboard</h1>
    </div>
    <div class="col-start-11 col-span-2 text-white space-y-4">
      <h1 class="font-semibold mb-10">Digital Transformation</h1>
      <h1>TGP</h1>
      <h1>C4C</h1>
      <h1>Tamkeen</h1>
      <h1>Masar</h1>
      <h1>Qader</h1>
      <h1>LNOB</h1>
    </div>
  </div>
</template>

<script setup>
import subscribeButtonComponent from "./subscribeButtonComponent.vue";
</script>
