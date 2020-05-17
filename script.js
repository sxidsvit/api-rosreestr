/* eslint-disable no-unused-vars */
// const PROXY = 'https://cors-proxy.htmldriven.com/?url='
// const PROXY = 'https://cors-proxy.htmldriven.com/'
// const PROXY = ''
// const url = BASEURL
// const DEPOSITURL = 'https://api-rosreestr.base-n.ru/rosreestr/api/check_base_n_deposit/'
// const url = PROXY + DEPOSITURL
// console.log('url: ', url)


const APIKEY = 'b9cbe132-7750-4471-bdaa-bfb3fcff6fcd'
const BASEURL = 'https://api-rosreestr.base-n.ru/rosreestr/api/search_by_address/'
const url = BASEURL

const data = {
  base_n_api_key: APIKEY,
  address: 'Москва, улица Ленина, 17, кв.44',
  filter: 'oks'
}

console.log(JSON.stringify(data))

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
}

async function getData(url, options) {
  // eslint-disable-next-line no-undef
  const response = await fetch(url, options)
  console.log('response: ', response)
  if (!response.ok) {
    throw new Error(`Can't read data from ${url}. Status code: ${response.status}`)
  }
  return response.json()
}

const serverData = getData(url, options)
console.log('serverData: ', serverData)
