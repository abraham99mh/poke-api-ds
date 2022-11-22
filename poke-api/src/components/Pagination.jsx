import React, { useEffect } from 'react';

const Pagination = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    const FirstPage = () => {
        if (props.offset > 1) {
            return (
                <>
                    <li className="page-item">
                        <button className="page-link" onClick={onClickFirst}>Primera</button>
                    </li>
                    <li className="page-item">
                        <button className="page-link" onClick={onClickAnterior} >{(props.offset/20)}</button>
                    </li>
                </>
            )
        }
    }

    const LastPage = () => {
        if (props.offset < props.lastOffset) {
            return (
                <>
                    <li className="page-item"><button className="page-link" onClick={onClickSiguiente} >{(props.offset/20)+2}</button></li>
                    <li className="page-item">
                        <button className="page-link" onClick={onClickLast}>Última</button>
                    </li>
                </>
            )
        }
    }

    const onClickAnterior = () => {
        props.changeOffset(props.offset - 20);
    }

    const onClickSiguiente = () => {
        props.changeOffset(props.offset + 20);
    }

    const onClickFirst = () => {
        props.changeOffset(0);
    }

    const onClickLast = () => {
        props.changeOffset(props.lastOffset);
    }


    return (<>
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center ">
                <FirstPage />
                <li className="page-item"><button className="page-link active" >{(props.offset/20)+1}</button></li>
                <LastPage />
            </ul>
        </nav>
    </>);
}

export default Pagination;