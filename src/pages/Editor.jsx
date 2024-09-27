import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const Editor = ({ placeholder }) => {
	const editor = useRef(null);
	const [content, setContent] = useState('');
    console.log("editor rendered ....")
	// const config = useMemo(
	// 	{
	// 		readonly: false, // all options from https://xdsoft.net/jodit/docs/,
	// 		placeholder: placeholder || 'Start typings...'
	// 	},
	// 	[placeholder]
	// );

    const config =  {
        		readonly: false, // all options from https://xdsoft.net/jodit/docs/,
        		placeholder: placeholder || 'Start typings...'
        	}

	return (
        <>
		<JoditEditor
			ref={editor}
			value={content}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
		/>
        <button onClick={() => {
            console.log(content)
        }}>show</button>
</>
	);
};

export default Editor;