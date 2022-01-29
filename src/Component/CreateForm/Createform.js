import React, { useState } from 'react';

const Createform = () => {
    const [text, setText] = useState([]);
    // const [number, setNumber] = useState(0);
    // const [date, setDate] = useState(0);
    // const [area, setArea] = useState(0);

    const handleText = (player) => {
        // setText(text + 1);
        // console.log("click");
         const text = [...text, player];
         setText(text)
    };

    // const handleNumber = () => {
    //     setNumber(number + 1);
    //     console.log("click");
    // };

    // const handleDate = () => {
    //     setDate(date + 1);
    //     console.log("click");
    // };

    // const handleArea = () => {
    //     setArea(area + 1);
    //     console.log("click");
    // };

    return (
        <div>
            <div className="container my-4 text-center">

                <div className="row">

                    <div className="col-sm-6">
                        <form action="">
                            <label htmlFor="">form name</label>
                            <br />
                            <input type="form number" />
                            {/* {Array.from(Array(text)).map((c, index) => {
                                return (
                                    <form action="">
                                        <label htmlFor="">text</label>
                                        <br />
                                        <input key={c} className={index} type="text" />
                                    </form>
                                );
                            })}

                            {Array.from(Array(number)).map((c, index) => {
                                return (
                                    <form action="">
                                        <label htmlFor="">Number</label>
                                        <br />
                                        <input key={c} className={index} type="text" />
                                    </form>
                                );
                            })}

                            {Array.from(Array(date)).map((c, index) => {
                                return (
                                    <form action="">
                                        <label htmlFor="">Date</label>
                                        <br />
                                        <input key={c} className={index} type="text" />
                                    </form>
                                );
                            })}

                            {Array.from(Array(area)).map((c, index) => {
                                return (
                                    <form action="">
                                        <label htmlFor="">Text Are</label>
                                        <br />
                                        <input key={c} className={index} type="text" />
                                    </form>
                                );
                            })} */}
                            {
                                text.length > 0 ? <button >click me</button> : <button style={{ display: 'none' }}>Generate</button>
                            }
                        </form>
                    </div>

                    <div className="col-sm-6">
                        <div>
                            <button className="btn bg-success" onClick={() => handleText()}>text</button>
                            <br />
                            {/* <button className="btn bg-success mt-2" onClick={() => handleNumber()}>number</button>
                            <br />
                            <button className="btn bg-success" onClick={() => handleDate()}>date</button>
                            <br />
                            <button className="btn bg-success mt-2" onClick={() => handleArea()}>text area</button> */}
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Createform;
