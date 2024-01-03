import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  try {
    const [photoResult, userResult] = await Promise.all([photoPromise, userPromise]);
    const resultString = `${photoResult.body} ${userResult.firstName} ${userResult.lastName}`;
    console.log(resultString);
  } catch (error) {
    console.log('Signup system offline');
  }

  return { photoPromise, userPromise };
}
