
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Clock, Calendar } from "lucide-react";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: number;
  created: string;
  channel: string;
}

interface VideoGridProps {
  serverUrl: string;
}

const VideoGrid = ({ serverUrl }: VideoGridProps) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadVideos();
  }, [serverUrl]);

  const loadVideos = async () => {
    try {
      setLoading(true);
      // Simulate API call to AVideo server
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data similar to the AVideo interface
      const mockVideos: Video[] = [
        {
          id: '1',
          title: 'TechChannel',
          description: 'Tutorial de desarrollo móvil',
          thumbnail: '/lovable-uploads/0ed8194d-740e-455f-83b7-e3ad6d998b45.png',
          duration: '9:56',
          views: 0,
          created: 'hace 1 día',
          channel: 'TechChannel'
        },
        // Add more mock videos as needed
      ];
      
      setVideos(mockVideos);
    } catch (error) {
      console.error('Error loading videos:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="p-4 space-y-4">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="bg-gray-800 border-gray-700 animate-pulse">
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-700 rounded-t-lg"></div>
              <div className="p-4 space-y-2">
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                <div className="h-3 bg-gray-700 rounded w-1/2"></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="p-4">
      {videos.length === 0 ? (
        <div className="text-center py-12">
          <div className="bg-gray-800 rounded-lg p-8 mx-auto max-w-sm">
            <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Eye className="h-8 w-8 text-gray-500" />
            </div>
            <h3 className="text-white text-lg font-semibold mb-2">No hay videos disponibles</h3>
            <p className="text-gray-400 text-sm">
              Conecta con tu servidor AVideo para ver el contenido
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {videos.map((video) => (
            <Card key={video.id} className="bg-gray-800 border-gray-700 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full aspect-video object-cover"
                  />
                  <Badge className="absolute bottom-2 right-2 bg-black/80 text-white">
                    {video.duration}
                  </Badge>
                </div>
                
                <div className="p-4">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {video.title}
                  </h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{video.created}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoGrid;
