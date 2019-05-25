import fetch from 'isomorphic-unfetch'
import * as localData from '../fixture.json';

const headers = {
    Authorization: "BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTAyOTIwNTUsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJkdWRlc2xAZ21haWwuY29tIn0.re8EU3P1Xlf4rptBh5IlaBd6GcrtaVqajC8_FreVLZXSOxjmQhNFlNPH-U9CwXXu9oiARUsWPuDvsW9B_Tlp0A"
}

export async function rateUSD () {
    const endpoint = 'https://api.estadisticasbcra.com/usd';

    const res = await fetch(endpoint, { method: 'GET', headers: headers})
    const data = await res.json()

    console.log(`fetch rateUSD. Desde: ${data[0].d}`)
    console.log(`fetch rateUSD. Hasta: ${data[data.length-1].d}`)

    return data
}

export async function localRateUSD () {
    return localData['default'];
}