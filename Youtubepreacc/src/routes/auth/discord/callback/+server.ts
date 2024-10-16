import type { RequestEvent } from '@sveltejs/kit';

export async function GET({ url }: RequestEvent) {
    const code = url.searchParams.get('code');
    
    if (!code) {
        return new Response('Authorization code not found', { status: 400 });
    }

    // Fetch the Discord access token
    const clientId = '1294373963274784819';
    const clientSecret = 'WKt5wEeJPbMJL5apwApve32g8u6bjVCO';
    const redirectUri = 'http://localhost:5173/auth/discord/callback';
    
    const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            client_id: clientId,
            client_secret: clientSecret,
            code: code,
            grant_type: 'authorization_code',
            redirect_uri: redirectUri,
            scope: 'identify email',
        }),
    });
    
    const tokenData = await tokenResponse.json();
    
    if (tokenData.error) {
        return new Response('Failed to retrieve access token', { status: 400 });
    }

    // Fetch the user data from Discord using the token
    const userResponse = await fetch('https://discord.com/api/users/@me', {
        headers: {
            Authorization: `Bearer ${tokenData.access_token}`,
        },
    });

    const userData = await userResponse.json();

    // Return user data as JSON
    return new Response(JSON.stringify(userData), { status: 200 });
}
