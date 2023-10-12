import { useEffect, useState } from "react";

import { redirectToAuthCodeFlow, getAccessToken } from "../api/auth";
import { fetchProfile, fetchUserTopItems } from "../api/users.api";
import { fetchRecentlyPlayedTracks } from "../api/player.api";

import UserInfo from "../components/UserInfo";
import TopItemsInfo from "../components/TopItemsInfo";
import RecentPlayedTrack from "../components/RecentPlayedTrack";

function ProfilePage() {
  const clientId = "5e4fbd8d56b942fbbee3343fa5c3c00c"; // Reemplaza con tu ID de cliente
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  const [user, setUser] = useState({});
  const [topItems, setTopItems] = useState([]);
  const [recentTrack, setRecentTrack] = useState([]);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      if (!code) {
        redirectToAuthCodeFlow(clientId);
      } else {
        const verifier = localStorage.getItem("verifier");
        const accessToken = await getAccessToken(clientId, code, verifier);
        if (accessToken) {
          const profile = await fetchProfile(accessToken);
          const userTopItems = await fetchUserTopItems(accessToken);
          const recentPlayedTrack = await fetchRecentlyPlayedTracks(
            accessToken
          );
          setUser(profile);
          setIsUser(true);
          setTopItems(userTopItems.items);
          setRecentTrack(recentPlayedTrack.items);
        }
      }
    };
    verifyToken();
  }, []);

  return (
    <>
      {user ? <UserInfo user={user} isUser={isUser} /> : <h1>Error</h1>}
      {topItems ? <TopItemsInfo topItems={topItems} /> : <h1>ERROR</h1>}
      {recentTrack ? <RecentPlayedTrack recentTrack={recentTrack} /> : <h1>ERROR</h1>}
    </>
  );
}

export default ProfilePage;
