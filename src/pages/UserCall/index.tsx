import { useEffect, useState, ChangeEvent } from "react";
import axios from "axios";

//Components
import RepoData from "../../components/RepoData";

//Styles
import { Container, Form, UserContainer, RepoContainer } from "./styles";
import UserInfo from "../../components/UserInfo";

interface User {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  repos_url: string;
  location: string;
  email: string;
  bio: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
}

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

const UserCall = () => {
  const [gitUser, setGitUser] = useState("RpThiagoluiz");
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const [dataUser, setDataUser] = useState<User>({
    login: "",
    name: "",
    avatar_url: "",
    html_url: "",
    repos_url: "",
    location: "",
    email: "",
    bio: "",
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
  });

  const GetGitUser = (e: ChangeEvent<HTMLInputElement>) => {
    setGitUser(e.target.value);
  };

  const handleUserCall = () => {
    //MultiCalls - axios doc
    const fetchData = () => {
      const userApi = `https://api.github.com/users/${gitUser}`;
      const repoUserApi = `https://api.github.com/users/${gitUser}/repos`;

      const getUserInfo = axios.get(userApi);
      const getRepoUserInfo = axios.get(repoUserApi);

      axios
        .all([getUserInfo, getRepoUserInfo])
        .then(
          axios.spread((...allData) => {
            const userData = allData[0].data;
            const reposData = allData[1].data;
            setDataUser(userData);
            setRepositories(reposData);
            console.log(reposData);
          })
        )
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  };

  useEffect(() => {
    handleUserCall();
  }, []);

  return (
    <Container>
      <Form>
        <input
          type="text"
          placeholder="Digite usuario valido"
          value={gitUser}
          onChange={GetGitUser}
        />
        <button type="button" onClick={handleUserCall}>
          Procurar
        </button>
      </Form>
      <UserContainer>
        <UserInfo user={dataUser} />
      </UserContainer>
      <RepoContainer>
        <strong>Repositorios</strong>
        <ul>
          {repositories.map((repo) => (
            <RepoData key={repo.name} repository={repo} />
          ))}
        </ul>
      </RepoContainer>
    </Container>
  );
};

export default UserCall;
