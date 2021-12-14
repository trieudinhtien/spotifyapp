import axios, {AxiosResponse} from 'axios';

const CLIENT_ID = "200e37dd514c48f9830f30a7786f014c"
const CLIENTSECRET = "2c2aa776102a469ab98bf9630358907f"
const TOKEN = "BQC4LGx31Ns3YLBOJ1pQe_iZVZTdzn8aYsNFJLQVnxMOFqvFRqe-ep-Xpw0_soYEmifHTIMx0rnYeC7ayzgYNSKuRdOYJuPr1hcSwyuN_onbk6eLSslXuit4ejHBN0SMcUumvHQyBey1sLgHK9X0i9L7ICOi1VSQC90"

export function getDataforArtist(q: string): Promise<any> {
    return axios.get(`https://api.spotify.com/v1/search?q=${q}&type=artist`,{
        headers: {
            Authorization: `Bearer ${TOKEN}` 
        }
    })
    .then((response: AxiosResponse<any>) => response.data);
}



export function getDataTopTrack(id: string): Promise<any>{
    return axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=US`,{
        headers: {
            Authorization: `Bearer ${TOKEN}` 
        }
    })
    .then((response: AxiosResponse<any>) => response.data);
}


