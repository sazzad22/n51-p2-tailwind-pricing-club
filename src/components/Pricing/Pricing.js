import React from 'react';
import PricingOption1 from '../PricingOption/PricingOption1';

const Pricing = () => {
    const pricingOptions = [
        {id:1,name:'Free',price:0,benefits:[
            'lifetime free', 
            'unlimited deals', 
            'localized deals', 
            'fantastic deals',
            'crazy deals'
        ]},
        {id:2,name:'Regular',price:9.9,benefits: [
            'everything on free', 
            'unlimited deals', 
            'localized deals', 
            'fantastic deals',
            'crazy deals'
        ]},
        {id:3,name:'Primium',price:19.99,benefits:[
            'everything on Regular', 
            'unlimited deals', 
            'localized deals', 
            'fantastic deals',
            'crazy deals'
        ]}
    ] 
    return (
        <div className='bg-indigo-300 p-10 mt-0 '>
            <h1 className='text-6xl font-mono text-white pb-10'>World's Best Pricing Club</h1>


            <div className=' mt-20 grid md:grid-cols-3 gap-3'>
                {
                    pricingOptions.map(option=> <PricingOption1 key={option.id} option={option}></PricingOption1> )
                }
            </div>
        </div>
    );
};

export default Pricing;