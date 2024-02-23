import {React, useRef, useEffect} from 'react';
import * as d3 from 'd3'
import './TransitionGraph.css'

const data = [
    {"date": "2025", "quantity": 26754.9},
    {"date": "2030", "quantity": 30848.25},
    {"date": "2035", "quantity": 31538.56},
    {"date": "2040", "quantity": 33163.58},
    {"date": "2045", "quantity": 35788.9},
    {"date": "2050", "quantity": 36353.5},
]

// console.table(dataset)

export default function TransitionGraph() {
    const svgRef = useRef();
    const w = 400;
    const h = 300;
    var padding = 40;

    useEffect(() =>{
        d3.select("svg").remove()
        d3.select("svg").remove()
        d3.select("svg").remove()

        var rowConverter = function(d) {
            return {
                date: new Date(+d.date, +0), //Make a new Date object for each year + month
                quantity: parseFloat(d.quantity)  //Convert from string to float
            };
        }

        const dataset = data.map((d) => rowConverter(d))
        //   console.log(d3.min(dataset, function(d) { return d.date.getFullYear()}))
        //   console.log(d3.max(dataset, function(d) { return d.date.getFullYear(); }))
        //   console.log(d3.max(dataset, function(d) { return typeof(d.date.getFullYear()); }))
        //   console.log(w)

        console.log(d3.min(dataset, function(d) { return d.date.getFullYear()}))
        //   console.log(d3.max(dataset, function(d) { return d.date.getFullYear(); }))
        //   console.log(d3.max(dataset, function(d) { return typeof(d.date.getFullYear()); }))

        const xScale = d3.scaleTime()
        .domain([
        d3.min(dataset, function(d) { return     d.date}),
        d3.max(dataset, function(d) { return d.date})
        ])
        .range([padding, w-15]);

        const yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, function(d) { return d.quantity; })])
        .range([h-padding, 15]);

        //For converting Dates to strings
        var formatTime = d3.timeFormat("%Y");

        //Define axes
        const xAxis = d3.axisBottom()
                .scale(xScale)
                .ticks(5)
                .tickFormat(formatTime)

        //Define Y axis
        const yAxis = d3.axisLeft()
                .scale(yScale)
                .ticks(10);

        console.log(d3.max(dataset, function(d) { return typeof(d.quantity); }))
        console.log(d3.line().x(function(d) { return xScale(d.dataset); }))
        
        //Define line generator
        const line = d3.line()
        .defined(function(d) { return d; })
        .x(function(d) { return xScale(d.date); })
        .y(function(d) { return yScale(d.quantity); });
        
        //Print data to console as table, for verification
        console.table(dataset, ["date", "quantity"]);
        
        const svg = d3.select(svgRef.current)
        .append("svg")
        .attr("width", w)
        .attr("height", h);
        
        svg.append("path")
        .datum(dataset)
        .attr("class", "line")
        .attr("d", line);

        console.log(svg)
        console.log(dataset)
	
        //Create axes
		svg.append("g")
			.attr("class", "axis")
			.attr("transform", "translate(0," + (h - padding) + ")")
			.call(xAxis);

		svg.append("g")
			.attr("class", "axis")
			.attr("transform", "translate(" + padding + ",0)")
			.call(yAxis);
        },[])

    return (<><div className='transition-graph'  ref={svgRef}></div>
    <div className='transition-graph_test' ></div>
    </>)
}