<template>
  <div class="fullscreen bg-black text-white text-center q-pa-md flex flex-center">
    <div>
      <img src="logo-pink.png" />
      <h1>Coming soon...</h1>
      <q-btn
        color="primary"
        label="Retourner à l'accueil"
        :to="{ name: 'home' }"
        rounded
        no-caps
        flat
      />
    </div>
  </div>
</template>
