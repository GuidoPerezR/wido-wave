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
      <div className="container">
        <div className="d-flex justify-content-between mt-4">
          <div className="d-flex align-items-center">
            <img
              src="../src/assets/spotify.png"
              className="img-fluid"
              alt=""
              width="100px"
              height="auto"
            />
          </div>
          <div className="d-flex align-items-center gap-2">
            <p>WIDOWAVE</p>
            <img
              src="../src/assets/widowave.png"
              className="img-fluid"
              alt=""
              width="50px"
              height="auto"
            />
          </div>
        </div>
        <div className="container mt-4">
          <div className="row align-items-center">
            <div className="col">
              {user ? <UserInfo user={user} isUser={isUser} /> : <h1>Error</h1>}
            </div>
            <div className="col">
              {recentTrack ? (
                <RecentPlayedTrack recentTrack={recentTrack} />
              ) : (
                <h1>ERROR</h1>
              )}
            </div>
          </div>
          <div className="row">
            <div className="col">
              {topItems ? <TopItemsInfo topItems={topItems} /> : <h1>ERROR</h1>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
