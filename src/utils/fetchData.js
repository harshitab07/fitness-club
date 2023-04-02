export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '353d5d24f1mshe20cf451de851ddp1d75d9jsn9eb0dbd4c171'
    }
  };

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a883ded5f2msh1fbba21932010d3p12c0bejsn44cdf97099b9',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }

}

export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}