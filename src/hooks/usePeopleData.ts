import { useState, useEffect } from 'react';

interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

const usePeopleData = (searchQuery: string = '') => {
  const [data, setData] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (searchQuery === '') {
      setData([]);
      setLoading(false);
      setError(null);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://swapi.dev/api/people/?search=${searchQuery}&format=json`
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
  }, [searchQuery]);

  return { data, loading, error };
};

export default usePeopleData;
