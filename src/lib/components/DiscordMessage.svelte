<script lang="ts">
    import '@fontsource-variable/open-sans';
    export let authorName: string = 'User';
    export let authorColour: string = '#FFFFFF';
    export let authorImage: string = 'https://cdn.nest.rip/uploads/8b364056-fb01-470a-bda3-5bbb3b2c1365.png';
    export let timeStamp: Date = new Date();
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
        <span class="timestamp">{timeStamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        <slot />
    </div>
</div>
