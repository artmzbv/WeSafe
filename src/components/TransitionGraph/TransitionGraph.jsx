import {React, useState, useRef, useEffect} from 'react';
import * as d3 from 'd3'
import './TransitionGraph.css'

const data = [
     {"date": "2022", "quantity": 25501.86},
    //  {"date": "2023", "quantity": 25501.86},
    //  {"date": "2024", "quantity": 25501.86},
    {"date": "2025", "quantity": 26754.9},
    {"date": "2030", "quantity": 30848.25},
    {"date": "2035", "quantity": 31538.56},
    {"date": "2040", "quantity": 33163.58},
    {"date": "2045", "quantity": 35788.9},
    {"date": "2050", "quantity": 36353.5},
]

const dat = [
   {"date": "2022", "copper": 25501.86, "nickel": 22933.685},
   {"date": "2025", "copper": 26754.9, "nickel": 23264.069},
   {"date": "2030", "copper": 30848.25, "nickel": 23901.33},
   {"date": "2035", "copper": 31538.56, "nickel": 24168.24},
   {"date": "2040", "copper": 33163.58, "nickel": 24761.43},
   {"date": "2045", "copper": 35788.9, "nickel": 24769.29},
   {"date": "2050", "copper": 36353.5, "nickel": 24848.96},
]
// https://d3-graph-gallery.com/graph/connectedscatter_multi.html


// console.log(dat.map(function (d){return ({value: d.copper})}))

var datt = [
    {
      "name":"copper",
      "values":[
        {"date": 2022,"Stated policies scenario":25501.86, "Announced pledges scenario":25501.86, "Net Zero Emissions by 2050 scenario":25501.86},
        {"date": 2025,"Stated policies scenario":26754.9, "Announced pledges scenario":27137.46, "Net Zero Emissions by 2050 scenario":27873.13},
        {"date": 2030,"Stated policies scenario":30848.25, "Announced pledges scenario":32069.7, "Net Zero Emissions by 2050 scenario":35612.6},
        {"date": 2035,"Stated policies scenario":31538.56, "Announced pledges scenario":34329.9, "Net Zero Emissions by 2050 scenario":38733.5},
        {"date": 2040,"Stated policies scenario":33163.58, "Announced pledges scenario":36872.3, "Net Zero Emissions by 2050 scenario":40896.1},
        {"date": 2045,"Stated policies scenario":35788.9, "Announced pledges scenario":39075.7, "Net Zero Emissions by 2050 scenario":40360.6},
        {"date": 2050,"Stated policies scenario":36353.5, "Announced pledges scenario":39740.2, "Net Zero Emissions by 2050 scenario":39733.4},
      ]
    },
    {
      "name": "nickel",
      "values": [
        {"date": 2022,"Stated policies scenario":2933.685, "Announced pledges scenario":2933.685, "Net Zero Emissions by 2050 scenario":2933.685},
        {"date": 2025,"Stated policies scenario":3264.069, "Announced pledges scenario":3422.35, "Net Zero Emissions by 2050 scenario":4033.91},
        {"date": 2030,"Stated policies scenario":3901.33, "Announced pledges scenario":4529.87, "Net Zero Emissions by 2050 scenario":5815.23},
        {"date": 2035,"Stated policies scenario":4168.24, "Announced pledges scenario":5451.33, "Net Zero Emissions by 2050 scenario":6658.47},
        {"date": 2040,"Stated policies scenario":4761.43, "Announced pledges scenario":6232.29, "Net Zero Emissions by 2050 scenario":6701.81},
        {"date": 2045,"Stated policies scenario":4769.29, "Announced pledges scenario":6172.88, "Net Zero Emissions by 2050 scenario":6354.18},
        {"date": 2050,"Stated policies scenario":4848.96, "Announced pledges scenario":6507.69, "Net Zero Emissions by 2050 scenario":6196.03},
      ]
    }
  ]

  var allGroup = ["Stated policies scenario", "Announced pledges scenario","Net Zero Emissions by 2050 scenario"]
  var myColor = d3.scaleOrdinal()
  .domain(allGroup)
  .range(["red", "white", "green"]);

