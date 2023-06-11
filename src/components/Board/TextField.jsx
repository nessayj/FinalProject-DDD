import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import styled from 'styled-components';
import { useState } from 'react';


const TextWrap = styled.div`
  width: 95%;
  margin: 0 auto;

  .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    min-height: 400px;   
  }

  .ck-editor__main {padding: 0;}

`;


const TextField = () => {

  const [detailvalue, setDetailvalue] = useState("");

  


  return (
    <TextWrap>
        <CKEditor 
        editor={ClassicEditor} 
        data={detailvalue} 
        onChange={(event, editor) => {
          const data = editor.getData();
            setDetailvalue(data);
        }}
        config={{
          placeholder: '자유롭게 작성 가능합니다.'
        }}
        />
    </TextWrap>
  );
};

export default TextField;