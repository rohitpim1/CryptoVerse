import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoheaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'd1e9d7ba8amsh5b8c24c71f7a394p170aa4jsndae8a6d5fc15' 
  }

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
  const createRequest = (url) =>({url,headers:cryptoheaders})
  export const cryptoNewsApi = createApi({
      reducerPath:"cryptoNewsApi",
      baseQuery: fetchBaseQuery({baseUrl}),
      endpoints:(builder)=>({
          getCryptoNews:builder.query({
              query:({newsCategory,count})=> createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
          })
      })
  })

  export const { useGetCryptoNewsQuery } = cryptoNewsApi;
