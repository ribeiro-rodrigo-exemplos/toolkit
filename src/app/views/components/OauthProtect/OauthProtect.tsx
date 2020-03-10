import React, { useState } from 'react'
import fetchIntercept from 'fetch-intercept'

import { tokenResponse, OauthProtectProps } from './types'

const tokenKey = 'token'

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
    return localStorage.getItem(tokenKey) ? false : true 
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

function registerRequestInterceptToken(): void {
    fetchIntercept.register({
        request: function(url: string ,config: any){
            console.log('requisicao interceptada')

            const token = localStorage.getItem(tokenKey)

            if(!token)
                redirect() 
            
            if (!config)
                config = {} 

            let headers = config.headers || {}

            config.headers = Object.assign(headers,{
                "Authorization": `Bearer ${token}`
            })

            return [url, config]
        }, 
        response: function(response: Response){

            if(response.status === 401 || response.status === 403)
                redirect()

            return response
        }
    })
}

async function validate(setAuth: React.Dispatch<React.SetStateAction<boolean>>){

    if(isNotAuthenticated()){
        const code = getCode()

        if(code){
            const response = await requestToken(code)
            if(response){
                localStorage.setItem(tokenKey,response.token)
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
    else
        registerRequestInterceptToken() 

    return (
        <React.Fragment>
            { authenticated ? children : renderAccessDenied()}
        </React.Fragment>
    )
}