
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

interface SearchPageProps {
  serverUrl: string;
}

const SearchPage = ({ serverUrl }: SearchPageProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setLoading(true);
    try {
      // Simulate API call to AVideo search endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      setResults([]);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
  };

  return (
    <div className="p-4">
      <div className="flex space-x-2 mb-6">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Buscar videos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 pr-10"
          />
          {query && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearSearch}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 text-gray-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
        <Button 
          onClick={handleSearch}
          disabled={!query.trim() || loading}
          className="bg-red-600 hover:bg-red-700"
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>

      {loading && (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
          <p className="text-gray-400 mt-4">Buscando...</p>
        </div>
      )}

      {!loading && results.length === 0 && query && (
        <div className="text-center py-12">
          <Search className="h-16 w-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-white text-lg font-semibold mb-2">Sin resultados</h3>
          <p className="text-gray-400">
            No se encontraron videos para "{query}"
          </p>
        </div>
      )}

      {!loading && results.length === 0 && !query && (
        <div className="text-center py-12">
          <Search className="h-16 w-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-white text-lg font-semibold mb-2">Buscar Videos</h3>
          <p className="text-gray-400">
            Introduce un término de búsqueda para encontrar videos
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
