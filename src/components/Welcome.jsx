import { AiFillAlipayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from "./";
import React from "react";
import { useMoralis } from "react-moralis";


const commonStyles = 'min-h-[70px] sp:px-0 px-2 sm-min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white';



const Welcome = () => {

    const { authenticate, isAuthenticated, user } = useMoralis();

    if (!isAuthenticated) {
    return(
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white py-1">
                        The Open Curation Protocol
                    </h1> 
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                        Log In with your Web3 wallet to explore NFTs, communities, and more
                    </p>
                    <button
                        type="button"
                        onClick={() => authenticate({signingMessage:"Login to start using the Protocol"})}
                        className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                    >
                        <p className="text-white text-base font-semibold">
                        Connect your Wallet
                        </p>
                    </button>


                    
                </div>    
            </div> 
        </div>
    );
    }
    return(
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white py-1">
                        The Open Curation Protocol
                    </h1> 
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                        Welcome {user.attributes.ethAddress}
                    </p>


                    
                </div>    
            </div> 
        </div>
    );
}

export default Welcome;