import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoheaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key':  'd1e9d7ba8amsh5b8c24c71f7a394p170aa4jsndae8a6d5fc15'
  }
const baseUrl = 'https://coinranking1.p.rapidapi.com'

 const createRequest = (url) =>({url,headers:cryptoheaders})
  export const cryptoApi = createApi({
      reducerPath:"cryptoApi",
      baseQuery: fetchBaseQuery({baseUrl}),
      endpoints:(builder)=>({
          getCryptos:builder.query({
              query:(count)=> createRequest(`/coins?limit=${count}`)
          }),
          getExchanges:builder.query({
              query: ()=> createRequest(`/exchanges`),
          }),
          getCryptoDetails:builder.query({
              query:(coinId) => createRequest(`/coin/${coinId}`),
          }),
          getCryptoHistory:builder.query({
              query:({coinId,timeperiod})=> createRequest(`coin/${coinId}/history/${timeperiod}`)
          })
      })
  })

export const {
    useGetCryptosQuery,useGetCryptoDetailsQuery,useGetExchangesQuery,useGetCryptoHistoryQuery
} = cryptoApi;