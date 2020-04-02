
export type account = {
    id: string
    name: string
    email: string
}

export type bucket = {
    name: string
    owner: account
    cloudProvider?: cloudProvider
}

export enum cloudProvider {
    AMAZON = "Amazon Webservices",
    GCLOUD = "Google Cloud",
    AZURE = "Azure"
}

export type machine = {
    instanceId: string 
    instanceType: string 
    vpcId: string 
    publicIp: string
    publicDns: string
    owner: account
    cloudProvider: string
}
