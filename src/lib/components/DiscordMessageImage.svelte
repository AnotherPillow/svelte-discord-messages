<script lang="ts">
    import { onMount } from 'svelte';
    export let src: string;
    export let alt: string = '';
    export let width: number | undefined = undefined;
    export let height: number | undefined = undefined;
</script>
  
<style>
    .image-container {
        display: inline-block;
        max-width: 400px;
        max-height: 300px;
        border-radius: 8px;
        overflow: hidden;
        border: 1px solid #232428;
        background: #232428;
        position: relative;
        margin-top: 6px;
        margin-bottom: 2px;
        vertical-align: top;
        box-shadow: 0 1.5px 6px rgba(0,0,0,0.18);
        transition: box-shadow 0.15s, transform 0.15s;
        cursor: pointer;
    }
  
    .image-container:hover img {
        transform: scale(1.025);
        box-shadow: 0 4px 16px rgba(0,0,0,0.22);
    }
  
    img {
        display: block;
        width: 100%;
        height: auto;
        transition: transform 0.15s;
        background: #232428;
        object-fit: contain;
    }
</style>
  
<div class="image-container" aria-label={alt}>
    <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        draggable="false"
    />
</div>
  