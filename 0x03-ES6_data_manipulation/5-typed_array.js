export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const typedArray = new Int8Array(buffer);

  if (value < -128 || value > 127) {
    throw new Error('Position outside range');
  }

  typedArray[position] = value;

  return typedArray;
}
