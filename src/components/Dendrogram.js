import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const Dendrogram = ({dendrogramme}) => {
  const ref = useRef();
  const containerRef = useRef();
  const [treeData, setTreeData] = useState(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: 700
        });
      }
    };

    setTreeData(dendrogramme);

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!treeData || dimensions.width === 0) return;

    // SVG occupe 95% de la largeur de la fenêtre
    const width = dimensions.width;
    const height = dimensions.height;
    const margin = { top: 50, right: 50, bottom: 100, left: 50 };
    
    // Dimensions internes (sans les marges)
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = (height - margin.top - margin.bottom) * 0.8;

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove(); // clear previous content
    
    // Mise à jour des dimensions du SVG
    svg
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");


    // Création du groupe principal avec les marges
    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const root = d3.hierarchy(treeData);
    // Orientation verticale : largeur pour l'axe horizontal, hauteur pour la profondeur
    const clusterLayout = d3.cluster().size([innerWidth, innerHeight]);
    clusterLayout(root);

    // Links - utilisation de linkVertical au lieu de linkHorizontal
    g.append("g")
      .selectAll("path")
      .data(root.links())
      .join("path")
      .attr("d", d3.linkVertical()
        .x(d => d.x)
        .y(d => d.y))
      .attr("fill", "none")
      .attr("stroke", "#555")
      .attr("stroke-width", 1.5);

    // Nodes - inversion des coordonnées x et y
    const node = g.append("g")
      .selectAll("g")
      .data(root.descendants())
      .join("g")
      .attr("transform", d => `translate(${d.x},${d.y})`);

    node.append("circle")
      .attr("r", 5)
      .attr("fill", d => d.children ? "#4a90e2" : "#7ed321")
      .attr("stroke", "#fff")
      .attr("stroke-width", 2);

    node.append("text")
      .attr("dy", d => d.children ? -10 : 15)
      .attr("x", 0)
      .style("text-anchor", "middle")
      .style("font-family", "Arial, sans-serif")
      //.style("font-size", "12px")
      .style("font-size", d => {
        const length = d.data.name.length;
        if (length > 50) return "8px";
        if (length > 30) return "10px";
        return "12px";
      })
      .style("fill", "#333")
      .text(d => d.data.name);

  }, [treeData, dimensions]);
  return (
    <div ref={containerRef} style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      backgroundColor: '#f8f9fa',
      padding: '20px'
    }}>
      <svg 
        ref={ref} 
        style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          backgroundColor: 'white',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          width: '100%',
          height: 'auto'
        }}
      />
    </div>

  );
};

export default Dendrogram;