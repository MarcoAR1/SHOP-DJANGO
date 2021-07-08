const url = 'http://127.0.0.1:8000/product/'

export const getProduct = async () => {
  const req = await fetch(url)
  return req
}
