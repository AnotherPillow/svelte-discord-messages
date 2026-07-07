/**
 * this code is taken from Discord.js, licensed under the MIT license.
 * https://github.com/discordjs/discord-api-types/blob/e2f8effd038eb8893169bae970893276edadcd8c/payloads/v9/message.ts
 * 
 * Modified slightly to remove clips stuff
 */


export interface APIEmbed {
	/**
	 * Title of embed
	 *
	 * Length limit: 256 characters
	 */
	title?: string;
	/**
	 * Type of embed (always "rich" for webhook embeds)
	 */
	type?: EmbedType;
	/**
	 * Description of embed
	 *
	 * Length limit: 4096 characters
	 */
	description?: string;
	/**
	 * URL of embed
	 */
	url?: string;
	/**
	 * Timestamp of embed content
	 */
	timestamp?: string;
	/**
	 * Color code of the embed
	 */
	color?: number;
	/**
	 * Footer information
	 *
	 * @see {@link https://discord.com/developers/docs/resources/message#embed-object-embed-footer-structure}
	 */
	footer?: APIEmbedFooter;
	/**
	 * Image information
	 *
	 * @see {@link https://discord.com/developers/docs/resources/message#embed-object-embed-image-structure}
	 */
	image?: APIEmbedImage;
	/**
	 * Thumbnail information
	 *
	 * @see {@link https://docs.discord.com/developers/resources/message#embed-object-embed-image-structure}
	 */
	thumbnail?: APIEmbedImage;
	/**
	 * Video information
	 *
	 * @see {@link https://discord.com/developers/docs/resources/message#embed-object-embed-video-structure}
	 */
	video?: APIEmbedVideo;
	/**
	 * Provider information
	 *
	 * @see {@link https://discord.com/developers/docs/resources/message#embed-object-embed-provider-structure}
	 */
	provider?: APIEmbedProvider;
	/**
	 * Author information
	 *
	 * @see {@link https://discord.com/developers/docs/resources/message#embed-object-embed-author-structure}
	 */
	author?: APIEmbedAuthor;
	/**
	 * Fields information
	 *
	 * Length limit: 25 field objects
	 *
	 * @see {@link https://discord.com/developers/docs/resources/message#embed-object-embed-field-structure}
	 */
	fields?: APIEmbedField[];
	/**
	 * Embed flags combined as a bitfield
	 *
	 * @see {@link https://docs.discord.com/developers/resources/message#embed-object-embed-flags}
	 * @see {@link https://en.wikipedia.org/wiki/Bit_field}
	 */
	flags?: EmbedFlags;
}



/**
 * @see {@link https://discord.com/developers/docs/resources/message#embed-object-embed-types}
 */
export enum EmbedType {
	/**
	 * Generic embed rendered from embed attributes
	 */
	Rich = 'rich',
	/**
	 * Image embed
	 */
	Image = 'image',
	/**
	 * Video embed
	 */
	Video = 'video',
	/**
	 * Animated gif image embed rendered as a video embed
	 */
	GIFV = 'gifv',
	/**
	 * Article embed
	 */
	Article = 'article',
	/**
	 * Link embed
	 */
	Link = 'link',
	/**
	 * Auto moderation alert embed
	 *
	 * @unstable This embed type is currently not documented by Discord, but it is returned in the auto moderation system messages.
	 */
	AutoModerationMessage = 'auto_moderation_message',
	/**
	 * Poll result embed
	 */
	PollResult = 'poll_result',
}

/**
 * @see {@link https://docs.discord.com/developers/resources/message#embed-object-embed-flags}
 */
export enum EmbedFlags {
	/**
	 * This embed is a fallback for a reply to an activity card
	 */
	IsContentInventoryEntry = 1 << 5,
}

/**
 * @see {@link https://docs.discord.com/developers/resources/message#embed-object-embed-media-flags}
 */
export enum EmbedMediaFlags {
	/**
	 * This image is animated
	 */
	IsAnimated = 1 << 5,
}

/**
 * @deprecated Use {@link APIEmbedImage} instead.
 */
export interface APIEmbedThumbnail extends APIEmbedImage {}

/**
 * @see {@link https://discord.com/developers/docs/resources/message#embed-object-embed-video-structure}
 */
export interface APIEmbedVideo {
	/**
	 * Source url of video
	 */
	url?: string;
	/**
	 * A proxied url of the video
	 */
	proxy_url?: string;
	/**
	 * Height of video
	 */
	height?: number;
	/**
	 * Width of video
	 */
	width?: number;
	/**
	 * The video's media type
	 *
	 * @see {@link https://en.wikipedia.org/wiki/Media_type}
	 */
	content_type?: string;
	/**
	 * ThumbHash placeholder of the video
	 *
	 * @see {@link https://evanw.github.io/thumbhash/}
	 */
	placeholder?: string;
	/**
	 * Version of the placeholder
	 */
	placeholder_version?: number;
	/**
	 * Description (alt text) for the video
	 */
	description?: string;
	/**
	 * Embed media flags combined as a bitfield
	 *
	 * @see {@link https://docs.discord.com/developers/resources/message#embed-object-embed-media-flags}
	 * @see {@link https://en.wikipedia.org/wiki/Bit_field}
	 */
	flags?: EmbedMediaFlags;
}

/**
 * @see {@link https://discord.com/developers/docs/resources/message#embed-object-embed-image-structure}
 */
