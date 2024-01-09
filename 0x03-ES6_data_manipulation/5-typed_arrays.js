export default function createInt8TypedArray(length, position, value) {
    const buffer = new ArrayBuffer(length);
    const view = new DataView(buffer);
   
    if (value < -128 || value > 127) {
     throw new Error('Position outside range');
    }
   
    view.setInt8(position, value);
   
    return view;
   }
   