import React from 'react'

export default function Card() {
    return (
        <div>
            <div >
                <div className="card bg-dark text-white my-3 mx-4" style={{ width: '18rem', 'maxHeight': '460px' }}>
                    <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">this is description of card</p>
                    </div>
                    <div className='container w-100'>
                        <select className='m-2h-100 bg-success'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}

                        </select>
                        <select className='m-2 h-100 bg-success'>
                            <option value="half">half</option>
                            <option value="full">full</option>
                        </select>
                        <div className='d-inline w-100 fs-5 '>
                            total price
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

