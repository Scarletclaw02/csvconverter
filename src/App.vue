<template>
  <v-app>
    <v-main>
      <v-navigation-drawer>
        <router-link to="/">Startseite</router-link>
        <router-link to="/orders">Bestellungen</router-link>
      </v-navigation-drawer>
      <router-view />
    </v-main>
  </v-app>
</template>

<script></script>
