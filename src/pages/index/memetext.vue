//src/pages/index/memetext.vue
<template>
    <text class="meme-text">
      <!-- LOL OMG LMAO -->
      {{meme_text}}
    </text>
</template>

<script>
export default {
    props: {
        meme_text: {
            type: String,
            required: true,
        },
    },
};
</script>


<style>
  .meme-text {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
  }
</style>