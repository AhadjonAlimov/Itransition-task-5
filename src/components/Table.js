import React from 'react'

export default function Tables({ contacts }) {
    console.log(contacts)
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Full Name</th>
                        <th scope="col">Country</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((contacts) => {
                            return (
                                <tr>
                                    <td>{contacts[1]}</td>
                                    <td>{contacts[2]}</td>
                                    <td>{contacts[3]}</td>
                                    <td>{contacts[4]}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
