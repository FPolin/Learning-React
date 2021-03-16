import React from 'react'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

const QuillEditor = () => {
    const { quill, quillRef } = useQuill();
    return (
        <div>
            <h3>Description: </h3>
            <div style={{ "width": "95%" , "height": "300px", "margin" : "auto", borderStyle : "2px solid red" }}>
            <div ref={quillRef} />
            </div>
        </div>
        
    )
}

export default QuillEditor;