
export type AvatarProps = {
    avatar: JSX.Element
}  
 
export type TrendStateType = {
    title: string,
    introduction: string,
    language: string,
    total_star: number,
    fork: number,
}


export type LoginStateType = {
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

export type FilterState = {
    language: string | null
}

export type DialogState = {
    open: boolean,
    option: string
}
