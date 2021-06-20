export interface ITokenRequest {
    email: string
    password: string
}


export interface ITokenResponse {
    id: number
    email: string
    name: string
}

export interface IGoogleProfile {
    googleId: string;
    imageUrl: string;
    email: string;
    name: string;
    givenName: string;
    familyName: string

}


