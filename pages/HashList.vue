<template>
<div>
<span>{{ postResult }}</span>
<p><NLink to="/" class="button--grey">Back home</NLink></p>
<p><NLink to="/hashnew" class="button--grey">Create New Hash</NLink></p>
<ul class="ultop">
  <li v-for="item in items">
    <ul class="ulcontent">
      <li><button @click="Check(item.hash)" class="bt-post">Check</button></li>
      <li>{{ item.hash }}</li>
      <li>secretText:{{ item.secretText }}</li>
      <li v-bind:class="{ 'text-red': (item.expiresAt < Date.now()) }">
        expiresAt:{{ item.expiresAt }}
      </li>
      <li v-bind:class="{ 'text-red': (item.remainingViews <= 0) }">
        remainingViews:{{ item.remainingViews }}
      </li>
    </ul>
  </li>
</ul>
</div>
</template>
<script>
//import axios from 'axios';

export default {
  name: "HashList",
  data: () => ({
    items: [],
    postResult: null,
  }),
  // activated() {
  //   // Call fetch again if last fetch more than 30 sec ago
  //   if (this.$fetchState.timestamp <= Date.now() - 30000) {
  //     this.$fetch()
  //   }
  // },
  async fetch() {
    this.items = await fetch(
      'https://node-server-api.glitch.me/secrets'
    ).then(res => res.json());
  },
  methods: {
    //Would like to use the button to do this:
    async Check(hash) {
      this.postResult = '';
      const url = 'https://node-server-api.glitch.me/secrets/' + hash;
      console.log('url:',url);

      this.postResult = await fetch(
      url
      ).then(res => res.json()).catch((error) => {
        this.postResult = error;
        console.error(error);
      });
      // await axios(
      //     {
      //       method: 'get',
      //       headers: { 'Content-Type': 'text/plain' },
      //       url: 'https://node-server-api.glitch.me/secrets/' + hash,
      //       data: {}
      //     }
      // )
      // .then(response => {
      //   console.log(response)
      //   this.postResult = response;
      // })
      // .catch(err => {
      //   console.log(err)
      // })
    }
  }  
}
</script>
<style>
.text-red {
  color: red;
}
.ultop ul {
  margin: 0;
  padding: 0;
  list-style:square;
  /* list-style-type:disc; */
}
.ultop ul li {
  display: inline;
}
.ulcontent ul {
  list-style:disc;
}
.ulcontent ul li {
  /* list-style-type:square; */
  display: inline;
}
.bt-post {
	box-shadow: 3px 4px 0px 0px #899599;
	background:linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);
	background-color:#ededed;
	border-radius:10px;
	border:1px solid #d6bcd6;
	display:inline-block;
	cursor:pointer;
	color:#3a8a9e;
	font-family:Arial;
	font-size:17px;
	padding:1px 20px;
	text-decoration:none;
	text-shadow:0px 1px 0px #e1e2ed;
}
.bt-post:hover {
	background:linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);
	background-color:#bab1ba;
}
.bt-post:active {
	position:relative;
	top:1px;
}
</style>