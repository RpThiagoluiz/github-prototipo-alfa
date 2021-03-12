//Styles
import { LiContainer } from "./styles";

interface RepoDataProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

const RepoData = ({ repository }: RepoDataProps) => (
  <LiContainer>
    <strong>{repository.name}</strong>
    <p>{repository.description}</p>
    <a href={repository.html_url} target="_blank" rel="noreferrer noopener">
      <button>Acessar Repo</button>
    </a>
  </LiContainer>
);

export default RepoData;
