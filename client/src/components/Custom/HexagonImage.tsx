import React from 'react'

export interface IHexagonImage {
    minWidth: string;
    minHeight: string;
    positionTop?: string;
    positionLeft?: string;
    positionRight?: string;
    positionBottom?: string;
    imageURL: string
}

export default function HexagonImage(props: IHexagonImage) {
    const id = props.imageURL.toString();
    // Dette funker jo, men kanskje bruke noe mer fancy ID greier - GUID? - eller hash'e

    return (
        <React.Fragment>
            <svg
                style={{ 
                    zIndex: 3, 
                    minWidth: `${props.minWidth}`, 
                    minHeight: `${props.minHeight}`,
                    maxWidth: `${props.minWidth}`,
                    maxHeight: `${props.minHeight}`,
                    position: "absolute", 
                    top: `${props.positionTop}`, 
                    left: `${props.positionLeft}` ,
                    right: `${props.positionRight}`,
                    bottom: `${props.positionBottom}`
                }} 
                viewBox="0 0 88 100" 
                version="1.1" 
                xmlns="http://www.w3.org/2000/svg"
                >
                <path d="M44 0L87.3013 25V75L44 100L0.69873 75V25L44 0Z" fill={`url(${"#hexagon".concat(id)})`}/>
                <defs>
                    <pattern
                        id={"hexagon".concat(id)}
                        patternUnits="userSpaceOnUse"
                        width="88"
                        height="100"
                        >
                        <use xlinkHref={"#".concat(id)}/>
                    </pattern>
                    <image
                        id={id}
                        xlinkHref={`${props.imageURL}`}
                        x="-44"
                        width="196" // Dobbel av bredden (2 * 88)
                        height="100"
                    />
                </defs>
            </svg> 
        </React.Fragment>
    );
}