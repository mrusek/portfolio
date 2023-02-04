<template>
<q-page>
<div class="home"><p style="text-align:center"><h2>{{ $t("home.hello") }}</h2></p>
<p class="bg-opaque"><h4>{{ $t("home.disclaimer") }}
<br>
{{ $t("home.appCode") }}<a href="" target="_blank">{{ $t("home.linkAlt") }}.</a>
<br>
{{ $t("home.contactMe") }}</h4></p></div>
</q-page>
</template>

<script>

export default {
name: 'Home',
components: {

},
data() {
    return {};
  }

}
</script>