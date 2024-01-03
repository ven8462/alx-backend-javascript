export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const apiResponse = {
        status: 200,
        body: 'Success',
      };
      resolve(apiResponse);
    } else {
      const error = new Error('The fake API is not working currently');
      reject(error);
    }
  });
}
