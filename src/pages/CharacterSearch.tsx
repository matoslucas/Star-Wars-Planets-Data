import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon
import usePeopleData from '../hooks/usePeopleData';
import Loader from '../components/Loader';

const PeopleComponent: React.FC = () => {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const { data, loading, error } = usePeopleData(query);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    setQuery(search);
  };

  //if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col justify-center p-20 bg-black text-white">
      <h1 className="flex justify-center text-2xl font-bold mb-4 text-lg">
        Character Search
      </h1>

      <div className="flex mb-4">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearchClick();
            }
          }}
          placeholder="Search for a character"
          className="p-2 border rounded text-black flex-grow"
        />
        <button
          onClick={handleSearchClick}
          className="ml-2 pl-5 pr-5 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <FaSearch />
        </button>
      </div>

      <ul>
        {data && data.length > 0 ? (
          data.map((person) => (
            <li key={person.name}>
              {person.name} - {person.gender} - {person.birth_year}
            </li>
          ))
        ) : loading ? (
          <Loader />
        ) : (
          'No Results'
        )}
      </ul>
    </div>
  );
};

export default PeopleComponent;
