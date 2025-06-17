export interface Replacement {
    /** Tag name to match (without brackets) */
    matchTag: string;
    /** Text to replace the tag with */
    text: string;
    /** Is the tag self-closing?  */
    isSelfClosing?: boolean;
}
export interface Options {
    /** Exclude content from the set of tags. Defaults to all HTML metadata tags. */
    excludeContentFromTags?: string[];
    /** Whitespace is trimmed by default. Set this to true to preserve whitespace. */
    preserveWhitespace?: boolean;
    /** Replace a tag with some text. Flag self-closing tags with isSelfClosing: true. */
    replacements?: Replacement[];
}
export declare const defaultExcludeContentFromTags: string[];
/**
 * Extract text from HTML. Excludes content from metadata tags by default.
 * For example, script and style. Reduces multiple spaces to a single space
 * and trims whitespace from the start and end by default. Set `preserveWhitespace`
 * to `true` to disable this behavior. Optionally, replace tags with text.
 */
export declare const extractText: (html: string, options?: Options) => string;
