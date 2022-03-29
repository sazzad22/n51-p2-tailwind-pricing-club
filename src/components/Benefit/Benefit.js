import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';

const Benefit = (props) => {

    
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className='w-6 h-6 text-green-500'></CheckCircleIcon>
            {props.benefit}

        </div>
    );
};

export default Benefit;