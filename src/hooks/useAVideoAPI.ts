
import { useState, useCallback } from 'react';

interface APIResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const useAVideoAPI = (serverUrl: string) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const makeRequest = useCallback(async <T>(endpoint: string, options?: RequestInit): Promise<T | null> => {
    try {
      setLoading(true);
      setError(null);
      
      const url = `${serverUrl.replace(/\/$/, '')}/${endpoint}`;
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      console.error('AVideo API Error:', errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  }, [serverUrl]);

  const getVideos = useCallback(async (page = 1, limit = 20) => {
    return await makeRequest(`plugin/API/get.json.php?APIName=video&current=${page}&rowCount=${limit}`);
  }, [makeRequest]);

  const searchVideos = useCallback(async (query: string, page = 1, limit = 20) => {
    return await makeRequest(`plugin/API/get.json.php?APIName=video&searchPhrase=${encodeURIComponent(query)}&current=${page}&rowCount=${limit}`);
  }, [makeRequest]);

  const getVideoInfo = useCallback(async (videoId: string) => {
    return await makeRequest(`plugin/API/get.json.php?APIName=video&videos_id=${videoId}`);
  }, [makeRequest]);

  const login = useCallback(async (user: string, password: string) => {
    return await makeRequest('plugin/API/get.json.php?APIName=login', {
      method: 'POST',
      body: JSON.stringify({ user, password }),
    });
  }, [makeRequest]);

  return {
    loading,
    error,
    getVideos,
    searchVideos,
    getVideoInfo,
    login,
  };
};
