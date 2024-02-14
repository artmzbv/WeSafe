import {React, useRef, useEffect} from 'react';
import * as d3 from 'd3'
import './TransitionGraph.css'

export default function TransitionGraph() {
    const svgRef = useRef();
    const width = "100%";
    const height = "100%";

    useEffect(() =>{
        d3.select("svg").remove()
        d3.select("svg").remove()
        const svg = d3.select(svgRef.current)
        .append("svg")
        .attr("viewBox", [0, 0, width, height])
        .attr("width", width)
        .attr("height", height)
        .style("font", "14px sans-serif");
    
    },[])

    return (<><div className='transition-graph'  ref={svgRef}></div>
    <div className='treemap_test' ></div>
    {/* <button>Click_zoomout</button> */}
    </>)
}