<script lang="ts">
    // this code is derived from ES-Bot
    import type { APIEmbed } from "$lib/api-types.js";

    export let embed: APIEmbed;
</script>

<div class="message-embed"
    style={`
        --colour: #${(embed.color ? embed.color.toString(16) as string : '3D3D3D').padStart(6, '00') ?? '3D3D3D'};
    `}
>
    {#if embed.author}
        <h2 class="embed-author">
            {#if embed.author.proxy_icon_url}
                <img alt="author icon" src={embed.author.proxy_icon_url} width="24" height="24">
            {/if}
            {embed.author.name ?? ''}
        </h2>
    {/if}
    
    {#if embed.title}
        {#if embed.url}
            <a class="embed-head-url" href={embed.url}>
                <h2 class="embed-head">{embed.title ?? ''}</h2>
            </a>
        {:else}
            <h2 class="embed-head">{embed.title ?? ''}</h2>
        {/if}
    {/if}
    
    <p class="embed-body">{embed.description}</p>

    {#each embed.fields as field}
        <div class="embed-field" style={`--display: ${field.inline ? 'inline-block' : 'unset'}`}>
            <h3>{field.name}</h3>
            <p>{field.value}</p>
            <hr>
        </div>
    {/each}

    {#if embed.thumbnail}
        <img class="embed-thumbnail" alt="embed thumbnail" src={embed.thumbnail.proxy_url ?? embed.thumbnail.url} height={embed.thumbnail.height} width={embed.thumbnail.width}>
    {/if}

    {#if embed.image}
        <img class="embed-image" alt="embed main big" src={embed.image.proxy_url ?? embed.image.url} height={embed.image.height} width={embed.image.width}>
    {/if}
    
    {#if embed.footer}
        <p class="embed-footer">
            {#if embed.footer.proxy_icon_url}
                <img alt="footericon " src={embed.footer.proxy_icon_url} width="16" height="16">
            {/if}
            {embed.footer.text ?? ''}
        </p>
    {/if}
    
    {#if embed.timestamp}
        <p class="embed-timestamp">
            {new Date(embed.timestamp).toLocaleString()}
        </p>
    {/if}
</div>

<style>
    .message-embed {
        border-left: 4px solid var(--colour);
        padding: 10px;
        padding-left: 20px;
        background-color: #0f0f0f;
        min-width: 10em;
        min-height: 5em;
    }
    
    .embed-author {
        margin: 0.3em 0;
    }

    .embed-head-url {
        text-decoration: none;

        :hover {
            text-decoration: underline;
        }
    }

    .embed-head {
        width: fit-content;
    }
    
    .embed-body {

    }

    .embed-field {
        display: var(--display);
        width: fit-content;
        margin: 4px;
    }
    
    .embed-thumbnail {
        
    }
    
    .embed-image {

    }

    .embed-footer {
        color: rgb(104, 104, 104);
        font-size: 0.8em;
    }
    .embed-timestamp {
        color: rgb(104, 104, 104);
        font-size: 0.8em;
    }
    
</style>