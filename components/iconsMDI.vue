<!-- 
Material Design Icons - JS SVG
custom import only the icons you use granting a much smaller bundle size
https://material.io/design/material-studies/about-our-material-studies.html
https://materialdesignicons.com/
-->
<template>
  <v-card>
    Material Design Icons - JS SVG
    <ul>
      <li>
        <v-icon path="svgPath">{{ svgPath }}</v-icon>
      </li>
      <li><v-icon v-text="svgPath"></v-icon></li>
      <li><v-icon v-text="$vuetify.icons.support"></v-icon></li>
      <li><v-icon v-text="$support"></v-icon></li>
      <li><v-icon v-html="$support"></v-icon></li>
      <li><v-icon v-text="mysteam"></v-icon></li>
      <li><v-icon v-text="icon"></v-icon></li>
    </ul>
  </v-card>
</template>

<script>
import { mdiAccount } from "@mdi/js";

export default {
  name: "iconsMDI",
  props: {
    icon: {
      type: String,
      default: "$support",
    },
  },
  data: () => ({
    svgPath: mdiAccount,
    steam: "steam",
  }),
  computed: {
    mysteam() {
      return "$" + this.steam;
    },
  },
};
