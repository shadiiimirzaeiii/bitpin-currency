import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ShopTabs() {
    const [buyList, setbuyList] = useState(null);
    const [sellList, setsellList] = useState(null);
    const [marketList, setmarketList] = useState(null);


    useEffect(() => {
        const fetchbuyData = async () => {
            try {
                const response = await axios.get('https://api.bitpin.org/v2/mth/actives/market_id/?type=buy');
                setbuyList(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchbuyData();
    }, []); 



    useEffect(() => {
        const fetchsellData = async () => {
            try {
                const response = await axios.get('https://api.bitpin.org/v2/mth/actives/market_id/?type=sell');
                setsellList(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchsellData();
    }, []); 


    useEffect(() => {
        const fetchmarketData= async () => {
            try {
                const response = await axios.get('https://api.bitpin.org/v2/mth/actives/market_id/?type=sell');
                setmarketList(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchmarketData();
    }, []); 

    return (
        <>
            <Tabs
                defaultActiveKey="SELL"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
            >
                <Tab eventKey="Sell" title="Sell">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Sell </th>

                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="Buy" title="Buy">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Buy </th>

                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="Market" title="Market">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Market </th>

                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </Table>
                </Tab>

            </Tabs>
        </>
    );
}

export default ShopTabs;
