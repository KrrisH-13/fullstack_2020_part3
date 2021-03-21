const Notification = ({code, message}) => {
    // codes - 
    // 0 - neutral message - alert to user (neutral colours)
    // 1 - Positive messages - creation, edits, etc. (positive colours)
    // 2 - Negative messages - deletion, errors, etc. (negative colours)
    // console.log('notification updated')

    if (code === 1){
        // console.log('code = 1')
        return(
                <div className='positiveAlert'>
                    {message}
                </div>
        );
    }
    else if (code ===2){
        // console.log('code = 2')

        return(
            <div className='negativeAlert'>
                {message}
            </div>
        );
    }
    else if (code ===3){
        // console.log('code = 3')

        return(
            <div className='neutralAlert'>
                    {message}
            </div>
        );
    }
    // console.log('code = other')

    //  any other code passed, return empty.
    return(<></>);
}

export default Notification;
