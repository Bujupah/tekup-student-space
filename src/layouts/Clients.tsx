import React, { Component, useState, useEffect } from 'react';
import { authSrv } from '../services';



var dataA: any = {
    clientId: "",
    active: false,
    companyId: "",
    contact: "",
    name: "",
    lastname: "",
    gender: "",
    addressDep: "",
    addressDes: "",
}


//className Companies extends Component<MyState >{
export const Clients = () => {
    const [data, setData] = useState(dataA);
    const [showModal, setShowModal] = React.useState(false);
    const [clients, setclients] = useState([]);
    const [page, setPage] = useState(1);


    useEffect(() => {
        const fetchdata = async () => {
            const res = await (await fetch('/mock/clients.json', { mode: 'cors' })).json()
            setclients(res);
        }
        fetchdata();
    }, []);




    const getCompByPage = (page: number) => {

        var gg: any = clients.filter((index: any) => {
            console.table(data);

            return (

                index.name.toLowerCase().includes(data.name.toLowerCase()) &&
                index.companyId.toLowerCase().includes(data.companyId.toLowerCase()) &&
                index.clientId.toLowerCase().includes(data.clientId.toLowerCase()) &&
                index.lastname.toLowerCase().includes(data.lastname.toLowerCase()) &&
                index.gender.toLowerCase().includes(data.gender.toLowerCase()) &&
                index.addressDep.toLowerCase().includes(data.addressDep.toLowerCase()) &&
                index.addressDes.toLowerCase().includes(data.addressDes.toLowerCase()) &&
                index.contact.toLowerCase().includes(data.contact.toLowerCase()) &&
                index.active == data.active


            )
        })


        return gg.slice((page * 10) - 10, page * 10)

    }



    const pagination = () => {
        var div = Math.ceil(clients.length / 10);
        return ([...Array(div)].map((i: any, e: number) => {
            return (
                <a key={e} href="#" onClick={() => setPage(e + 1)} className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                    {e + 1}
                </a>
            )
        }))

    }

    const contents = () => {


        return (
            getCompByPage(page).map((item: any) => {

                return (

                    <tr className="border-b odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 dark:border-gray-600">
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.clientId}
                        </td>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {item.companyId}
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {item.name}
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {item.lastname}
                        </td>
                        <td className=" py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400 ">
                            <ul className="divide-y-2 divide-gray-100">
                                {item.contact.split(",").map((item: any) => {
                                    return (
                                        <li>
                                            {item}
                                        </li>)
                                })}
                            </ul>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {item.gender}
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {item.addressDep}
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {item.addressDes}
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                            {item.active}
                        </td>


                        <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                            <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                )
            })
        )

    }


    return (
        <div className="main-content flex flex-col flex-grow p-4">

            {showModal ? (
                <div onClick={() => setShowModal(false)}>

                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Modal Title
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        I always felt like I could do anything. That’s the main
                                        thing people are controlled by! Thoughts- their perception
                                        of themselves! They're slowed down by their perception of
                                        themselves. If you're taught you can’t do anything, you
                                        won’t do anything. I was taught I could do everything.
                                    </p>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </div>
            ) : null}

            <h1 className="font-bold text-2xl text-gray-700">Clients</h1>

            <div className="flex flex-col flex-grow  bg-white rounded mt-4">

                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow-md sm:rounded-lg">
                            <table className="min-w-full">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                    <tr>

                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            ID
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            companyId
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Nom
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Prénom
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            N° Téléphone
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Sexe
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Adrr. Départ
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            Adrr. Destination
                                        </th>

                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            active
                                        </th>
                                    </tr>
                                    <tr>


                                        <th scope="col" className="py-2 px-1 text-xs font-medium text-left text-gray-700 uppercase dark:text-gray-400">
                                            <input onChange={(e) => { setData({ ...data, clientId: e.target.value }); }} type="text" className="form-control block px-1 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleInput123"
                                                aria-describedby="emailHelp123" placeholder="ID Client" />
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            <input onChange={(e) => { setData({ ...data, companyId: e.target.value }); }} type="text" className="form-control block px-1 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleInput123"
                                                aria-describedby="emailHelp123" placeholder="ID Ste." />
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            <input onChange={(e) => { setData({ ...data, name: e.target.value }); }} type="text" className="form-control block px-1 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleInput123"
                                                aria-describedby="emailHelp123" placeholder="Nom" />
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            <input onChange={(e) => { setData({ ...data, lastname: e.target.value }); }} type="text" className="form-control block px-1 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleInput123"
                                                aria-describedby="emailHelp123" placeholder="Prénom" />
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            <input onChange={(e) => { setData({ ...data, contact: e.target.value }) }} type="text" className="form-control block px-1 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleInput123"
                                                aria-describedby="emailHelp123" placeholder="N° Téléphone" />
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            <input onChange={(e) => { setData({ ...data, gender: e.target.value }); }} type="text" className="form-control block px-1 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleInput123"
                                                aria-describedby="emailHelp123" placeholder="Sexe" />
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            <input onChange={(e) => { setData({ ...data, addressDep: e.target.value }); }} type="text" className="form-control block px-1 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleInput123"
                                                aria-describedby="emailHelp123" placeholder="Adrr. Départ" />
                                        </th>
                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            <input onChange={(e) => { setData({ ...data, addressDes: e.target.value }); }} type="text" className="form-control block px-1 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                id="exampleInput123"
                                                aria-describedby="emailHelp123" placeholder="Adrr. Destination" />
                                        </th>

                                        <th scope="col" className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                            <button onClick={() => setShowModal(true)} className=" px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">                                                Ajouter
                                            </button>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {contents()}
                                </tbody>
                                <div className="flex items-center space-x-1">
                                    <a href="#" onClick={() => setPage(1)} className="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                                        </svg>
                                    </a>
                                    {pagination()}

                                    <a href="#" onClick={() => setPage(clients.length)} className="px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </a>
                                </div>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}


//export default Companies;