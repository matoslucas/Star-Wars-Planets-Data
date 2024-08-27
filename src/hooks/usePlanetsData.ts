import { useState, useEffect } from 'react';

interface Planet {
  name: string;
  climate: string;
  terrain: string;
  population: string;
  gravity: string;
  surface_water: string;
  residents: string[];
  films: string[];
}

const usePlanetsData = () => {
  const [data, setData] = useState<Planet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://swapi.dev/api/planets/?format=json'
        );
        const json = await response.json();
        setData(json.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default usePlanetsData;
