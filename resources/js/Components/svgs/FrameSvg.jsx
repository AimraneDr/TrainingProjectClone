export default function FrameSvg({fill, width, height, className}){
    return (
        <svg
            fill={fill || "#000000"}
            width={width || "800px"}
            height={height || "800px"}
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path d="M7 3.5h-6c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-5h5c0.552 0 1-0.448 1-1s-0.448-1-1-1zM31 20.5c-0.552 0-1 0.448-1 1v5h-5c-0.552 0-1 0.448-1 1s0.448 1 1 1h6c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1zM7 26.5h-5v-5c0-0.552-0.448-1-1-1s-1 0.448-1 1v6c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1s-0.448-1-1-1zM31 3.5h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h5v5c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
        </svg>
    );
}