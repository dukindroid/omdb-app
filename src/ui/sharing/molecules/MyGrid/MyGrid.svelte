<style>
  .basic-grid {
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-items: center;
  }
</style>

<slot class="basic-grid">
  
</slot>