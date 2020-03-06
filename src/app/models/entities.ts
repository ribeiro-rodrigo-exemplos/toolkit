
export type account = {
    id: string
    name: string
    email: string
}

export type bucket = {
    name: string
    owner: account
    createDate: string
    cloudProvider?: cloudProvider
}

export enum cloudProvider {
    AMAZON = "Amazon Webservices",
    GCLOUD = "Google Cloud",
    AZURE = "Azure"
}

export type machine = {
    publicIp: string
    privateIp: string
    publicDns: string
    owner: account
    cloudProvider: string
}
