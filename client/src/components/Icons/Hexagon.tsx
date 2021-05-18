import React from 'react'

interface HexagonDimensions {
    minWidth: String,
    minHeight: String,
    positionTop?: String,
    positionLeft?: String,
    positionRight?: String,
    positionBottom?: String,
    imageURL: String
}

const HexagonIcon: React.FunctionComponent<HexagonDimensions> = props => (
        <div>
         <svg 
            style={{ 
                zIndex: 3, 
                minWidth:`${props.minWidth}`, 
                minHeight:`${props.minHeight}`,
                maxWidth:`${props.minWidth}`,
                maxHeight:`${props.minHeight}`,
                position:'relative', 
                top:`${props.positionTop}`, 
                left:`${props.positionLeft}` ,
                right:`${props.positionRight}`,
                bottom:`${props.positionBottom}`
            }} 
                viewBox="0 0 100 100" 
                version="1.1" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern id="img" patternUnits="userSpaceOnUse" width="150" height="100">
                    <image 
                       /*  name={`${props.imageURL}`} */
                        xlinkHref={`${props.imageURL}`}
                        x="-25" 
                        width="150" 
                        height="100" />
                    </pattern>
                </defs>
                <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)"/>
            </svg> 
        </div>
    );


export default HexagonIcon