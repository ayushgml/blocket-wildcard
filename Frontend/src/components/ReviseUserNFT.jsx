import React from 'react'
import {Revise} from 'revise-nft';

const AUTH_TOKEN = "";

const revise = new Revise({auth: AUTH_TOKEN});

const newCollection = await revise.addCollection("users", "");

const ReviseUserNFT = () => {
    return (
        <>
        const collections = await revise.fetchCollections();
        const ipfsLink = await revise.exportCollection('collection-id');
        const revisions = await revise.fetchRevisions('nft-id);
    </>
  )
}

export default ReviseUserNFT