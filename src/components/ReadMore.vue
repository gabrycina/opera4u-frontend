<template>
	<div>
		<p v-html="formattedString"></p>
		<span v-show="text.length > maxChars">
			<a :href="link" id="readmore" class="coloured" v-show="!isReadMore" v-on:click="triggerReadMore($event, true)">{{moreStr}}</a>
			<a :href="link" id="readmore" class="coloured" v-show="isReadMore" v-on:click="triggerReadMore($event, false)">{{lessStr}}</a>
		</span>
	</div>
</template>

<script>
	export default{
		props: {
			moreStr: {
				type: String,
				default: 'read more'
			},
			lessStr: {
				type: String,
				default: ''
			},
			text: {
				type: String,
				required: true
			},
			link: {
				type: String,
				default: '#'
			},
			maxChars: {
				type: Number,
				default: 100
			}
		},

		data (){
			return{
				isReadMore: false
			}
		},

		computed: {
			formattedString(){
				var val_container = this.text;

				if(!this.isReadMore && this.text.length > this.maxChars){
					val_container = val_container.substring(0,this.maxChars) + '...';
				}

				return(val_container);
			}
		},

		methods: {
			triggerReadMore(e, b){
				if(this.link == '#'){
					e.preventDefault();
				}
				if(this.lessStr !== null || this.lessStr !== '')
					this.isReadMore = b;
			}
		}
	}
</script>
<style>
.coloured {
    background: linear-gradient(180deg, #a6291e 0%, #640800 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>