import React from 'react';
import styled from 'styled-components';
import exhibitionData from '../exhibition/exhibitionData';

// ====== data 확인하기 =====

const Container = styled.div`
    width: 94%;
    height: 8rem;
    background-color: white;
    border: 1px solid #eee;
    border-radius: .4rem;
    align-items: center;
    display: flex;
    margin-bottom: .8rem;
    box-shadow: 0 3px 3px rgba(0,0,0,0.2);
    cursor: pointer;
    

    .showImage{
        display: flex;
        height: 90%;
        width: 20%;
        /* background-color: blue; */
        padding: auto;
        margin-left: .3rem;
    }
    .showImage img{
        width: 8rem;
        object-fit: cover;
        overflow-x: hidden;
        object-position: top;
        border-radius: 0.3rem;

    }
    .justfyTop{
        align-items: bottom;
        display: flex;
        /* background-color: aqua; */
        width: 100%;
        height: 76%;
        align-items: stretch;
        
        .leftBox{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        /* background-color: blue; */
        margin: 0 .2rem;
        width: 100%;
        font-size: .6rem;
        }
        span{
            font-weight: bold;
            margin: 0 .6rem;
            width: 3rem;
            font-size: .6rem;
            float: left;

        }

        .flexRow{
            flex-direction: row;
            width: 100%;
            /* background-color: red; */

            .row2{
                width: 50%;
                /* background-color: aqua; */
                float: right;
            }
        }
    }   
`;

const ReservedDetail = () => {
    return (
        <>
            <div className='count'>총 {exhibitionData.length} 건</div>

                {
                    exhibitionData.slice(0, 3).map((ticket, index) => (
                        <Container key={index}>
                            <div className="showImage"><img src={ticket.imgUrl} /></div>
                            <div className='justfyTop'>
                                <div className='leftBox'>
                                    <div><span>전시명</span> {ticket.name}</div>
                                    <div><span>전시관</span>{ticket.place}</div>
                                    <div className='flexRow'>
                                        <div className='row2'><span>관람인원</span>{ticket.index}</div>
                                        <div className='row2'><span>관람일시</span>{ticket.startDate}</div>
                                    </div>
                                    <div className='flexRow'>
                                        <div className='row2'><span>금액</span>{ticket.index}</div>
                                        <div className='row2'><span>결제일시</span>{ticket.startDate}</div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    ))
                }


        </>
    );
};

export default ReservedDetail;