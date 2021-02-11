<template>
  <section>
    <div>
      <div class="links">
        <NLink to="/hashlist" class="button--grey">Hashes Api<IconLink/></NLink>
        <NLink to="/tests" class="button--grey">Tests</NLink>
        <NLink to="/about" class="button--grey">About</NLink>
        <NLink to="/spacing" class="button--grey">Spacing</NLink>
        <NLink to="/topography" class="button--grey">Topography</NLink>
        <NLink to="/texting" class="button--grey">Texting</NLink>
        <NLink to="/starsrotate" class="button--grey">StarsRotate</NLink>
        <NLink to="/todos" class="button--grey">Todos</NLink>
        <NLink to="/maps" class="button--grey">Maps</NLink>
        <NLink to="/modals" class="button--grey">Modals</NLink>
        <NLink to="/tabs" class="button--grey">Tabs</NLink>
        <NLink to="/parent" class="button--grey">Parent-Child</NLink>
      </div>
    </div>
    <sheet /><iconsMDI />
    <div class="my-component">
      {{ $vuetify.lang.t("Ciao come va?") }}
    </div>
  </section>
</template>

<script>
import IconLink from "~/components/IconLink.vue";
import sheet from "~/components/sheet";
import iconsMDI from "~/components/iconsMDI";

export default {
  components: {
    IconLink,
    sheet,
    iconsMDI,
  },
  mounted() {
    console.log(this.$vuetify.breakpoint.width);
  },
  methods: {
    changeLocale() {
      this.$vuetify.lang.current = "sv";
    },
  },
};
</script>

<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #2E495E;
  letter-spacing: 1px;
  font-size: 6em;
}
.green {
  color: #00C48D;
}

.subtitle {
  font-weight: 300;
  font-size: 3em;
  color: #2E495E;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
