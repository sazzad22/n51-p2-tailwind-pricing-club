import React from 'react';
import PricingOption1 from '../PricingOption/PricingOption1';

const Pricing = () => {
    const pricingOptions = [
        {id:1,name:'Free',price:0},
        {id:1,name:'Regular',price:9.99},
        {id:1,name:'Primium',price:19.99}
    ] 
    return (
        <div>
            <h1>World's Best Pricing Club</h1>
            <div>
                {
                    pricingOptions.map(option=> <PricingOption1 key={option.id} option={option}></PricingOption1> )
                }
            </div>
        </div>
    );
};

export default Pricing;