export function getSummary() {
  return fetch('https://api.covid19api.com/summary')
  .then(response=> {
    if(response.ok) {
      console.log(response)
      return response.json();
    } else {
      throw response
    }
  })
}

