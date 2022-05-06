const apiKey = ''

const yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonRespnse => {
       if (jsonRespnse.businesses) {
         return jsonRespnse.businesses.map(business => {
           return {
             id: business.id,
             imageSrc: business.image_url,
             name: business.name,
             address: business.location.address1,
             city: business.location.city,
             state: business.location.state,
             zipCode: business.location.zip_ode,
             category: business.categories.title,
             rating: business.rating,
             reviewCount: business.reviewCount,
             url: business.url
           }
         })
       }
    });
  }
}

export default yelp;
