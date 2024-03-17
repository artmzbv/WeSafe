import {React, useState, useRef, useEffect} from 'react';
import * as d3 from 'd3'
import "./Warehouse.css"
import map from '../../utils/europe.geojson'

export default function Warehouse() {
    const mapRef = useRef();
    const contRef = useRef();

        //UseEffect to control resize parameters for svg graphics
        const useResizeObserver = ref => {
            const [dimensions, setDimensions] = useState(null);
            useEffect(() => {
              const observeTarget = ref.current;
              const resizeObserver = new ResizeObserver(entries => {
                entries.forEach(entry => {
                  setDimensions(entry.contentRect);
                });
              });
              resizeObserver.observe(observeTarget);
              return () => {
                resizeObserver.unobserve(observeTarget);
              };
            }, [ref]);
            return dimensions;
          };
          const dimensions = useResizeObserver(contRef);
    
    useEffect(() =>{

    if (!dimensions) return;
    const width = dimensions.width
    const height = dimensions.height

    d3.select("svg").remove()
    // The svg
    const svg = d3.select(mapRef.current)
      .append("svg")
    //   .attr("width", width)
    //   .attr("height", height)
      .attr("viewBox", '0 0 ' + width + ' ' + height)
      // .classed("svg-content", true)
      .attr("preserveAspectRatio", 'xMinYMin meet')
    //   .call(d3.zoom().on("zoom", function (event) {
    //     svg.attr("transform", event.transform)
    //  }))
    
    // Map and projection
    const projection = d3.geoMercator()
        .center([4, 48])                // GPS of location to zoom on
        .scale(900)                       // This is like the zoom
        .translate([ width/2, height/2 ])
    
    // Create data for circles:
    const markers = [
      {long: -1.679400, lat: 48.114700, name: "Rennes, France"}, // corsica
      {long: -0.580816, lat: 44.836151, name: "Bordeaux, France"}, // nice
      {long: 2.349, lat: 48.864, name: "Paris, France"}, // Paris
      {long: 4.402771, lat: 51.260197, name: "Anvers, Belgique"}, // Lille
    ];
    
    // Load external data and boot
    d3.json(map).then( function(data){
    
        // Filter data
        // data.features = data.features.filter( d => d.properties.name=="France")
    
        // Draw the map
        svg.append("g")
            .selectAll("path")
            .data(data.features)
            .join("path")
              .attr("fill", "#b8b8b8")
              .attr("d", d3.geoPath()
                  .projection(projection)
              )
            .style("stroke", "black")
            .style("opacity", .3)
            // .style("background-color", "black")
    
        // create a tooltip
        const Tooltip = d3.select(mapRef.current)
          .append("div")
          .style("opacity", 0)
          .attr("class", "warehouse__tooltip")
          

        //   d3.select("tooltip__warehouse").remove()
    
        // Three function that change the tooltip when user hover / move / leave a cell
        const mouseover = function(event, d) {
          Tooltip.style("opacity", 1)
        }
        var mousemove = function(event, d) {
          Tooltip
            .html(d.name)
                // + "<br>" + "long: " + d.long + "<br>" + "lat: " + d.lat)
            .style("left", (event.layerX) + "px")
            .style("top", `${event.layerY+10}px`)
        }
        var mouseleave = function(event, d) {
          Tooltip.style("opacity", 0)
        }
    
        // Add circles:
        svg
          .selectAll("myCircles")
          .data(markers)
          .join("circle")
            .attr("cx", d => projection([d.long, d.lat])[0])
            .attr("cy", d => projection([d.long, d.lat])[1])
            .attr("r", 8)
            .attr("class", "circle")
            .style("fill", "#001F3D")
            .attr("stroke", "#001F3D")
            .attr("stroke-width", 3)
            .attr("stroke-opacity", .4)
            .attr("cursor", "pointer")
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave)
            .on("click", function(event, d){
                Tooltip
              .style("opacity", 1)
            })
    
        })  
    })
  return (
    <>
    <section className="warehouse">
    <h3 className='warehouse__title'>Nous vous proposons de garder un des nos produits dans nos entrepots</h3>
    <p className='warehouse__description'>Nos entrepôts n'ont pas toutes les mêmes caractéristiques. Seul l'entrepôt de Paris est pour l'instant en capacité de recevoir toutes les marchandises. Mais pour une diminution des coûts, vous pouvez opter pour un stockage dans plusieurs sites.
Nos conseillers sont à votre disposition pour vous expliquer les modalités de stockages et les coûts afférents.
    </p>
        {/* <div className="warehouse__photo"></div> */}
        <div className="warehouse__map-container" ref={contRef}>
        <div className="warehouse__map" ref={mapRef}></div>
        </div>
    </section>
    </>
)}