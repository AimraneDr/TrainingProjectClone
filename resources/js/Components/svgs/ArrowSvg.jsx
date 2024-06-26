export default function ArrowSvg({ fill, width, height, className }) {
    return (
        <svg
            fill={fill || "#000000"}
            width={width || "800px"}
            height={height || "800px"}
            className={className}
            viewBox="0 0 52 52"
            data-name="Layer 1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g data-name="Group 132" id="Group_132">
                <path d="M14,52a2,2,0,0,1-1.41-3.41L35.17,26,12.59,3.41a2,2,0,0,1,0-2.82,2,2,0,0,1,2.82,0l24,24a2,2,0,0,1,0,2.82l-24,24A2,2,0,0,1,14,52Z" />
            </g>
        </svg>
    );
}
