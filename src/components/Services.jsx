import { useState } from 'react';
import React from "react";
import { useMoralis } from "react-moralis";
import { AiFillAlipayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";


const commonStyles = 'min-h-[70px] sp:px-0 px-2 sm-min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white';


const Services = () => {

    const { Moralis, isAuthenticated } = useMoralis();

    async function getNFTs(){
        const options = {chain:"eth" , address:"0xea3ad5ae82af03f1c8744d295185812886b7a3d5"}
        console.log(options)
        const nfts = await Moralis.Web3API.account.getNFTs(options);

        console.log(nfts);
    }


    if(!isAuthenticated) {
        return(
            <h1 className="flex w-full justify-center items-center text-6xl py-10">👀</h1>
        );
    }

    return(
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-black py-1">
                        Start Exploring NFTs 
                        
                    </h1> 
                    <p className="text-left mt-5 text-black font-light md:w-9/12 w-11/12 text-base">
                        Lookup any wallet and follow their collection
                        <button
                        type="button"
                        
                        className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                    >
                        <p className="text-white text-base font-semibold">
                        Explore BAYC
                        </p>
                    </button>
                    </p>
                </div>    
            </div> 
        </div>
    );
}

export default Services
;