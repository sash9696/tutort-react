
import './CopyToClipBoard.css';
import {MdOutlineCopyAll} from 'react-icons/md';
import {AiFillCheckCircle} from 'react-icons/ai';
import { useState } from 'react';


export default function CopyToClipBoard(){
    const code = 'npm create-react-app my-app';
    const [isCopied, setIsCopied] = useState(false);


    async function copyTextToClipboard(text){
        if('clipboard' in navigator){
            return await navigator.clipboard.writeText(text);
        }else{
           return document.execCommand('copy', true, text);
        }
    }

    function handleCopy(){
        setIsCopied(true);

        copyTextToClipboard(code)
            .then(() => {
                setTimeout(() => {
                    setIsCopied(false);
                }, 2000)
            })
            .catch((err) => {
                console.log(err);
            })

    }

    return (
        <div className='codeBox'>
            <code className='copyContainer'>
                    {code}
            </code>
            <div className='copyIcon' onClick={handleCopy} >
                <MdOutlineCopyAll size={25}/>
            </div>
            
            <div className='copiedAlert' style={{
                visibility: `${isCopied ? 'visible' : 'hidden' }`,
                opacity: `${isCopied ? '1' : '0'}`,
                transform: `${isCopied ? `translate(0px, 0px)` : `translate(0px, 40px)` }`,
                transition: '0.3s ease-in'
            }} >
                <div className='check'>
                    <AiFillCheckCircle size={25}/>
                </div>
                Copied to clipboard
            </div>
        </div>
    )
}

