
export type AvatarProps = {
  avatar: JSX.Element
}  
 
export interface GitHubTrend {
  author: string,
  name: string,
  description: string,
  programmingLanguage: string,
  stars: number,
  forks: number,
  starsInRange: number
}

export type TrendArguments = {
  lang: string,
  range: string
}

export interface GitHubLanguage {
  name: string,
  code: string
}

export type DataRangeType = {
  name: string,
  code: string
}

export type TrendState = {
  trendData: GitHubTrend[],
  languages: GitHubLanguage[],
  selectedLang: string,
  langCode: string,
  selectedRange: string,
  rangeCode: string,
  status: string,
  error: string
}

export interface LoginStateType {
  login: boolean
  name: string | null,
  email: string | null,         
  photo: string | null,
}

export type UserState = {
  loginInfo: LoginStateType,
  loginStatus: string,
  error: string,
  userMenu: string 
}

export type DialogState = {
  open: boolean,
  option: string
}
