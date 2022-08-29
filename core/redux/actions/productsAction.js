function listproducts() {
  const options = {
    url: "https://fakestoreapi.com/products/",
  };

  return {
    type: "PRODUCTS_LIST",
    payload: axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      }),
  };
}

