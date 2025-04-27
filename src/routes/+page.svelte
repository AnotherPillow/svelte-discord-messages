<script>
    import DiscordMessage from "$lib/components/DiscordMessage.svelte";
    import DiscordMessageContent from "$lib/components/DiscordMessageContent.svelte";
    import DiscordMessageImage from "$lib/components/DiscordMessageImage.svelte";

</script>
<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<DiscordMessage
  authorName="User Username"
  authorColour="#575287"
  authorImage="https://cdn.nest.rip/uploads/8b364056-fb01-470a-bda3-5bbb3b2c1365.png"
>
    <DiscordMessageContent content={`Hello **bold** __underline__ *italic* _italic two_ \`code\``}>
        <DiscordMessageImage
            src="https://cdn.nest.rip/uploads/de329044-9e85-4a72-8b37-f7352df4da22.png"
            alt="desert shoveling"
        />
    </DiscordMessageContent>
</DiscordMessage>