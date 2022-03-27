import React, { Component, useState, useEffect } from 'react';
import { authSrv } from '../services';



var dataA: any = {
    active: false,
    _id: "",
    contact: "",
    name: "",
    address: "",
    employees: "",
}



//class Companies extends Component<MyState >{
export const Companies = () => {

    const [data, setData] = useState(dataA);
    const [companies, setCompanies] = useState([]);
    const [page, setPage] = useState(1);


    useEffect(() => {
        const fetchdata = async () => {
            const res = await (await fetch('/mock/companies.json', { mode: 'cors' })).json()
            setCompanies(res);

        }
        fetchdata();
    }, []);


    const getCompByPage = (page: number) => {

        var gg: any = companies.filter((index: any) => {

            return (
                index.name.toLowerCase().includes(data.name.toLowerCase()) &&
                index._id.toLowerCase().includes(data._id.toLowerCase()) &&
                index.address.toLowerCase().includes(data.address.toLowerCase()) &&
                //index.employees < data.employees &&
                index.contact.toLowerCase().includes(data.contact.toLowerCase()) &&
                index.active == data.active
            )
        })
        console.log(page == 1? 0: ( page * 10 )- 10 , page * 10);
        console.log(companies.length);

        return gg.slice(page == 1? 0:( page * 10 )- 10 , page * 10)

    }

    const pagination = () => {
        var div = Math.ceil(companies.length / 10);
        
        return ([...Array(div)].map((i: any, e: number) => {
            return (
                <a key={e} href="#" onClick={() => setPage(e + 1)} className={ page == e+1?"px-4 py-2 text-gray-700 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white":"px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"}>
                    {e + 1}
                </a>
            )
        }))
    }
    
    const contents = () => {


        return (
            getCompByPage(page).map((item: any, index: any,) => {
                return (
                    <tr key={index} className={index % 2 == 0 ? "border-b h-12 bg-gray-100 " : "border-b h-12 bg-white "}>
                        <td className="py-1 text-center px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item._id}
                        </td>
                        <td className="py-1 text-center px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.name}
                        </td>
                        <td className="py-1 text-center px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.address}
                        </td>
                        <td className="py-1 text-center px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.employees}
                        </td>
                        <td className="py-1 text-center px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <ul className="divide-y-2 overflow-y-scroll h-8 divide-gray-100">
                                {item.contact.split(",").map((item: any) => {
                                    return (
                                        <li>
                                            {item}
                                        </li>)
                                })}
                            </ul>
                        </td>

                        <td scope="col" className="  px-3 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                            <div className='flex px-2 flex-row items-center'>
                                <a className=" px-4 py-2 m-2 bg-yellow-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out">
                                    Modifier
                                </a>
                                <a className=" px-4 py-2 m-2 bg-yellow-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-700 hover:shadow-lg focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out">
                                    Modifier
                                </a>
                            </div>
                        </td>
                    </tr>
                )
            })
        )

    }


    return (
        <div className="main-content  p-4">
            <h1 className="font-bold text-2xl text-gray-700">Companies</h1>
            <div className=" bg-white rounded mt-4">

                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className=" py-2  sm:px-6 lg:px-8">
                        <div className="overflow-x-auto shadow-md sm:rounded-lg">
                            <table className="">


                                <thead className="bg-gray-200 dark:bg-gray-700">
                                    <tr>
                                        <th scope="col" className="text-center py-3 px-6 text-xs font-medium tracking-wider  text-gray-700 uppercase dark:text-gray-400">
                                            ID
                                        </th>
                                        <th scope="col" className="text-center py-3 px-6 text-xs font-medium tracking-wider  text-gray-700 uppercase dark:text-gray-400">
                                            Nom de Ste.
                                        </th>
                                        <th scope="col" className="text-center py-3 px-6 text-xs font-medium tracking-wider  text-gray-700 uppercase dark:text-gray-400">
                                            Adresse
                                        </th>
                                        <th scope="col" className="text-center py-3 px-6 text-xs font-medium tracking-wider  text-gray-700 uppercase dark:text-gray-400">
                                            Nb. Clients
                                        </th>
                                        <th scope="col" className="text-center py-3 px-6 text-xs font-medium tracking-wider  text-gray-700 uppercase dark:text-gray-400">
                                            Contacts
                                        </th>
                                    </tr>

                                </thead>
                                <thead>
                                    <tr>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            <input onChange={(e) => { setData({ ...data, _id: e.target.value }) }} type="text" className="form-control block px-1 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleInput123"
                                                aria-describedby="emailHelp123" placeholder="ID" />
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            <input onChange={(e) => { setData({ ...data, name: e.target.value }) }} type="text" className="form-control block px-1 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleInput123"
                                                aria-describedby="emailHelp123" placeholder="Nom de Ste." />
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            <input onChange={(e) => { setData({ ...data, address: e.target.value }) }} type="text" className="form-control block px-1 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleInput123"
                                                aria-describedby="emailHelp123" placeholder="Adresse" />
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            <input onChange={(e) => { setData({ ...data, employees: e.target.value }) }} type="text" className="form-control block px-1 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleInput123"
                                                aria-describedby="emailHelp123" placeholder="Nb. Clients" />
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            <input onChange={(e) => { setData({ ...data, contact: e.target.value }) }} type="text" className="form-control block px-1 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleInput123"
                                                aria-describedby="emailHelp123" placeholder="Contacts" />
                                        </th>

                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            <button className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">                                                Ajouter
                                            </button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="  self-center overflow-hidden overflow-y-scroll">
                                    {contents()}
                                </tbody>


                            </table>

                        </div>
                        <div className="flex items-center space-x-1 m-4 float-right">
                            <a href="#" onClick={() => setPage(1)} className="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                                </svg>
                            </a>
                            {pagination()}

                            <a href="#" onClick={() => setPage(companies.length)} className="px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}


//export default Companies;