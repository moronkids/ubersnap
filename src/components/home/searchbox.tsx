/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useContext, useEffect } from 'react';
import _debounce from "lodash/debounce";
import { HIT_MOVIE } from 'redux/actions';
import { useDispatch } from 'react-redux';
import { Hooks } from 'providers';

function Searchbox(props: any) {
    const { temp, setTemp } = useContext(Hooks);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: HIT_MOVIE,
            payload: {
                search: temp
            }
        })
    }, [temp]);
    const changeHandler = (event: any) => {
        setTemp(event.target.value);
    };
    const debouncedChangeHandler = useCallback(
        _debounce(changeHandler, 300)
        , []);

    return (
        <>
            <input className="search-box" onChange={(e) => debouncedChangeHandler(e)}>

            </input>
        </>
    );
}

export default Searchbox;