export default function TransitionGraph() {
    const [option, setOption] = useState("1");
    const handleActiveOption = (e) => {
        setOption(e.target.id);
      }

    const svgRef = useRef();

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

        console.log(datt[0].values)
        console.log(dat)

        var dataReady = allGroup.map(function(grpName) { // .map allows to do something for each element of the list
            return {
              name: grpName,
              values: datt[option-1].values.map(function(d) {
                return {date: +d.date, quantity: +d[grpName]};
              })
            };
          })
          console.log(dataReady)

        //   datt.forEach(function (kv) {
        //     var labelName = kv.label;
        //     kv.values.forEach(function (d) {
        //       d.value = +d.value; 
        //       d.name = labelName;
        //     });
        //   });
        
        console.log(dataReady[0].values[1].date)
        console.log(typeof(dataReady[0].values[1].date))
        console.log(dataReady[0].values[1].quantity)
        console.log(typeof(dataReady[0].values[1].quantity))
        // https://stackoverflow.com/questions/44017721/d3-js-v4-9-get-the-calculated-width-of-selected-element
        // https://d3-graph-gallery.com/graph/custom_responsive.html
        const w = parseInt(d3.select('#transition-graph').style('width'), 10)
        const h = parseInt(d3.select('#transition-graph').style('height'), 10)
        const margin = 30;
        const padding = 50;
          
        const dataset = dataReady

        console.log(d3.max(dataset, function(d) { return d.values}))

        function scaleY () {
            if (option === "1"){
                return [20000, 45000]
            } else if (option === "2"){
                return  [0, 10000]
        }
        }
        console.log(scaleY())
        
        const xScale = d3.scaleLinear()
        .domain([
        // d3.min(dataset, function(d) { return d.values.date}),
        // d3.max(dataset, function(d) { return d.values.date})            
            2022, 2050])
        .range([padding, w-30]);

        const yScale = d3.scaleLinear()
        .domain(scaleY())
        .range([h-padding, h*0.25]);
        console.log( d3.max(dataset, function(d) { return d.quantity; }))
        //For converting Dates to strings
        var formatTime = d3.timeFormat("%Y");

        //Define axes
        const xAxis = d3.axisBottom()
                .scale(xScale)
                .ticks(5)
                // .tickFormat()
                // .tickFormat(formatTime)
                // .tickSize()
                // .tickValues(0)

        //Define Y axis
        const yAxis = d3.axisLeft()
                .scale(yScale)
                .ticks(4)
                .tickFormat(d3.format(".2s"));

        // console.log(d3.max(dataset, function(d) { return typeof(d.quantity); }))
        // console.log(d3.line().x(function(d) { return xScale(d.dataset); }))
        
        //Define line generator
        const line = d3.line()
        // .defined(function(d) { return d; })
        .x(function(d) { return xScale(+d.date); })
        .y(function(d) { return yScale(+d.quantity); });
        
        console.log(dataset[0])
        console.log(line(dataset[0].values))
        //Print data to console as table, for verification
        console.table(dataset, ["date", "quantity"]);
        
        const svg = d3.select(svgRef.current)
        .append("svg")
        .attr("width", w)
        .attr("height", h);
        
        console.log(line)
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

    const color =["red", "white", "green"]

    dataset.forEach(function(d,i) {
        svg
        .datum(dataset[i].values)
        .append("path")
        .attr("d", (d) => line(d))
        .attr("class", "line")
        .attr("d", line)
        .attr("stroke", color[i])
        
        svg.append("g")
        .selectAll("dot")
        .data(dataset[i].values)
        .enter()
        .append("circle")
        .attr("cx", function(d) { return xScale(d.date) } )
        .attr("cy", function(d) { return yScale(d.quantity) } )
        .attr("r", 5)
        .attr("fill", color[i])
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
            .data(dataset[i].values)
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
            .attr("font-family", "Montserrat")
            .attr("font-size", "12px")
            .attr("fill", "white")
            // .attr("font-weight", "bold")
        })
    
    // Add a legend (interactive)
    svg
      .selectAll("myLegend")
      .data(dataReady)
      .enter()
      .append('g')
      .append("text")
      .attr('x', function(d,i){ return 0.1*w })
      .attr('y',function(d,i){ return 0.2*h - i*20 })
      .text(function(d) { return d.name; })
      .style("fill", function(d){ return myColor(d.name) })
      .style("font-size", 12)
      .style("font-weight", "bold")
    //   .on("click", function(d){
    //   is the element currently visible ?
    //   currentOpacity = d3.selectAll("." + d.name).style("opacity")
    //   Change the opacity: from 0 to 1 or from 1 to 0
    //    d3.selectAll("." + d.name).transition().style("opacity", currentOpacity == 1 ? 0:1)
    //   })
    },[option])

    return (
    <section className='transition-graph'>
    <div className='transition-graph__title'> Projections de la demande mondiale pour métaux critiques</div>
    <div className='transition-graph__buttons'>
    <button id={"1"} className={`transition-graph__button ${option === "1" ? 'transition-graph__button_active' : 'transition-graph__button_inactive'}`} onClick={(e)=>{handleActiveOption(e)}}>Cuivre</button>
    <button id={"2"} className={`transition-graph__button ${option === "2" ? 'transition-graph__button_active' : 'transition-graph__button_inactive'}`} onClick={(e)=>{handleActiveOption(e)}}>Nickel</button>
    </div>
    <div id='transition-graph' className='transition-graph__graphics'  ref={svgRef}></div>
    </section>
    )
}