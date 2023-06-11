import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 70%;
    height: 100%;
    background-color: #f96c6c;
    p {
        text-align: left;
        /* margin-left: 7%; */
        margin: 0rem 0 .3rem 0;
        font-size: .8rem;
        /* font-size: .8rem; */
        font-weight: bold;
    }
    .title {
        padding-left: 1rem;
        /* background-color: red; */
        height: 7%;
        font-weight: bold;
        color: white;
    }
`;

const DeleteAccount = () => {
    return (
        <>
            <Container>
                <div className='title'>회원탈퇴</div>
                
            </Container>
            
        </>
    );
};

export default DeleteAccount;