export interface APIEmbedImage {
	/**
	 * Source url of image (only supports http(s) and attachments)
	 */
	url: string;
	/**
	 * A proxied url of the image
	 */
	proxy_url?: string;
	/**
	 * Height of image
	 */
	height?: number;
	/**
	 * Width of image
	 */
	width?: number;
	/**
	 * The image's media type
	 *
	 * @see {@link https://en.wikipedia.org/wiki/Media_type}
	 */
	content_type?: string;
	/**
	 * ThumbHash placeholder of the image
	 *
	 * @see {@link https://evanw.github.io/thumbhash/}
	 */
	placeholder?: string;
	/**
	 * Version of the placeholder
	 */
	placeholder_version?: number;
	/**
	 * Description (alt text) for the image
	 */
	description?: string;
	/**
	 * Embed media flags combined as a bitfield
	 *
	 * @see {@link https://docs.discord.com/developers/resources/message#embed-object-embed-media-flags}
	 * @see {@link https://en.wikipedia.org/wiki/Bit_field}
	 */
	flags?: EmbedMediaFlags;
}

/**
 * @see {@link https://discord.com/developers/docs/resources/message#embed-object-embed-provider-structure}
 */
export interface APIEmbedProvider {
	/**
	 * Name of provider
	 */
	name?: string;
	/**
	 * URL of provider
	 */
	url?: string;
}

/**
 * @see {@link https://discord.com/developers/docs/resources/message#embed-object-embed-author-structure}
 */
export interface APIEmbedAuthor {
	/**
	 * Name of author
	 *
	 * Length limit: 256 characters
	 */
	name: string;
	/**
	 * URL of author
	 */
	url?: string;
	/**
	 * URL of author icon (only supports http(s) and attachments)
	 */
	icon_url?: string;
	/**
	 * A proxied url of author icon
	 */
	proxy_icon_url?: string;
}

/**
 * @see {@link https://discord.com/developers/docs/resources/message#embed-object-embed-footer-structure}
 */
export interface APIEmbedFooter {
	/**
	 * Footer text
	 *
	 * Length limit: 2048 characters
	 */
	text: string;
	/**
	 * URL of footer icon (only supports http(s) and attachments)
	 */
	icon_url?: string;
	/**
	 * A proxied url of footer icon
	 */
	proxy_icon_url?: string;
}

/**
 * @see {@link https://discord.com/developers/docs/resources/message#embed-object-embed-field-structure}
 */
export interface APIEmbedField {
	/**
	 * Name of the field
	 *
	 * Length limit: 256 characters
	 */
	name: string;
	/**
	 * Value of the field
	 *
	 * Length limit: 1024 characters
	 */
	value: string;
	/**
	 * Whether or not this field should display inline
	 */
	inline?: boolean;
}

/**
 * @see {@link https://discord.com/developers/docs/resources/message#attachment-object-attachment-structure}
 */
export interface APIAttachment {
	/**
	 * Attachment id
	 */
	id: Snowflake;
	/**
	 * Name of file attached
	 */
	filename: string;
	/**
	 * The original filename of the upload with special characters preserved
	 *
	 * This will be present when the filename contains special characters (e.g. Cyrillic),
	 * in which case the `filename` field will be a sanitized version without those characters
	 */
	title?: string;
	/**
	 * Description (alt text) for the file (max 1024 characters)
	 */
	description?: string;
	/**
	 * The attachment's media type
	 *
	 * @see {@link https://en.wikipedia.org/wiki/Media_type}
	 */
	content_type?: string;
	/**
	 * Size of file in bytes
	 */
	size: number;
	/**
	 * Source url of file
	 */
	url: string;
	/**
	 * A proxied url of file
	 */
	proxy_url: string;
	/**
	 * Height of file (if image or video)
	 */
	height?: number | null;
	/**
	 * Width of file (if image or video)
	 */
	width?: number | null;
	/**
	 * ThumbHash placeholder (if image or video)
	 *
	 * @see {@link https://evanw.github.io/thumbhash/}
	 */
	placeholder?: string;
	/**
	 * Version of the placeholder (if image or video)
	 */
	placeholder_version?: number;
	/**
	 * Whether this attachment is ephemeral
	 *
	 * @remarks Ephemeral attachments will automatically be removed after a set period of time. Ephemeral attachments on messages are guaranteed to be available as long as the message itself exists.
	 */
	ephemeral?: boolean;
	/**
	 * The duration of the audio file (currently for voice messages)
	 */
	duration_secs?: number;
	/**
	 * Base64 encoded bytearray representing a sampled waveform (currently for voice messages)
	 */
	waveform?: string;
	/**
	 * Attachment flags combined as a bitfield
	 */
	flags?: AttachmentFlags;
}

/**
 * @see {@link https://docs.discord.com/developers/resources/message#attachment-object-attachment-flags}
 */
export enum AttachmentFlags {
	/**
	 * This attachment is a Clip from a stream
	 *
	 * @see {@link https://support.discord.com/hc/en-us/articles/16861982215703}
	 */
	IsClip = 1 << 0,
	/**
	 * This attachment is the thumbnail of a thread in a media channel, displayed in the grid but not on the message
	 */
	IsThumbnail = 1 << 1,
	/**
	 * This attachment has been edited using the remix feature on mobile
	 *
	 * @deprecated
	 */
	IsRemix = 1 << 2,
	/**
	 * This attachment was marked as a spoiler and is blurred until clicked
	 */
	IsSpoiler = 1 << 3,
	/**
	 * This attachment is an animated image
	 */
	IsAnimated = 1 << 5,
}

export type Snowflake = string;