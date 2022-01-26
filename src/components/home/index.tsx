import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HIT_MOVIE } from 'redux/actions';
import Logos from "assets/img/movie-theater.png"
import UB from "assets/img/ub.png"
import SearchBox from "components/home/searchbox"
import { Hooks } from 'providers';
function Index(props: any) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: HIT_MOVIE,
            payload: {
                search: 'Marvel'
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const { temp } = useContext(Hooks);
    const { movie } = useSelector((state: any) => ({
        movie: state?.movie?.list?.data?.Search
    }));
    return (
        <>
            <div className="home">
                <div className="container">
                    <div className="d-flex title-pg justify-content-between">
                        <h1 className='my-auto'>
                            <img src={UB} alt="" style={{ height: '40px' }} />
                        </h1>
                        <img src={Logos} alt="" className="logos" />
                    </div>
                    <SearchBox />
                    <div className="description">
                        Keyword: {temp !== null ? temp : 'Marvel'}
                    </div>
                    <div className="movie-list row text-center mx-auto col-12">
                        {
                            movie?.length > 0 ? movie?.map((val: any, index: any) => {

                                return (
                                    <div className="movie-list_box mx-auto" key={val.Year + index}>
                                        <div className="movie-list_content" style={{
                                            backgroundImage: `url(${val.Poster})`,
                                            width: '100%',
                                            height: '100%'
                                        }}>
                                            <div className='movie-list_text'>
                                                {val.Title}
                                                <br />
                                                {val.Year}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : (<><h3>Sorry movie {temp} not found :(</h3></>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;