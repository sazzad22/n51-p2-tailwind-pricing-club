import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const SpecialCharts = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedData = data.data.data;
                console.log(loadedData);//array of obj

                const phoneData = loadedData.map(phone => {
                    const parts = phone.slug.split('-');//split gives an array of the two splitted parts
                    const ph = {
                        name: parts[0],
                        value: parts[1]
                    }

                    return ph;

                });
                setPhones(phoneData);//i.e ph

                console.log(phoneData);


        })
        
    },[])
    return (
        <BarChart width={800} height={500} data={phones}>
            <Bar dataKey={'value'} fill='#8884d8'></Bar>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis ></YAxis>
        </BarChart>
    );
};

export default SpecialCharts;