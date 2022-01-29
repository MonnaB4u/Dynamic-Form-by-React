import { Add, Remove } from '@mui/icons-material';
import { Button, Container, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react';


const NewStart = () => {
    // const makeStyle = makeStyles((theme) => { })
    const [inputField, setInputfield] = useState([{}]);



    const handleChangeInput = (index, e) => {
        const values = [...inputField]
        values[index][e.target.name] = e.target.value;
        setInputfield(values)
    }

    const handleAdd = () => {
        setInputfield([...inputField, { formName: '' }])
    }

    const handleRemove = (index) => {
        const value = [...inputField]
        value.splice(index, 1)
        setInputfield(value)
    }


    //////////////////\

    const [inputField2, setInputfield2] = useState([]);

    const handleChangeInput2 = (index2, e) => {
        const values = [...inputField2]
        values[index2][e.target.name] = e.target.value;
        setInputfield2(values)
    }

    const handlTetx = () => {
        setInputfield2([...inputField2, { text: '' }])
    }


    const handleAdd2 = () => {
        setInputfield2([...inputField2, { text: '' }])
    }

    const handleRemove2 = (index2) => {
        const values = [...inputField2]
        values.splice(index2, 1)
        setInputfield2(values)
    }


    ////////////////////////

    const [inputField3, setInputfield3] = useState([]);

    const handleChangeInput3 = (index2, e) => {
        const values = [...inputField3]
        values[index2][e.target.name] = e.target.value;
        setInputfield3(values)
    }

    const handlTetx2 = () => {
        setInputfield3([...inputField3, { number: '' }])
    }


    const handleAdd3 = () => {
        setInputfield2([...inputField3, { number: '' }])
    }

    const handleRemove3 = (index2) => {
        const values = [...inputField3]
        values.splice(index2, 1)
        setInputfield3(values)
    }


    /////////////////////////////////

    const [inputField4, setInputfield4] = useState([]);
    const handleChangeInput4 = (index2, e) => {
        const values = [...inputField4]
        values[index2][e.target.name] = e.target.value;
        setInputfield4(values)
    }

    const handlTetx3 = () => {
        setInputfield4([...inputField4, { date: '' }])
    }


    const handleAdd4 = () => {
        setInputfield2([...inputField4, { date: '' }])
    }

    const handleRemove4 = (index2) => {
        const values = [...inputField4]
        values.splice(index2, 1)
        setInputfield4(values)
    }

    //////////////////////////

    const [inputField5, setInputfield5] = useState([]);
    const handleChangeInput5 = (index2, e) => {
        const values = [...inputField5]
        values[index2][e.target.name] = e.target.value;
        setInputfield5(values)
    }

    const handlTetx4 = () => {
        setInputfield5([...inputField5, { textArea: '' }])
    }


    const handleAdd5 = () => {
        setInputfield2([...inputField5, { textArea: '' }])
    }

    const handleRemove5 = (index2) => {
        const values = [...inputField5]
        values.splice(index2, 1)
        setInputfield5(values)
    }



    //////////////////

    const handleSubmit = (e) => {
        const finalValue = [...inputField, ...inputField2, ...inputField3, ...inputField4, ...inputField5   ]
        console.log("InputFields2", finalValue);
        e.preventDefault()
    }

    return (
        <Container>
            <div className="row">
                <div className="col-sm-6 mt-5">
                    <h1>Add new member</h1>
                    <form action="" className="m-3" onSubmit={handleSubmit}>

                        {inputField.map((input, index) =>
                            <div key={index}>

                                <TextField
                                    onChange={e => handleChangeInput(index, e)}
                                    name="formName" label="Form Name"
                                    variant="filled" value={inputField.formName} />

                                <IconButton onClick={() => handleRemove(index)}>
                                    <Remove></Remove>
                                </IconButton>

                                <IconButton onClick={() => handleAdd()}>
                                    <Add></Add>
                                </IconButton>


                            </div>
                        )}
                        {/* //////////////////Text////////////////////// */}

                        {inputField2.map((input2, index2) =>
                            <div key={index2}>

                                <TextField
                                    onChange={e => handleChangeInput2(index2, e)}
                                    name="text" label="Text"
                                    variant="filled" value={inputField2.text} />

                                <IconButton onClick={() => handleRemove2(index2)}>
                                    <Remove></Remove>
                                </IconButton>

                                <IconButton onClick={() => handleAdd2()}>
                                    <Add></Add>
                                </IconButton>


                            </div>
                        )}

                        {/* ///////////Number/////////// */}


                        {inputField3.map((input2, index2) =>
                            <div key={index2}>

                                <TextField
                                    onChange={e => handleChangeInput3(index2, e)}
                                    name="number" label="Number"
                                    variant="filled"  value={inputField3.number} />

                                <IconButton onClick={() => handleRemove3(index2)}>
                                    <Remove></Remove>
                                </IconButton>

                                <IconButton onClick={() => handleAdd3()}>
                                    <Add></Add>
                                </IconButton>


                            </div>
                        )}


                        {/* /////////////////Date///////////////// */}

                        {inputField4.map((input4, index4) =>
                            <div key={index4}>

                                <TextField
                                    onChange={e => handleChangeInput4(index4, e)}
                                    name="date" label="Date"
                                    variant="filled" value={inputField4.date} />

                                <IconButton onClick={() => handleRemove4(index4)}>
                                    <Remove></Remove>
                                </IconButton>

                                <IconButton onClick={() => handleAdd4()}>
                                    <Add></Add>
                                </IconButton>


                            </div>
                        )}



                        {/* ////////////TextArea/////////// */}


                        {inputField5.map((input5, index5) =>
                            <div key={index5}>

                                <TextField
                                    onChange={e => handleChangeInput5(index5, e)}
                                    name="textArea" label="Text Area"
                                    variant="filled" value={inputField5.textArea} />

                                <IconButton onClick={() => handleRemove5(index5)}>
                                    <Remove></Remove>
                                </IconButton>

                                <IconButton onClick={() => handleAdd5()}>
                                    <Add></Add>
                                </IconButton>


                            </div>
                        )}

                        <Button onClick={handleSubmit} className="mt-2" variant="contained" color="primary" type="submit" >Send </Button>
                    </form>
                </div>

                <div className="col-sm-6 mt-5">
                    <div className="container">
                        <button className="btn bg-success m-3 w-25 text-white" onClick={() => handlTetx()}>Text</button>
                        <button className="btn bg-success m-3 w-25 text-white" onClick={() => handlTetx2()}>Number</button>
                        <button className="btn bg-success m-3 w-25 text-white" onClick={() => handlTetx3()}>Date</button>
                        <button className="btn bg-success m-3 w-25 text-white" onClick={() => handlTetx4()}>Text Area</button>
                    </div>


                </div>
            </div>

        </Container>
    );
};

export default NewStart;
