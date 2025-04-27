<script lang="ts">
    import '@fontsource-variable/open-sans';
    import { marked } from 'marked';
    import './DiscordMessageContent.style.css'
  
    export let content: string = '';
    export let contentFirst: boolean = true
  
    let mdhtml = marked.parse(content
        .replace(/__(.*?)__/g, '<u>$1</u>')
        .replace(/~~(.*?)~~/g, '<s>$1</s>')
    )
    
</script>

<div class="content">
    {#if contentFirst}
        {@html mdhtml}
    {/if}
    <slot />
    {#if !contentFirst}
        {@html mdhtml}
    {/if}
</div>