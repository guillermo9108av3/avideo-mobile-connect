
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Wifi } from "lucide-react";

interface ConfigPageProps {
  onSave: (url: string) => void;
}

const ConfigPage = ({ onSave }: ConfigPageProps) => {
  const [url, setUrl] = useState('http://192.168.43.100/AVideo-master/');
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    if (!url.trim()) return;
    
    setIsConnecting(true);
    
    // Simulate connection check
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      onSave(url.trim());
    } catch (error) {
      console.error('Error connecting to server:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-gray-800 border-gray-700">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-red-500 p-4 rounded-full">
              <Play className="h-8 w-8 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl text-white">AVideo Mobile</CardTitle>
          <p className="text-gray-400">Configura tu servidor AVideo</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="server-url" className="text-gray-300">
              URL del Servidor
            </Label>
            <Input
              id="server-url"
              type="url"
              placeholder="http://192.168.43.100/AVideo-master/"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
            />
            <p className="text-sm text-gray-500">
              Introduce la URL completa de tu instalación de AVideo
            </p>
          </div>
          
          <Button 
            onClick={handleConnect}
            disabled={!url.trim() || isConnecting}
            className="w-full bg-red-600 hover:bg-red-700"
          >
            {isConnecting ? (
              <div className="flex items-center space-x-2">
                <Wifi className="h-4 w-4 animate-pulse" />
                <span>Conectando...</span>
              </div>
            ) : (
              'Conectar al Servidor'
            )}
          </Button>
          
          <div className="text-center">
            <p className="text-xs text-gray-500">
              Esta configuración se guardará localmente en tu dispositivo
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConfigPage;
