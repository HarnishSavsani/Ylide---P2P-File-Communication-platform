import { MessageContentV3, Ylide } from "@ylide/sdk";
// import { useYlide } from '@app/contexts/ylide';
import { create, CID, IPFSHTTPClient } from "ipfs-http-client";
import React from "react";

import { Buffer } from "buffer";
var ipfs: IPFSHTTPClient | undefined;

const auth =
  "Basic " +
  Buffer.from(
    "2IBk8BDSROy6GQUjjPZi4wT2xe5" + ":" + "d77303e5c8349747b2cadf20d0f2f71e"
  ).toString("base64");

try {
  ipfs = create({
    url: "https://ipfs.infura.io:5001",
    headers: {
      authorization: auth,
    },
  });
} catch (error) {
  console.error("IPFS error ", error);
  ipfs = undefined;
}

const IpfsUploader = (setFileHash: any) => {
  const [images, setImages] = React.useState<{ cid: CID; path: string }[]>([]);

  const onSubmitHandler = async (
    event: any | React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    event.stopPropagation();
    event.persist();

    const form = event.target as HTMLFormElement;
    const files = event.target.files;

    if (!files || files.length === 0) {
      return alert("No files selected");
    }

    const file = files[0];
    // upload files
    const result = await (ipfs as IPFSHTTPClient).add(file);
    console.log(result);
    if (result && typeof setFileHash === "function") {
      setFileHash(result.path);
    }
    setImages([
      ...images,
      {
        cid: result.cid,
        path: result.path,
      },
    ]);

    console.log(images, "images");
    // form.reset();
    setImages([]);
    console.log(images, "imagrs");
  };

  return (
    <>
      {!ipfs && (
        <p>Oh oh, Not connected to IPFS. Checkout out the logs for errors</p>
      )}
      <form onSubmit={onSubmitHandler}>
        <label>Send to </label>
        <input placeholder="wallet address" type="text" />

        <input
          name="file"
          type="file"
          onChange={(e: any) => onSubmitHandler(e)}
        />
        <button type="submit">Get File Encrypted</button>
      </form>
    </>
  );
};

export default IpfsUploader;
