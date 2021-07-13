const url = '/api/product/'

export const getProduct = async () => {
  const req = await fetch(url)
  return req
}
