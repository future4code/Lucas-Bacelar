import { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileCard from "./../components/ProfileCard";
import ProfileButton from "../components/ProfileButton";
import * as api from "../utils/api";

const ProfileContainer = styled.main`
  padding: 20px 20px 0;
  display: grid;
  grid-template-rows: 500px 1fr;

  & > div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export default function Home() {
  const [profile, setProfile] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getNewProfile();
  }, []);

  function getNewProfile() {
    setIsLoading(true);
    api
      .getProfiles()
      .then((response) => {
        setProfile(response.data.profile);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }

  function choosePerson(choice) {
    if (!isLoading && profile) {
      api.choosePerson(profile.id, choice);
      getNewProfile();
    }
  }

  async function ResetMatches() {
    await api.clear();
    getNewProfile();
  }

  let profileInfo, footerBtns;
  if (profile) {
    profileInfo = isLoading ? (
      <h2>Loading...</h2>
    ) : (
      <ProfileCard {...profile} />
    );
    footerBtns = (
      <>
        <ProfileButton text="Escolher" choose={() => choosePerson(true)} />
        <ProfileButton text="Nao escolher" choose={() => choosePerson(false)} />
      </>
    );
  } else {
    profileInfo = <div>Acabou</div>;
    footerBtns = <button onClick={ResetMatches}>Resetar</button>
  }

  return (
    <ProfileContainer>
      {profileInfo}
      <div>
        {footerBtns}
      </div>
    </ProfileContainer>
  );
}
