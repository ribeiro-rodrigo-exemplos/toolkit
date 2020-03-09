import React, { useState } from 'react'

import { tokenResponse, OauthProtectProps } from './types'

function redirect(): void{
    
    const clientId =  encodeURIComponent(process.env.REACT_APP_CLIENT_ID+"") 
    const authorizeUrl = process.env.REACT_APP_AUTHORIZE_URL
    const redirectUri = window.location.origin

    window.location.href = `${authorizeUrl}?response_type=code&client_id=${clientId}&amp;redirect_uri=${redirectUri}`
}

function renderAccessDenied(): React.ReactNode{
    return <span></span>
}

function isNotAuthenticated(): boolean{
    return localStorage.getItem('token') ? false : true 
}

async function requestToken(code: string): Promise<tokenResponse | null>{
    const tokenUrl = process.env.REACT_APP_REQUEST_TOKEN_URL || ""
    const response = await fetch(`${tokenUrl}?code=${code}`)
    const json = await response.json() 
    
    return {
        token: json["access_token"], 
        refreshToken: json["refresh_token"], 
        tokenType: json["token_type"], 
        expiresIn: json["expires_in"]
    }
}

function getCode(): string | null {
    const params = new URL(window.location.href).searchParams
    const code = params.get('code')
    return code 
}

async function validate(setAuth: React.Dispatch<React.SetStateAction<boolean>>){

    if(isNotAuthenticated()){
        const code = getCode()

        if(code){
            const response = await requestToken(code)
            if(response){
                localStorage.setItem('token',response.token)
                setAuth(true) 
            }
        }else
            redirect() 
    }else
        setAuth(true)
}

export default ({ children }: OauthProtectProps) => {

    const [authenticated, setAuth] = useState(false)
    
    if(!authenticated)
        validate(setAuth) 

    return (
        <React.Fragment>
            { authenticated ? children : renderAccessDenied()}
        </React.Fragment>
    )
}