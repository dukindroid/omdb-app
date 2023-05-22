<script lang="ts">
	import MyInput from '../sharing/atoms/MyInput/MyInput.svelte';
	import MyCard from '../sharing/molecules/MyCard/MyCard.svelte';
	import * as styles from './Home.styles';
	import posterImg from '@images/ironman.webp';
	// <img src={poster} alt="Algún poster de película" width="210" height="300" />
</script>

<h1 class={styles.h1}>Henry's OMDB App</h1>
<MyInput label="Buscar:" placeholder="escribe algo..." />
<MyCard image={posterImg}>
	<span slot="title">Ironman</span>
	<span slot="description">⭐: 4.5 / 5 </span>
</MyCard>
<MyCard />
