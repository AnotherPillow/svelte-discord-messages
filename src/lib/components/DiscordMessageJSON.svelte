<script lang="ts">
    // renders a message from a json object (or parameters) that resemble the webhook payload
    // todo: files/attachments

    import type { APIEmbed } from "$lib/api-types.js";
    import DiscordMessage from "./DiscordMessage.svelte";
    import DiscordMessageContent from "./DiscordMessageContent.svelte";
    import DiscordMessageEmbed from "./DiscordMessageEmbed.svelte";
    import DiscordMessageImage from "./DiscordMessageImage.svelte";

    export let content: string | undefined = undefined;
    export let username: string | undefined = undefined;
    export let avatar_url: string | undefined = undefined;
    export let embeds: APIEmbed[] = [];
    export let message: {
        content?: string;
        username?: string;
        avatar_url?: string;
        embeds?: APIEmbed[];
    } | undefined = undefined;
</script>

<DiscordMessage authorImage={avatar_url ?? message?.avatar_url} authorName={username ?? message?.username}>
    <DiscordMessageContent content={content ?? message?.content}>
        {#each (embeds || message?.embeds || []) as embed}
            <DiscordMessageEmbed embed={embed} />
        {/each}
    </DiscordMessageContent>
</DiscordMessage>