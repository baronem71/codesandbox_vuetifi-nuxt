//https://materialdesignicons.com/
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import VueI18n from 'vue-i18n';
import messages from '~/i18n';
//import colors from 'vuetify/es5/util/colors'

// Translation provided by Vuetify (javascript)
import en from "vuetify/es5/locale/en"; //English
import it from "vuetify/es5/locale/it"; //Italian
import fr from "vuetify/es5/locale/fr"; //French
import de from "vuetify/es5/locale/de"; //German
import es from "vuetify/es5/locale/es"; //Spanish
import cs from "vuetify/es5/locale/cs"; //Czech
import hu from "vuetify/es5/locale/hu"; //Hungarian
import et from "vuetify/es5/locale/et"; //Estonian
import lt from "vuetify/es5/locale/lt"; //Lithuanian
import lv from "vuetify/es5/locale/lv"; //Latvian
import pl from "vuetify/es5/locale/pl"; //Polish
import ro from "vuetify/es5/locale/ro"; //Romanian
import ru from "vuetify/es5/locale/ru"; //Russian
import zhHans from "vuetify/es5/locale/zh-Hans"; //Chinese
import ja from "vuetify/es5/locale/ja"; //Japanese
import th from "vuetify/es5/locale/th"; //Thai


const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

// new VuetifyLoaderPlugin({
//   progressiveImages: {
//     size: 12, // Use higher-resolution previews
//     sharp: true // Use sharp instead of ImageMagick
//   }
// })

const MY_ICONS = {
  account: "mdi-account",
  accallert: "mdi-account-alert",
  close: "mdi-alpha-x-circle-outline",
  delete: "mdi-delete-forever",
  clear: "mdi-autorenew",
  support: "mdi-lifebuoy",
  steam: "mdi-steam-box"
};


export default {
  customVariables: ["~/assets/variables.scss"],
  defaultAssets: false,
  // defaultAssets: {
  //   font: {
  //     family: 'Roboto' ,
  //     size: 14
  //   },
  //   icons: {
  //     iconfont: "mdi", // default - only for display purposes
  //     //iconfont: "mdiSvg", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  //     values: MY_ICONS
  //   },
  // },
  icons: {
    iconfont: "mdi", // default - only for display purposes
    //iconfont: "mdiSvg", // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    values: MY_ICONS
  },
  lang: {
    t: (key, ...params) => i18n.t(key, params),
  },
  // lang: {
  //   locales: {
  //     en,
  //     it,
  //     fr,
  //     de,
  //     es,
  //     cs,
  //     hu,
  //     et,
  //     lt,
  //     lv,
  //     pl,
  //     ro,
  //     ru,
  //     zhHans,
  //     ja,
  //     th
  //   },
  //   current: "it"
  // },
  theme: {
    dark: true
  }
};
