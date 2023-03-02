import React from "react";
import { Container } from "react-bootstrap";
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
          <p>Most followed profiles.</p>
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
