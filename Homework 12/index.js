"use ctrict";

async function createHash(key, secret) {
  const textEncoder = new TextEncoder();
  const data = textEncoder.encode(key + secret);
  const buffer = await crypto.subtle.digest("SHA-256", data);

  const hashArray = Array.from(new Uint8Array(buffer));
  const hashHex = hashArray
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");

  return hashHex;
}

const key = prompt("Enter some key");
const secret = "someSecret";

createHash(key, secret).then((hash1) => {
  console.log(hash1);

  createHash(key, secret).then((hash2) => {
    console.log(hash2);

    createHash(key, secret).then((hash3) => {
      console.log(hash3);
    });
  });
});
