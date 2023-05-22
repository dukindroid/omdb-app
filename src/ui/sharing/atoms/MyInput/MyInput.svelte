<script lang="ts">
	import type { Props } from './MyInput.proptypes';
	import * as styles from './MyInput.styles';
	import searchIcon from '@images/lupa.svg';

	export let label: Props['label'];
	export let placeholder: Props['placeholder'];
</script>



<!-- markup (zero or more items) goes here -->
<div class={styles.iconContainer}>
	<label class={styles.label} for="searchinput">
		{label}
		<input class={styles.input} type="text" name="searchinput" {placeholder} id="MyInput" />
	</label>
	<img class={styles.svg} src={searchIcon} alt={'A search icon'} />
</div>
