import axios from 'axios'
import { data } from 'jquery';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateRangePicker } from 'react-date-range';


export default function Test() {

    const [products, setProducts] = useState([])
    const [Allproducts, setAllProducts] = useState([])

    const [startDate, setStartdate] = useState(new Date())
    const [endDate, setEnddate] = useState(new Date())


    useEffect(() => {
        axios
            .get("https://6411497c1a5dca34258814cc.mockapi.io/products")
            .then((response) => {
                setProducts(response.data);
                setAllProducts(response.data)
            });
    }, [])


    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    const handleSelect = (date) => {
        let filtered = Allproducts.filter((product) => {
            let productdate = new Date(product["createdAt"]);
            return (
                productdate >= date.selection.startDate &&
                productdate <= date.selection.endDate
            );
        });

        setStartdate(date.selection.startDate)
        setEnddate(date.selection.endDate)
        setProducts(filtered)
    }


    return (
        <>
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />

            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>

                        <th>date</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => {
                            let date = new Date(product["createdAt"]);
                            return (

                                <tr>

                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{date.toLocaleDateString()}</td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table >
        </>
    )
}
