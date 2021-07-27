import "./index.css";

import fetchData from "../../utils/fetchData";
import Project from "../../components/Project";

const PortfolioPage = () => {
  const getGithubData = async () => {
    const data = await fetchData(
      `https://api.github.com/users/leefarnell/repos`
    );
    console.log(data);
  };

  getGithubData();

  return (
    <div className="projects">
      <Project name="My Project" />
      <Project name="My Project 2" />
    </div>
  );
};

export default PortfolioPage;
