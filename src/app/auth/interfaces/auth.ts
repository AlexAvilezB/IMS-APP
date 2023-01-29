export interface AuthResponse {
    ok: boolean,
    uid?: string,
    name?: string,
    token?: string,
    role?: string,
    msg?: string
}

export interface UserSession {
    uid: string,
    name: string,
    role: string
}