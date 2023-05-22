<script lang="ts">
  import imagePlaceholder from "@images/No-Image-Placeholder.svg"
  import MyFavCheckbox from "../../atoms/MyFavCheckbox/MyFavCheckbox.svelte";
  // import * as styles from "./MyCard.styles"
  export let image = "";
</script>

<style>
  article {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 10px;
    border-color: aliceblue;
    border-radius: 10px;
    outline: 4px groove;
    color: white;
    background-color: #222;
    width: 180px;
    height: 260px;
    background-image: var(--bgImage);
    background: 
      linear-gradient(
        185deg,
        rgba(255,255,255,0) 0%,
        rgba(0,0,0,.9) 70%,
        rgba(0,0,0,1) 100%
      ),
      var(--bgImage);
    background-size: cover;
  }
  article h4 { 
    font-size: 2em;
    z-index: 2;
    position: relative;
    margin: 0px;
    font-family: inherit;
    font-weight: 700;
    line-height: 1;
    color: black;
    -webkit-text-stroke: .5px white;
  }
  article p {
    margin: 0px;
    padding: 0px;
  }
</style>

<article style="--bgImage:url({image ? image : imagePlaceholder})">
  <MyFavCheckbox />
	
  <h4>
		<slot name="title">
			<span class="title">Sin título!</span>
		</slot>
	</h4>

	<div class="description">
    <p>
      <slot name="description">
        <span class="missing">Sin calificación!</span>
      </slot>
    </p>
    
	</div>

  <div class="shine"></div>
  
  <div class="background" style="back">

	</div>

</article>


