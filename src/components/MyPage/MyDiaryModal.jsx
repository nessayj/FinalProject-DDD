import React from 'react';
import styled from 'styled-components';
import exhibitionData from '../exhibition/exhibitionData';
import { commentAboutCount } from './Data'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SlPencil } from "react-icons/sl";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

// ====== data 확인하기 =====

const RatingTitle = styled.div`
    line-height: 2.5rem;

        .title{
        font-weight: bold;
        font-size: 1.2rem;
        }
        .date{
            font-size: 1rem;
        }
        .rateStar{
            padding: 1rem 0;
        }
`;

const 대표이미지 = {
    width: '8rem',
    height:'10rem',
    minWidth: 'calc(60px * 1.4)',
    minHeight: 'calc(40px * 1.4)',
    objectFit: 'cover',
    overflowX: 'hidden',
    objectPosition: 'top',
    borderRadius: '0.3rem',
    border : '1px solid #ddd'
}
const TestIcon = styled.div`
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8%;
    margin: 0 1%;
    font-size: 1.2rem;
    border-radius: 5rem;
`


const MyDiaryModal = () => {
    const countDiary = 60;
    const countCheck = () => {
      for (let key in commentAboutCount) {
        if (countDiary < key) {
          return commentAboutCount[key];
        }
      }
    };
  
    const comment = countCheck();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    const da = {
      index: 1,
      name: '에드워드 호퍼:길위에서',
      startDate: '2023-01-01',
      endDate: '2023-01-07',
      location: '서울',
      place: '서울 시립미술관 서소문본관 전층',
      imgUrl: 'https://ticketimage.interpark.com/Play/image/etc/23/23004076-08.jpg'
    };
  
    return (
      <>
        <div className='count'>{countDiary}</div>
        <div className='desc'>{comment}</div>


     {           
        exhibitionData.slice(0, 5).map((ticket, index) => (
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
        sx={{width:'85%'}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '24%',minWidth:'150px', height:'10rem'}}>
              <img src={ticket.imgUrl} alt="Exhibition" style={대표이미지} />
            </Typography>
            <Typography >
                <RatingTitle>
                    <div className='title'>{ticket.name}</div>
                    <div className='date'>{ticket.startDate}</div>
                    <Rating name="half-rating" defaultValue={0} precision={0.5} size="large" className='rateStar' />
                </RatingTitle>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
                <Box sx={{ width: '100%', maxWidth: '100%', display:'flex' }}>
                    <TextField fullWidth label="한 줄 평을 남겨주세요! &emsp; " id="fullWidth" />
                    <TestIcon>
                    <Tooltip title="저장">
                        <IconButton>
                            <SlPencil />
                        </IconButton>
                        </Tooltip>
                    </TestIcon>
                </Box>
            </Typography>
          </AccordionDetails>
        </Accordion>
        ))
 }
      </>
    );
  };
  
  export default MyDiaryModal;
  

// {
//     exhibitionData.slice(0, 5).map((ticket, index) => (
//         <Container key={index}>
//             <div className="showImage"><img src={ticket.imgUrl} /></div>
//             <div className='justfyTop'>
//                 <div className='leftBox'>
//                    
//             </div>
//         </Container>
//     ))
// }
// 