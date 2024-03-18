import {React, useState, useRef, useEffect} from 'react';
import * as d3 from 'd3'
import './TransitionGraph.css'


const data = [
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
    },
    {
      "name": "cobalt",
      "values": [
        {"date": 2022,"Stated policies scenario":171.1765, "Announced pledges scenario":171.1765, "Net Zero Emissions by 2050 scenario":171.1765},
        {"date": 2025,"Stated policies scenario":208.4872, "Announced pledges scenario":225.7845, "Net Zero Emissions by 2050 scenario":280.819},
        {"date": 2030,"Stated policies scenario":236.4245, "Announced pledges scenario":284.603, "Net Zero Emissions by 2050 scenario":368.361},
        {"date": 2035,"Stated policies scenario":256.8699, "Announced pledges scenario":347.717, "Net Zero Emissions by 2050 scenario":427.807},
        {"date": 2040,"Stated policies scenario":300.073, "Announced pledges scenario":416.562, "Net Zero Emissions by 2050 scenario":454.523},
        {"date": 2045,"Stated policies scenario":342.27, "Announced pledges scenario":474.829, "Net Zero Emissions by 2050 scenario":498.248},
        {"date": 2050,"Stated policies scenario":367.648, "Announced pledges scenario":524.779, "Net Zero Emissions by 2050 scenario":519.666},
      ]
    },
  ]

  const methodology = [
      {"name": "Le scénario Net Zéro Émission",
        "text": `Le scénario Net Zéro Émission d’ici 2050 (scénario NZE) est un scénario normatif qui montre la voie à suivre pour le secteur énergétique mondial pour atteindre zéro émission nette de CO2 d’ici 2050, les économies avancées atteignant zéro émission nette avant les autres.
\nCe scénario répond également aux principaux objectifs de développement durable (ODD) liés à l’énergie, en particulier l’accès universel à l’énergie d’ici 2030 et des améliorations majeures de la qualité de l’air.
\nCela est cohérent avec la limitation de l’augmentation de la température mondiale à 1,5 °C (avec une probabilité d’au moins 50 %), conformément aux réductions d’émissions évaluées dans le sixième rapport d’évaluation du Groupe d’experts intergouvernemental sur l’évolution du climat (GIEC).`
      },
      {"name": "Announced pledges scenario",
      "text": `Le scénario des engagements annoncés (APS), introduit en 2021, illustre dans quelle mesure les ambitions et les objectifs annoncés peuvent générer les réductions d'émissions nécessaires pour atteindre zéro émission nette d'ici 2050. Il comprend toutes les annonces nationales majeures récentes à fin août 2023. 
\nÀ la fois, les objectifs pour 2030 et les engagements à plus long terme de zéro émission nette ou de neutralité carbone, que ces annonces aient été ancrées dans la législation ou dans des contributions déterminées au niveau national mises à jour. Dans l'APS, les pays mettent en œuvre leurs objectifs nationaux dans leur intégralité et dans les délais. Les perspectives des exportateurs de combustibles fossiles et de combustibles à faibles émissions, comme l'hydrogène, sont déterminées par ce que la mise en œuvre complète de tous les objectifs signifie pour la demande mondiale. 
\nL’APS suppose également que tous les objectifs au niveau national en matière d'accès à l'électricité et de transformation propre sont réalisés à temps et dans leur intégralité.`
      },
      {"name": "Stated policies scenario",
        "text": `Le scénario de politiques déclarées (STEPS) est conçu pour donner une idée de la direction dominante de la progression du système énergétique, sur la base d'un examen détaillé du paysage politique actuel.
\nL’AIE fournit une évaluation plus granulaire, secteur par secteur, des politiques qui ont été mises en place pour atteindre les buts déclarés et d'autres objectifs liés à l'énergie, en tenant compte non seulement des politiques et mesures existantes, mais également de celles en cours d'élaboration.
\nLe STEPS fournit une référence plus conservatrice pour l'avenir que le scénario des engagements annoncés (APS), en ne prenant pas pour acquis que les gouvernements atteindront tous les objectifs annoncés. À l’instar de l’APS, il n’est pas conçu pour atteindre un résultat particulier.`
      },
  ]

  

  // console.log(methodology[0].text)


  var allGroup = ["Stated policies scenario", "Announced pledges scenario","Net Zero Emissions by 2050 scenario"]
  var myColor = d3.scaleOrdinal()
  .domain(allGroup)
  .range(["#AB3131", "white", "#799163"]);

  

