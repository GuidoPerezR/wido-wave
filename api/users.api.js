export const fetchProfile = async (token) => {
    try {
        const result = await fetch("https://api.spotify.com/v1/me", {
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

export const fetchUserTopItems = async (token) => {
    const limit = 5
    const timeRange = 'short_term'

    try {
        const result = await fetch(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=${limit}`, {
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
}