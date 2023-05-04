import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../../UserContext";
import RenderTerritories from "../../components/RenderTerritories";

import territories from './../../data/territories.json';

function Home() {
  const [allTerritories, setAllTerritories] = useState([]);
  const { isAuthorize } = useContext(UserContext);

  const fetchTerritories = () => {
    fetch('https://netzwelt-devtest.azurewebsites.net/Territories/All')
    .then(res => res.json())
    .then(data => {
      setAllTerritories(data.data);
    })
    .catch(error => {
      setAllTerritories(territories.data);
    });
  };

  useEffect(() => {
    fetchTerritories();
  }, []);

  return (
    (isAuthorize) ?
      <RenderTerritories allTerritories={allTerritories} />
    :
      <Navigate to="/account/login" />
  );
};

export default Home;
