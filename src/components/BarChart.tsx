import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { select } from 'd3-selection';

interface BarChartProps {
  data: { name: string; value: number }[];
  title: string;
  color: string;
}

const BarChart: React.FC<BarChartProps> = ({ data, title, color }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!data.length) return;

    // Ensure all data values are numbers and log them
    const sanitizedData = data.map((d) => ({
      name: d.name,
      value:
        isNaN(d.value) || d.value === null || d.value === undefined
          ? 0
          : d.value,
    }));
    console.log('Sanitized Data:', sanitizedData);

    const svg = select(svgRef.current);
    const width = 550;
    const height = 350;
    const margin = { top: 10, right: 30, bottom: 30, left: 90 };

    svg.selectAll('*').remove(); // Clear existing content

    const x = d3
      .scaleBand()
      .domain(sanitizedData.map((d) => d.name))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(sanitizedData, (d) => d.value) as number])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const xAxis = (g: any) =>
      g
        .attr('transform', `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));

    const yAxis = (g: any) =>
      g.attr('transform', `translate(${margin.left},0)`).call(d3.axisLeft(y));

    svg.append('g').call(xAxis);
    svg.append('g').call(yAxis);

    // Create a custom popover element
    const popover = select('body')
      .append('div')
      .attr(
        'class',
        'custom-popover bg-gray-800 text-white p-2 rounded-lg shadow-lg opacity-0 pointer-events-none transition-opacity duration-200 absolute'
      )
      .style('pointer-events', 'none')
      .style('position', 'absolute')
      .style('opacity', 0)
      .style('z-index', 10);

    svg
      .append('g')
      .attr('fill', color)
      .selectAll('rect')
      .data(sanitizedData)
      .join('rect')
      .attr('x', (d) => x(d.name) as number)
      .attr('y', (d) => y(d.value))
      .attr('height', (d) => {
        const heightValue = y(0) - y(d.value);
        console.log(`Height for ${d.name}:`, heightValue);
        return heightValue;
      })
      .attr('width', x.bandwidth())
      .on('mouseover', (event, d) => {
        popover
          .html(`<strong>${d.name}</strong><br/>Value: ${d.value}`)
          .style('left', `${event.pageX + 5}px`)
          .style('top', `${event.pageY - 28}px`)
          .style('opacity', 1)
          .style('pointer-events', 'auto');
      })
      .on('mousemove', (event) => {
        popover
          .style('left', `${event.pageX + 5}px`)
          .style('top', `${event.pageY - 28}px`);
      })
      .on('mouseout', () => {
        popover.style('opacity', 0).style('pointer-events', 'none');
      });
  }, [data]);

  return (
    <div className="p-20 flex flex-col justify-center p-2 max-w-3xl">
      <h3 className="flex justify-end p-2"> {title}</h3>
      <svg
        ref={svgRef}
        width="550"
        height="420"
        className="bg-gray-800 rounded-lg p-4"
      />
    </div>
  );
};

export default BarChart;
