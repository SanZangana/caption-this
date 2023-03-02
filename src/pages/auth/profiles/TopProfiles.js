import { axiosReq } from "../../../api/axiosDefaults";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Asset from "../../../components/Assets";
import appStyles from "../../../App.module.css";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";

const TopProfiles = ({ mobile }) => {
  const [profileData, setProfileData] = useState({
    // we will use the pageProfile later!
    pageProfile: { results: [] },
    topProfiles: { results: [] },
  });
  const { topProfiles } = profileData;
  const currentUser = useCurrentUser();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/profiles/?ordering=-followers_count"
        );
        setProfileData((prevState) => ({
          ...prevState,
          topProfiles: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]);

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
                <p key={profile.id}>{profile.owner}</p>
              ))}
            </div>
          ) : (
            topProfiles.results.map((profile) => (
              <p key={profile.id}>{profile.owner}</p>
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
