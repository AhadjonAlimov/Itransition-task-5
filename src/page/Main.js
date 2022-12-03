import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { uz, ru, us } from '../data';
import Table from '../components/Table'
import { fullName, phone, address } from '../functions/genContacts';


export default function Main() {
    const [country, setCountry] = useState(uz);
    const [contacts, setContacts] = useState([]);

    let contactsTemp = [];

    const genContacts = (data, num) => {
        for (let i = 0; i < num; i++) {
            let temp = [];
            temp.push(Math.random() * 9999999999);
            temp.push(fullName(data));
            if (data === uz) {
                temp.push("Uzbekistan");
            }
            if (data === ru) {
                temp.push("Russia");
            }
            if (data === us) {
                temp.push("United States");
            }
            temp.push(phone(data));
            temp.push(address(data));
            contactsTemp.push(temp);
            setContacts(contactsTemp);
        }
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Contact Generator</h1>
            <div className="justify-content-md-center">
                <div className='containerCard mb-5'>
                    <Card>
                        <Card.Body className='text-center'>
                            <h2 className='text-center'>Random Contacts</h2>
                            <p>Mistakes</p>
                            <input
                                type="range"
                                className="form-range"
                                min="0"
                                max="10"
                                step="0.01"
                                defaultValue="0"
                                id="customRange3"
                            ></input>
                            <button
                                className={
                                    country === uz ? "btn btn-success" : "btn btn-secondary"
                                }
                                onClick={() => {
                                    setCountry(uz);
                                }}
                            >
                                Uzbekistan
                            </button>
                            <button
                                className={
                                    country === ru ? "btn btn-success" : "btn btn-secondary"
                                }
                                onClick={() => {
                                    setCountry(ru);
                                }}
                            >
                                Russia
                            </button>
                            <button
                                className={
                                    country === us ? "btn btn-success" : "btn btn-secondary"
                                }
                                onClick={() => {
                                    setCountry(us);
                                }}
                            >
                                USA
                            </button>
                            <div className='mt-3'>
                                <button
                                    className="btn btn-success"
                                onClick={() => {
                                    genContacts(country, 10);
                                }}
                                >
                                    Generate
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <Table contacts={contacts} />
            </div>
        </div>
    )
}
