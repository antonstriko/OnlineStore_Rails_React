
async function asyncFunc() {
  try {
    // fetch data from a url endpoint
    const data = await axios.get("/some_url_endpoint");
    return data;
  } catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
}




// ***********************************************************************************
//      https://www.educative.io/edpresso/how-to-make-an-axios-post-request
// ***********************************************************************************
    axios.post('https:sample-endpoint.com/user', order)
      .then(function (response) {
        console.log(response);
      })
    const res = await axios.post('https:sample-endpoint.com/data')

// ***********************************************************************************
//      https://www.educative.io/edpresso/how-to-make-an-axios-post-request
// ***********************************************************************************
    
    import axios from "axios";

    try {
      const response = await axios.post('http://demo0725191.mockable.io/post_data', { posted_data: 'example' });
      console.log('👉 Returned data:', response);
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
    }



// ***********************************************************************************
//      
// ***********************************************************************************

    export function fetchArticleDetails() {
      return async function(dispatch) {
        const { data } = await axios.get("https://api.myjson.com/bins/19dtxc");
        dispatch(setArticleDetails(data));
      };
    }

    export function fetchUserProfile() {
      return async function(dispatch) {
        const { data } = await axios.get("https://api.myjson.com/bins/19dtxc");
        dispatch(setUserProfile(data));
      };
    }

    export function recommendArticle (id,  amountOfRecommends) {
      return  function (dispatch) {
        return axios.post("https://api.myjson.com/bins/19dtxc, {
           amountOfRecommends
      });
    })

// ***********************************************************************************
//      
// ***********************************************************************************

// ***********************************************************************************
//      
// ***********************************************************************************

// ***********************************************************************************
//      
// ***********************************************************************************

// ***********************************************************************************
//      
// ***********************************************************************************

// ***********************************************************************************
//      
// ***********************************************************************************

// ***********************************************************************************
//      
// ***********************************************************************************

// ***********************************************************************************
//      
// ***********************************************************************************