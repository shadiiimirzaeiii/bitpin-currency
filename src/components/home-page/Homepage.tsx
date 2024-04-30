import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MarketTabs() {
    const [markets, setMarkets] = useState(null);
    const [usdt, setUsdt] = useState([]);
    const [toman, setToman] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.bitpin.ir/v1/mkt/markets/');
                setMarkets(response.data.results?.currency2?.title);
                setUsdt(response.data.results?.filter((item: any) => item.currency2.code === 'USDT'));
                setToman(response.data.results?.filter((item: any) => item.currency2.code === 'IRT'));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); 

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        const totalPages = Math.ceil(usdt.length / itemsPerPage);
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            <Tabs
                defaultActiveKey="IRT"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
            >
                <Tab eventKey="USDT" title="USDT">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>USDT </th>
                                <th>Title </th>
                                <th>Decimal amount </th>
                                <th>Id </th>

                            </tr>
                        </thead>
                        <tbody>
                            {usdt.slice(indexOfFirstItem, indexOfLastItem).map((item: any, index: number) => (
                                <tr key={index}>
                                    <td>{item.currency2.title}</td>
                                    <td>{item.currency2.title_fa}</td>
                                    <td>{item.currency2.decimal_amount}</td>
                                    <td>{item.currency2.id}</td>

                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <nav>
                        <ul className="pagination">
                            <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
                                <button className="page-link" onClick={prevPage}>Previous</button>
                            </li>
                            <li className={`page-item ${currentPage === Math.ceil(usdt.length / itemsPerPage) && 'disabled'}`}>
                                <button className="page-link" onClick={nextPage}>Next</button>
                            </li>
                        </ul>
                    </nav>
                </Tab>
                <Tab eventKey="IRT" title="IRT">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>IRT </th>
                                <th>Title </th>
                                <th>Decimal amount </th>
                                <th>Id</th>

                            </tr>
                        </thead>
                        <tbody>
                            {toman.slice(indexOfFirstItem, indexOfLastItem).map((item: any, index: number) => (
                                <tr key={index}>
                                    <td>{item.currency2.title}</td>
                                    <td>{item.currency2.title_fa}</td>
                                    <td>{item.currency2.decimal_amount}</td>
                                    <td>{item.currency2.id}</td>

                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <nav>
                        <ul className="pagination">
                            <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
                                <button className="page-link" onClick={prevPage}>Previous</button>
                            </li>
                            <li className={`page-item ${currentPage === Math.ceil(toman.length / itemsPerPage) && 'disabled'}`}>
                                <button className="page-link" onClick={nextPage}>Next</button>
                            </li>
                        </ul>
                    </nav>
                </Tab>
            </Tabs>
        </>
    );
}

export default MarketTabs;
