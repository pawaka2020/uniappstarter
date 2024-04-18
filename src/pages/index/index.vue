<!-- src/pages/index/index.vue -->
<template>
	<view class="content">
	  	<!-- image -->
	  	<image class="logo" 
			src="/static/logo.png">
		</image>
  
	  	<!-- first text -->
	  	<text class="title">
			{{logo_title_text}}
		</text>
  
	  	<!-- second text -->
	  	<text class="lorem-ipsum">
			{{lorem_ipsum_text}}
		</text>
  
	  	<!-- Meme text component -->
		<MemeText :meme_text="meme_text"/>
	</view>
</template>
  
<script>
  import MemeText from './memetext.vue'; // Update the import path
  
  // Export the component definition
  export default {
	components: {
	  MemeText,
	},
	// Define the initial data properties for the component
	data() {
	  return {
		logo_title_text: 'Hello to my world\n\n',
		lorem_ipsum_text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n\n',
		meme_text: 'I haxxored your mom last night.'
	  };
	},
	// Lifecycle hook called when the component is loaded
	onLoad() {
	  // Any additional logic here
	},
	// Define component methods
	methods: {
	  // Any methods here
	},
  };
</script>
  
<style>
  .content {
	  display: flex;
	  flex-direction: column;
	  align-items: center;
	  justify-content: center;
  }

  .logo {
	  height: 200rpx;
	  width: 200rpx;
	  margin: 200rpx auto 50rpx auto;
  }

  .text-area {
	  display: flex;
	  justify-content: center;
  }

  .title {
	  font-size: 36rpx;
	  color: #8f8f94;
  }
</style>