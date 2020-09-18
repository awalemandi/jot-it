import React, {useState} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const TextEditor = () => {
    const [content, setContent] = useState('');
    return (
        <CKEditor editor={ClassicEditor}
            data={content}
            onChange={(event, editor) => {
                 const data = editor.getData();
                 setContent(data);
             }}
         />
    )
}

export default TextEditor;