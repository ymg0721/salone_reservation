<script setup lang="ts">
useFooterStore().setFooter([
  { path: '', text: 'これからの1日葬・家族葬' },
])

useHead({
  title: '葬儀・葬式なら【1日葬・家族葬のこれから】',
  meta: [
    {
      property: 'og:url',
      content: `${config.public.appOrigin}/`,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'description',
      content: '葬儀・葬式なら「1日葬・家族葬のこれから」にお任せください。【1日葬・家族葬のこれから】では、大手葬儀社の葬儀場で家族葬を安価で執り行えます。事前のご相談も無料で24時間365日受け付けております。',
    },
    {
      property: 'og:title',
      content: '葬儀・葬式なら【1日葬・家族葬のこれから】',
    },
    {
      property: 'og:description',
      content: '葬儀・葬式なら「1日葬・家族葬のこれから」にお任せください。【1日葬・家族葬のこれから】では、大手葬儀社の葬儀場で家族葬を安価で執り行えます。事前のご相談も無料で24時間365日受け付けております。',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: `${config.public.appOrigin}`,
    },
  ],
})
</script>

<template>
  <main class="l-main s-top">
    <p>venere-emi-flowerサロnテスト：0915</p>
  </main>
</template>

<style scoped lang="scss">
</style>
