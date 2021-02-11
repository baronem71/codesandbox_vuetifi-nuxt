<template>
<div>
<p><NLink to="/" class="button--grey">Back</NLink></p>
      <form 
        action=""
        method="post" 
        @submit.stop.prevent="submit"
        ref="myform"
        class="myform"
      >
        <label for="secretText">Secret text:</label>
        <input type="text" v-model="secretText" required id="secretText" name="secretText" size="30"><br><br>
        <label for="remainingViews">Max number of views:</label>
        <input type="text" v-model="remainingViews" required id="remainingViews" name="remainingViews"><br><br>
        <label for="expiresAt">expires At:</label>
        <input type="text" v-model="expiresAt" id="expiresAt" name="expiresAt"><br><br>
        <!-- <input type="hidden" id="createdAt" name="createdAt"> -->
        <input 
          type="submit"
          value="Submit" 
          class="bt-post"
        >
      </form><br><br>
      <div>{{ loading ? postResult : "Submit" }}</div>
</div>
</template>
<script>
// import axios from 'axios';

export default {
  name: "HashNew",
  data: () => ({
    loading: false,
    postResult: 'Sending Data...',
    postError: false,
    secretText : null,
    remainingViews: null,
    expiresAt: Date.now() + 1000000,
  }),
  methods: {
    async submit() {
      this.loading = true;
      const url = 'https://node-server-api.glitch.me/secrets';
      
      //let myform = new FormData(this.$refs.myform);
      // let myform = new FormData();
      // myform.append("secretText", this.secretText);
      // myform.append("remainingViews",  parseInt(this.remainingViews));
      let myform = {
          secretText : this.secretText,
          remainingViews: parseInt(this.remainingViews),
          //expiresAt: this.expiresAt,
          //createdAt: Date.now()
        };
      console.log('host %s', url);
      console.log(JSON.stringify(myform));
      //-- PREFLIGHT REQUEST
      // const req1 = new Request(url,{
      // method: 'OPTIONS',//
      // //mode: 'same-origin',
      // //cache: "no-cache",
      // //credentials: 'include',//omit
      // //referrerPolicy: 'origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      // headers: {
      //   'Access-Control-Request-Method': 'PUT',
      //   'Access-Control-Request-Headers': 'Content-Type, Origin' //notifies the server, it will be sent with a Content-Type header
      // //  'Content-Type': 'application/x-www-form-urlencoded',
      //   // 'Content-Type': 'multipart/form-data',
      
      // }
      // });

      const req = new Request(url,{
        method: 'POST',//'HEAD',
        mode: 'cors', //no-cors
        //mode: 'same-origin',
        //cache: "no-cache",
        //credentials: 'include',//omit
        //referrerPolicy: 'origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        headers: {
          // 'Origin': 'https://9ev8y.sse.codesandbox.io',
          'Content-Type': 'application/json',
          //'Content-Type': 'application/x-www-form-urlencoded',
          //'Content-Type': 'multipart/form-data',
        
        },
        //body: myform,
        body: JSON.stringify(myform)
      });

      await fetch(req).then((res) => {
        return res;
      }).then((res) => {
        console.log(res)
        this.postResult = JSON.stringify(res);
      }).catch((err) =>{
        console.log(err)
        this.postError = true;
        this.postResult = err;
      });

      // await axios(
      //     {
      //       method: 'post',
      //       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      //       url: url,
      //       data: {

      //       }
      //     }
      // )
      // .then(res => {
      //   console.log(res)
      //   this.postResult = res;
      // })
      // .catch(err => {
      //   console.log(err)
      //   this.postError = true;
      //   this.postResult = err;
      // })
      // .finally(() => {
      //     if (!this.postError) {
      //       this.loading = false
      //     }
      // });

      // this.$router.push({
      //   path: '/secrets',
      //   query:{
      //     secretText : this.secretText,
      //     remainingViews: this.remainingViews,
      //     expiresAt: this.expiresAt,
      //     createdAt: Date.now()
      //   }
      // });
    },
  }
}
</script>
<style>
form input {
  border-radius:10px;
	border:1px solid blue;
}
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