export const fetchRecentlyPlayedTracks = async (token) => {
    const limit = 1
    try {
        const result = await fetch(`https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        });

        if (result.status === 200) {
            return await result.json();
        } else {
            console.error("Error al obtener el perfil del usuario");
            return null;
        }
    } catch (error) {
        console.error("Error de red al obtener el perfil del usuario", error);
        return null;
    }
};