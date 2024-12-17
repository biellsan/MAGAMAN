import { useState, useCallback } from 'react';

export const useSearch = <T>(items: T[], searchKeys: (keyof T)[]) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = items.filter((item) =>
    searchKeys.some((key) =>
      String(item[key]).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  return {
    searchTerm,
    filteredItems,
    handleSearch,
  };
};