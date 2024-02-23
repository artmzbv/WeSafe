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
    const w = 450;
    const h = 300;
    const margin = 20
    var padding = 50;

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
        d3.min(dataset, function(d) { return d.date}),
        d3.max(dataset, function(d) { return d.date})
        ])
        .range([padding, w-30]);

        const yScale = d3.scaleLinear()
        .domain([20000, d3.max(dataset, function(d) { return d.quantity; })])
        .range([h-padding, 30]);

        //For converting Dates to strings
        var formatTime = d3.timeFormat("%Y");

        //Define axes
        const xAxis = d3.axisBottom()
                .scale(xScale)
                .ticks(5)
                .tickFormat(formatTime) 
                // .tickSize()
                // .tickValues(0)

        //Define Y axis
        const yAxis = d3.axisLeft()
                .scale(yScale)
                .ticks(5)
                .tickFormat(d3.format(".2s"));

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

        const tooltip = d3.select(svgRef.current)
            .append("div")
            .style("position", "absolute")
            .style("opacity", 0)
            .attr("class", "tooltip")
            .style("background-color", "white")
            .style("padding", "5px")
  
        //Create axes
		svg.append("g")
			.attr("class", "axis")
			.attr("transform", "translate(0," + (h - padding) + ")")
			.call(xAxis);

		svg.append("g")
			.attr("class", "axis")
			.attr("transform", "translate(" + padding + ",0)")
			.call(yAxis);

        svg.append("g")
            .selectAll("dot")
            .data(dataset)
            .enter()
            .append("circle")
            .attr("cx", function(d) { return xScale(d.date) } )
            .attr("cy", function(d) { return yScale(d.quantity) } )
            .attr("r", 5)
            .attr("fill", "white")
            .attr("cursor", "pointer")
            .on("mouseover", function(event,d) {
                tooltip
                  .style("opacity", 1)
              })
            .on("mousemove", function(event,d) {
                tooltip
                .style("opacity", 1);
                tooltip
                .html("Exact value: " + d.quantity)
                .style("left", `${event.layerX}px`)
                .style("top", `${event.layerY-40}px`)
                })
            .on("mouseout", function(d) {
                d3.select(this)
                .style("opacity", 1)
                tooltip
                .style("opacity", 0);
            })
            
            svg.append("g")
            .selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .text(function(d){
                return (d.quantity/1000).toFixed(1)
            })
            .attr("x", function(d) {
                return xScale(d.date)-5
                })
            .attr("y", function(d) {
                return yScale(d.quantity)-10
                })
            .attr("font-family", "sans-serif")
            .attr("font-size", "12px")
            .attr("fill", "white")
            .attr("font-weight", "bold")

        },[])

    return (<><div className='transition-graph'  ref={svgRef}></div>
    <div className='transition-graph_test' ></div>
    </>)
}