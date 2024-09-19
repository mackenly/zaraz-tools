/**
 * sha256
 * Generates a SHA-256 hash of the given data
 * @param data The data to hash
 * @param lowercase Whether to lowercase the input data before hashing (default: false)
 * @returns: Promise of the hashed string
 * @throws: Error if the hashing fails
 * @since 2024-09-19
 */
export async function sha256(
    data: string,
    lowercase: boolean = false
): Promise<string> {
    try {
        const digest = await crypto.subtle.digest(
            { name: 'SHA-256' },
            // eslint-disable-next-line no-undef
            new TextEncoder().encode(lowercase ? data.toLocaleLowerCase() : data)
        );
        return [...new Uint8Array(digest)]
            .map(v => v.toString(16).padStart(2, '0'))
            .join('');
    } catch (error) {
        console.error(error);
        throw error;
    }
}