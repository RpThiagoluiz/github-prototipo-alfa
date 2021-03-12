//styles
import { UserHeader, UserMain, UserFooter } from "./styles";

interface UserInfoProps {
  user: {
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
  };
}

const UserInfo = ({ user }: UserInfoProps) => {
  return (
    <li>
      <UserHeader>
        <img src={user.avatar_url} alt={`Avatar do ${user.name}`} />
        <strong>{user.name}</strong>
        <small>{user?.location ?? "Local Nao infromado"}</small>
        <small>{user?.email ?? "Email: Nao Informado"}</small>
      </UserHeader>
      <UserMain>
        <p>GitName: #{user.login}</p>
        <strong>BIO</strong>
        <p>{user.bio}</p>
        <a href={user.html_url} target="_blank" rel="noreferrer noopener">
          Link Github
        </a>
      </UserMain>
      <UserFooter>
        <div>
          <span>Followers</span>
          <span>
            {user.followers > 0
              ? user.followers
              : "Seja o primeiro a seguir esse Mito"}
          </span>
        </div>
        <div>
          <span>Following</span>
          <span>{user.following}</span>
        </div>
        <div>
          <span>Repos</span>
          <span>{user.public_repos}</span>
        </div>
      </UserFooter>
    </li>
  );
};

export default UserInfo;
