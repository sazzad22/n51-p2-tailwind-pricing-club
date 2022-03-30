import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption1 = (props) => {
    
    const { name, price ,benefits } = props.option;

    return (
        <div className='bg-white p-4 rounded-lg '>

            <h1 className='bg-indigo-300 rounded font-bold text-xl py-2'>{name}</h1>

            <p>
                <span className='text-5xl font-bold'>{price}</span>

                <span className='text-gray-600 text-xl'>/mo</span>

            </p>

            <div>
                <h3>Benefits:</h3>
                {
                    benefits.map(benefit=> <Benefit benefit={benefit} ></Benefit>)
                }

                <button className='flex w-full justify-center items-center bg-green-500 mt-6 py-2 rounded font-bold text-white gap-1 hover:bg-green-600'>
                    Buy Now 
                    <ArrowRightIcon className='w-6 h-5'></ArrowRightIcon>
                </button>
            </div>

        </div>
    );
};

export default PricingOption1;