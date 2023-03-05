import React from "react";
import Container from "react-bootstrap/Container";
import appStyles from "../../../App.module.css";
import Asset from "../../../components/Assets";
import { useProfileData } from "../../../contexts/ProfileDataContext";
import Profile from "./Profile";

const TopProfiles = ({ mobile }) => {
  const { topProfiles } = useProfileData();

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {topProfiles.results.length ? (
        <>
          <p>Top Picks For You</p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {topProfiles.results.slice(0, 4).map((profile) => (
                <Profile key={profile.id} profile={profile} mobile />
              ))}
            </div>
          ) : (
            topProfiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} />
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default TopProfiles;
