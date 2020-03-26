import React from 'react'

export default function PlaceHolder2(props) {

    setTimeout(() => {
        props.history.push('/');
    }, 3000);

    return (
        <div className="container">
            <p>Placeholder 2 says:</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, reprehenderit sequi illum, vitae neque fuga temporibus cumque mollitia non vero, dolorum fugiat ad nihil? Similique a quisquam velit quod iste.</p>
            <p>Please wait, you are being programmatically redirected...</p>
        </div>
    )
}
