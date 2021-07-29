import Loading from "../../components/Loading";
import Project from "../../components/Project";
import useFetch from "../../hooks/useFetch";

import "./index.css";

const PortfolioPage = () => {
  const { data, error, loading } = useFetch(
    "https://api.github.com/users/leefarnell/repos"
  );

  if (loading) {
    return (
      <div className="on-load">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>ERROR</div>;
  }
  console.log(data);
  return (
    <div className="projects">
      {data.map((repo) => {
        return (
          <div className="project-card">
            <Project repo={repo} />
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioPage;
