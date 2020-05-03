const baseApiUrl = ''

export async function get(url: string, query?: any) {
    try {
        return await fetch(`${baseApiUrl}${url}`)
    } catch (error) {
        throw error
    }
}