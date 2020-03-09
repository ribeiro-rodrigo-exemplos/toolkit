export type tokenResponse = {
    token: string, 
    refreshToken: string, 
    tokenType: string, 
    expiresIn: number 
}

export interface OauthProtectProps{
    children: React.ReactNode
}