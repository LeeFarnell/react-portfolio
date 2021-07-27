import "./index.css";

import fetchData from "../../utils/fetchData";
import Project from "../../components/Project";

const getGithubData = async () => {
  const data = await fetchData(`https://api.github.com/users/leefarnell/repos`);
  console.log(data);
};

getGithubData();

const PortfolioPage = () => {
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default PortfolioPage;
