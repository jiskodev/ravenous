const apiKey = 'B6eP3aPPDqFWKY9-anzUR-HGiGeecAhR11j7tnUd2_xJYn2eKntrkYpLGP6dYmiFm_5uU4uZ9pxSvvmJwo6imO3xnnxLDjCmhcAh9PPyj8HBSDMARoP-1SnLuQ1oX3Yx'
const clientID = '-WkFjqAOh4slmaZZN1abLQ';

const Yelp = {
    search(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      }).then(response => {
        return response.json();
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          }));
        }
      });
    }
  };
  
  export default Yelp;
