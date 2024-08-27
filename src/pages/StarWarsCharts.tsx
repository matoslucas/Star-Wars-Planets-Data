import React from 'react';
import usePlanetsData from '../hooks/usePlanetsData';
import BarChart from '../components/BarChart';

import Loader from '../components/Loader';

const StarWarsCharts: React.FC = () => {
  const { data, loading, error } = usePlanetsData();
  // return <Loader />;
  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  const populationData = data.map((planet) => ({
    name: planet.name,
    value: planet.population === 'unknown' ? 0 : +planet.population,
  }));

  const surfaceWaterData = data.map((planet) => ({
    name: planet.name,
    value: planet.surface_water === 'unknown' ? 0 : +planet.surface_water,
  }));

  const gravityData = data.map((planet) => ({
    name: planet.name,
    value:
      planet.gravity === 'unknown'
        ? 0
        : parseFloat(planet.gravity.split(' ')[0]),
  }));

  const filmsData = data.map((planet) => ({
    name: planet.name,
    value: planet.films.length,
  }));

  const residentsData = data.map((planet) => ({
    name: planet.name,
    value: planet.residents.length,
  }));

  return (
    <div className="flex flex-col justify-center p-20 bg-black">
      <h1 className="flex justify-center text-2xl font-bold mb-4 text-lg">
        Planets Charts
      </h1>

      <div className="flex justify-center mb-8">
        <BarChart data={populationData} title="Population" color="teal" />
      </div>
      <div className="flex justify-center mb-8">
        <BarChart
          data={surfaceWaterData}
          title="Surface Water"
          color="skyblue"
        />
      </div>
      <div className="flex justify-center mb-8">
        <BarChart data={gravityData} title="Gravity" color="orange" />
      </div>
      <div className="flex justify-center mb-8">
        <BarChart data={filmsData} title="Films" color="purple" />
      </div>
      <div className="flex justify-center mb-8">
        <BarChart data={residentsData} title="Residents" color="green" />
      </div>
    </div>
  );
};

export default StarWarsCharts;
