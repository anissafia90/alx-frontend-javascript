import getFullResponseFromAPI from "./1-promise.js";

const successResponse = getFullResponseFromAPI(true);
const failureResponse = getFullResponseFromAPI(false);

successResponse
  .then((response) => {
    console.log('Success:', response);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });

failureResponse
  .then((response) => {
    console.log('Success:', response);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
