import React, { useState } from 'react';
import styled from 'styled-components';
import { SlMagnifier } from 'react-icons/sl'
import ReservedDetail from './ReservedDetail';

const Container = styled.div`
    width: calc(100% - 2.5rem);
    height: 100%;
    padding-left: 2.5rem;
    background-color: #7bc1b2;
    p {
        text-align: left;
        margin: 0rem 0 .3rem 0;
        font-size: .8rem;
        font-weight: bold;
    }
    .title {
        /* background-color: red; */
        height: 5%;
        font-weight: bold;
    }
    .serachBox{
        padding-left: 1rem;
        width: calc(100% - 3.5rem);
        height: 3rem;
        display: flex;
        margin: 0rem 0 ;
        background-color: #F4F8FF;
        align-items: center;
        input, select{
            border: 1px solid #eee;
        }
        input:focus{
            outline: none;
        }

        span, input, select{
            margin-right: .6rem;
            font-size: .8rem;
        }
        .boldText{
            font-weight: bold;
            margin-right: 1.3rem;
        }
        select{
            width: 8rem;
            min-height: 21px;
        }
        .searchBar{
            width: 8rem;
            margin-right: .3rem;
            
        }
        .btn{
            font-size: .8rem;
            width: 1rem;
            height: 1rem;
            margin: 0;
            background-color: #eee;
            float: right;
            padding: .3rem;
            border-radius: 50%;
            text-align: center;
            align-items: center;
            display: flex;
            justify-content: center;
            cursor: pointer;

        }

    }
    .count{
        /* background-color: red; */
        height: 4rem;
        font-weight: bold;
        align-items: center;
        display: flex;

    }
`;






const MyReservation = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedState, setSelectedState] = useState('lastest')

    const handleSelectChange = (event) => {
      setSelectedValue(event.target.value);
    };

    return (
        <>
            <Container>
                <div className='title' >예약 관리</div>
                <div className='serachBox'>
                    <span className='boldText'>구분</span>
                    <input type="radio" name="searchDate" value="lastest" defaultChecked onChange={() => setSelectedState('lastest')}/> 
                    <span>최신순</span>
                    <input type="radio" name='searchDate' value="search" onChange={() => setSelectedState('search')}/> 
                    <span>검색</span>
                    {
                        selectedState === 'lastest' && (
                            <select value={selectedValue} onChange={handleSelectChange}>
                            <option value="2023">2023년</option>
                            <option value="2022">2022년</option>
                            <option value="2021">2021년</option>
                            <option value="2020">2020년</option>
                            </select>)
                    }
                    {
                        selectedState === 'search' && (
                            <>
                                <input type="text" className='searchBar' height={'1rem'} />
                                <div className='btn'><SlMagnifier/></div>
                            </>
                        )
                    }
                </div>
                    <ReservedDetail/>

            </Container>
            
        </>
    );
};

export default MyReservation;