export default function TransitionGraph() {
    const contRef = useRef();
    const [option, setOption] = useState("1");
    const [info, setInfo] = useState(null)
    

  // const handlePosition = (e) => {
  //   if(e) {
  //       return {id: e.target.id, x: e.pageX, y: e.pageY}
  //     }
  //   }

  // const tooltip = (e) =>{
  //    if (info===null){
  //       return null
  //   }else{
  //       return(
  //   <div className='transition-graph__legends-tooltip' style={{top:e.pageY, right:e.pageX}}>
  //       {methodology[info].text}
  //   </div>
  //    )
  //   }
  // }

  // console.log(tooltip(0))
    
  const handleActiveOption = (e) => {
        setOption(e.target.id);
    }

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

    const svgRef = useRef();

    useEffect(() =>{
        d3.select("svg").remove()
        d3.select("svg").remove()
        d3.select("svg").remove()

        // console.log(dimensions)
        if (!dimensions) return;

        var rowConverter = function(d) {
            return {
                date: new Date(+d.date, +0), //Make a new Date object for each year + month
                quantity: parseFloat(d.quantity)  //Convert from string to float
            };
        }

        var dataReady = allGroup.map(function(grpName) { // .map allows to do something for each element of the list
            return {
              name: grpName,
              values: data[option-1].values.map(function(d) {
                return {date: +d.date, quantity: +d[grpName]/1000};
              })
            };
          })

        // console.log(dataReady)
        // console.log(dataReady[0].values[1].date)

        // https://stackoverflow.com/questions/44017721/d3-js-v4-9-get-the-calculated-width-of-selected-element
        // https://d3-graph-gallery.com/graph/custom_responsive.html
        //https://www.youtube.com/watch?v=a4rstx9Pz2o&list=PLDZ4p-ENjbiPo4WH7KdHjh_EMI7Ic8b2B&index=8
        const w = dimensions.width
        const h = dimensions.height
        // console.log(h)
        // console.log(window.innerHeight)
        // console.log(window.onresize =()=>{console.log(parseInt(d3.select('#transition-graph').style('height')))}) 
        const padding = parseInt(d3.select('#transition-graph').style('font-size'), 10)
        //h/9-15
          
        const dataset = dataReady

        // console.log(d3.max(dataset, function(d) { return d.values}))

        function scaleY () {
            if (option === "1"){
                return [20, 45]
            } else if (option === "2"){
                return  [0, 8]
            } else if (option === "3"){
              return  [0, 0.5]
            }
        }

        
        
        const xScale = d3.scaleLinear()
        .domain([
        // d3.min(dataset, function(d) { return d.values.date}),
        // d3.max(dataset, function(d) { return d.values.date})            
            2022, 2050])
        .range([padding, w-30]);

        const yScale = d3.scaleLinear()
        .domain(scaleY())
        .range([h-padding, h*0.1])
        

        //Define axes
        const xAxis = d3.axisBottom()
                .scale(xScale)
                .ticks(5)
                // .tickFormat()
                .tickFormat(d => d.toFixed(0))
                // .tickSize()
                // .tickValues(0)

        //Define Y axis
        const yAxis = d3.axisLeft()
                .scale(yScale)
                .ticks(0)
        // console.log(d3.max(dataset, function(d) { return typeof(d.quantity); }))
        // console.log(d3.line().x(function(d) { return xScale(d.dataset); }))
        
        //Define line generator
        const line = d3.line()
        // .defined(function(d) { return d; })
        .x(function(d) { return xScale(+d.date); })
        .y(function(d) { return yScale(+d.quantity); });
        
        // console.log(dataset[0])
        // console.log(line(dataset[0].values))
        // //Print data to console as table, for verification
        // console.table(dataset, ["date", "quantity"]);
        // console.log(h)
        // console.log(w)
        
        const svg = d3.select(svgRef.current)
        .append("svg")
        // .attr("width", w)
        // .attr("height", h)
        .attr("viewBox", '0 0 ' + w + ' ' + h)
        // .classed("svg-content", true)
        // .attr("preserveAspectRatio", 'xMinYMin meet')
        .attr("preserveAspectRatio", 'none')

        const tooltip = d3.select(svgRef.current)
        .append("div")
        .style("position", "absolute")
        .style("opacity", 0)
        .attr("class", "transition-graph__tooltip")

    //Create axes
    svg.append("g")
        .attr("class", "transition-graph__axis")
        .attr("transform", "translate(0," + (h - padding) + ")")
        .call(xAxis)

    svg.append("g")
        .attr("class", "transition-graph__axis")
        .attr("transform", "translate(" + padding + ",0)")
        .call(yAxis)

    var yAxisGrid = yAxis
        .tickSize(-w+padding+h*0.085, 0)
        .ticks(5)
        .tickPadding(10)
        // .tickFormat(d => d.toFixed(0))
        .tickFormat(d => option ==="3" ? d.toFixed(1) :  d.toFixed(0))
        // .tickFormat("")
        // .orient()

    svg.append("g")
        .classed('transition-graph__grid', true)
        .attr("transform", "translate(" + padding + ",0)")
        .call(yAxisGrid)
        .style("stroke-dasharray", ("3, 3"))
        .call(g => g.select(".domain").remove())
        .filter(function (d, i) { return i === 1;}).remove()

    // console.log(dataset[0].values[0].quantity)

    const color =["yellow", "white", "#5ae316"]

    dataset.forEach(function(d,i) {
        svg
        .datum(dataset[i].values)
        .append("path")
        .attr("d", (d) => line(d))
        .attr("class", "transition-graph__line")
        .attr("d", line)
        .attr("stroke", color[i])
        

        const tooltipPosition = (event) => {
            const tooltipWidth = parseInt(getComputedStyle(document.querySelector('.transition-graph__tooltip')).width.replace("px", ""))
            // console.log(tooltipWidth)
            // console.log(event.layerX)
            // console.log(window.screen.width-event.layerX)
            if (window.screen.width-event.layerX > tooltipWidth + w/10) {
            return (event.layerX) + "px"}
            else {
            return (event.layerX-tooltipWidth) + "px"
            }
          }

        svg.append("g")
        .selectAll("dot")
        .data(dataset[i].values)
        .enter()
        .append("circle")
        .attr("cx", function(d) { return xScale(d.date) } )
        .attr("cy", function(d) { return yScale(d.quantity) } )
        .attr("r", 5)
        .attr("fill",  color[i])
        .attr("fill-opacity", 1)  
        .attr("cursor", "pointer")
        .style("stroke", color[i])  
        .style("stroke-opacity", 0.4)  
        .style("stroke-width", 7)
        .on("click", function(event, d){
          tooltip
            .style("opacity", 1)
          })
        .on("mouseover", function(event,d) {
            tooltip
            .style("opacity", 1);
            })
        .on("mousemove", function(event,d) {
            tooltip
            .style("opacity", 1);
            tooltip
            .html(d.quantity.toFixed(1) +" M t<br> +" + ((d.quantity/dataset[i].values[0].quantity-1)*100).toFixed(0) + "% p/r à 2022" )
            .style("left", tooltipPosition(event))
            .style("top", `${event.layerY+10}px`)
            })
        .on("mouseleave", function(d) {
            tooltip
            .transition()
            .duration(200)
            .style("opacity", 0)
            })

        // svg.append("g")
        //    .selectAll("text")
        //     .data(dataset[i].values)
        //     .enter()
        //     .append("text")
        //     .text(function(d){
        //         return (d.quantity).toFixed(1)
        //     })
        //     .attr("x", function(d) {
        //         return xScale(d.date)-5
        //         })
        //     .attr("y", function(d) {
        //         return yScale(d.quantity)-10
        //         })
        //     .attr("font-family", "Montserrat")
        //     .attr("font-size", "12px")
        //     .attr("fill", "white")
        //     // .attr("font-weight", "bold")
        })
        
        // Add a legend (interactive)
        // svg
        //   .selectAll("myLegend")
        //   .data(dataReady)
        //   .enter()
        //   .append('g')
        //   .append("text")
        //   .attr('x', function(d,i){ return 0.1*w })
        //   .attr('y',function(d,i){ return 0.2*h - i*20 })
        //   .text(function(d) { return d.name; })
        //   .style("fill", function(d){ return myColor(d.name) })
        //   .style("font-size", 14)
        //   .style("font-weight", "bold")
        //   .on("click", function(d){
        //   is the element currently visible ?
        //   currentOpacity = d3.selectAll("." + d.name).style("opacity")
        //   Change the opacity: from 0 to 1 or from 1 to 0
        //   d3.selectAll("." + d.name).transition().style("opacity", currentOpacity == 1 ? 0:1)
        //  })
        // console.log(tooltip(1))
    },[option, dimensions])
    // console.log(info)
    // console.log(methodology[0].text)

    return (
    <section className='transition-graph'>
    <div className='transition-graph__title'> {'Projections de la demande mondiale\n(Millions de tonnes)'}</div>
    <div className='transition-graph__buttons'>
    <button id={"1"} className={`transition-graph__button ${option === "1" ? 'transition-graph__button_active' : 'transition-graph__button_inactive'}`} onClick={(e)=>{handleActiveOption(e)}}>Cuivre</button>
    <button id={"2"} className={`transition-graph__button ${option === "2" ? 'transition-graph__button_active' : 'transition-graph__button_inactive'}`} onClick={(e)=>{handleActiveOption(e)}}>Nickel</button>
    <button id={"3"} className={`transition-graph__button ${option === "3" ? 'transition-graph__button_active' : 'transition-graph__button_inactive'}`} onClick={(e)=>{handleActiveOption(e)}}>Cobalt</button>
    </div>
    <ul className='transition-graph__legends'>
        <li className='transition-graph__legend transition-graph__legend_n0'>{'Scénario Net Zéro Émission   '} 
        <button id={"0"} className='transition-graph__legend-button transition-graph__legend-button_n0' onMouseOver={(e)=>setInfo(e.target.id)} onMouseLeave={()=>setInfo(null)}>
        {'i'}
          </button>
          </li>
        <li className='transition-graph__legend transition-graph__legend_ans'>{'Scénario des engagements annoncés   '}
        <button  id={"1"} className='transition-graph__legend-button transition-graph__legend-button_ans' onMouseOver={(e)=>setInfo(e.target.id)} onMouseLeave={()=>setInfo(null)}>
          {'i'}
        </button>
        </li>
        <li className='transition-graph__legend transition-graph__legend_spc'>{'Scénario de politiques déclarées   '}
        <button id={"2"} className='transition-graph__legend-button transition-graph__legend-button_spc' onMouseOver={(e)=>setInfo(e.target.id)} onMouseLeave={()=>setInfo(null)}>
        {'i'}
          </button>
        </li>
    </ul>
    { info !==null ? (
    <div className='transition-graph__background'>
    <div className='transition-graph__legends-tooltip'>
            <h1 className={`${info === "0" ? 'transition-graph__legend_n0': info === "1" ? 'transition-graph__legend_ans' : 'transition-graph__legend_spc'} transition-graph__legends-title`}>{methodology[info].name}</h1>
            <p className='transition-graph__legends-paragraph'>{methodology[info].text}</p>
    </div>
    </div>) : null}
    <div id='transition-graph' className='transition-graph__graphics' ref={contRef}>
    <div className='transition-graph__graphics_inside' ref={svgRef}></div>
    </div>
    <div className='transition-graph__source'>Source: Agence internationale de l'énergie</div>
    </section>
    )
}