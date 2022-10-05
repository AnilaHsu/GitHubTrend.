export interface AvatarProps {
  avatar: JSX.Element;
}

export interface GitHubTrend {
  author: string;
  name: string;
  description: string | null;
  programmingLanguage: string | null;
  stars: number | null;
  forks: number | null;
  starsInRange: number | null;
  link: string | null;
}

export interface TrendArguments {
  langCode: string;
  rangeCode: string;
}

export interface GitHubLanguage {
  name: string;
  code: string;
}

export interface DataRangeType {
  name: string;
  code: string;
}

export interface TrendState {
  trendData: GitHubTrend[];
  languages: GitHubLanguage[];
  dateRange: DataRangeType[];
  langCode: string;
  langName: string;
  rangeCode: string;
  rangeName: string;
  status: string;
  error: string;
}

export interface LoginStateType {
  login: boolean;
  name: string | null;
  email: string | null;
  photo: string | null;
}

export interface UserState {
  loginInfo: LoginStateType;
  loginStatus: string;
  error: string;
  userMenu: string;
}

export interface DialogState {
  open: boolean;
  option: string;
}
