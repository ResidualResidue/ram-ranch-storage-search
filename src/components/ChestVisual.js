function ChestVisual({chestnum, wall}){
    let total_chests = 1
    if(wall ==='Left'){
        total_chests=41
    }else if(wall === 'Right'){
        total_chests=41
        chestnum=104-chestnum
    }else{
        total_chests=22
        chestnum=63-chestnum
    }
    let distance=chestnum/total_chests * 100
    // Set the width and background color based on the proportion
    const lineStyle = {
        width: '100px',
        height: '100px', // Set the height as per your requirements
        borderRight: '5px solid black',
        borderLeft: '5px solid black',
        borderTop: '5px solid black'
    };

    return (
        <div style={{marginLeft: 50}}>
            { wall === "Back" ?
                <div>
                <div style={{width: '4px', marginRight: `${distance}%`, borderBottom: '4px solid red' }}></div>
                <div style={lineStyle}></div>
                </div> : ''
            }
            { wall === "Right" ?

                <div style={{ display: 'flex' }}>
                <div style={lineStyle}></div>
                <div style={{ flex: 1, height: '4px', marginTop: `${100-distance}%`, borderLeft: '4px solid red' }}></div>
                </div> : ''
            }
            { wall === "Left" ?

                <div style={{ display: 'flex' }}>
                <div style={{ flex: 1, height: '4px', marginTop: `${100-distance}%`, borderRight: '4px solid red' }}></div>
                <div style={lineStyle}></div>
                </div> : ''

            }
        </div>
    );

}

export default ChestVisual;