import React from 'react';


const Search = (props) => {

    const onChange = (e) => {
        props.setInput(e.target.value);
    }

    return (
        <div className="position-relative me-5" >
            <div className="position-absolute top-0 end-0">
                <div className="input-group mb-3 ">
                    <input 
                        type="text"
                        className="form-control"
                        placeholder="Buscar"
                        value={props.input}
                        onChange={onChange}>
                    </input>
                </div>
            </div>
        </div>
    );
}

export default Search;