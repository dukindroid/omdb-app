<script lang="ts">
	import type { Props } from './MyInput.proptypes';
	import * as styles from './MyInput.styles';
	import searchIcon from '@images/lupa.svg';

	export let id: Props['id'];
	export let label: Props['label'];
	export let placeholder: Props['placeholder'];
	const coso = () => {};
</script>



<!-- markup (zero or more items) goes here -->
<div class={styles.iconContainer}>
	<label class={styles.label} for={id}>
		{label}
		<input class={styles.input} type="text" name={id} {placeholder} {id} />
	</label>
	<img class={styles.svg} src={searchIcon} alt={'A search icon'} />
</div>
