<script lang="ts">
    import '@fontsource-variable/open-sans';
    export let authorName: string = 'User';
    export let authorColour: string = '#FFFFFF';
    export let authorImage: string = 'https://discord.com/assets/9855d7e3b9780976.png'; // default green pfp
    export let timeStamp: Date = new Date("2026-05-01");
</script>
  
<style>
    .discord-message {
        display: flex;
        align-items: flex-start;
        background: #313338;
        padding: 16px;
        border-radius: 8px;
        font-family: 'Open Sans Variable', 'Open Sans', Arial, sans-serif;
        max-width: 520px;
        color: #dbdee1;
        box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        margin-bottom: 2px;
    }
  
    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 16px;
        flex-shrink: 0;
        background: #232428;
        object-fit: cover;
    }
  
    .message-content {
        flex: 1;
        min-width: 0;
    }
  
    .author {
        font-weight: 600;
        font-size: 16px;
        line-height: 1.2;
        vertical-align: middle;
        user-select: text;
        word-break: break-word;
    }
  
    .timestamp {
        color: #949ba4;
        font-size: 12px;
        margin-left: 2px;
        vertical-align: middle;
        user-select: none;
    }
</style>
  
<div class="discord-message">
    <img class="avatar" src={authorImage} alt="User avatar" />
    <div class="message-content">
        <span class="author" style="color: {authorColour}">{authorName}</span>
        <span class="timestamp">{Date.now() - timeStamp.getTime() > 24 * 60 * 60 * 1000  // true if >24 hours ago
            ? timeStamp.toLocaleString([], {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
            })
            : timeStamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        <slot />
    </div>
</div>
