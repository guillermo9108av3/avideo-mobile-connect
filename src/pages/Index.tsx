
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Home, Search, Download, User, Play } from "lucide-react";
import VideoGrid from "@/components/VideoGrid";
import SearchPage from "@/components/SearchPage";
import DownloadsPage from "@/components/DownloadsPage";
import ConfigPage from "@/components/ConfigPage";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [serverUrl, setServerUrl] = useState<string>('');
  const [isConfigured, setIsConfigured] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const { toast } = useToast();

  useEffect(() => {
    const savedUrl = localStorage.getItem('avideo_server_url');
    if (savedUrl) {
      setServerUrl(savedUrl);
      setIsConfigured(true);
    }
  }, []);

  const handleSaveConfig = (url: string) => {
    localStorage.setItem('avideo_server_url', url);
    setServerUrl(url);
    setIsConfigured(true);
    toast({
      title: "Configuración guardada",
      description: "URL del servidor AVideo configurada correctamente",
    });
  };

  if (!isConfigured) {
    return <ConfigPage onSave={handleSaveConfig} />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-red-500 p-2 rounded-lg">
              <Play className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">AVideo</h1>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-300 text-sm">Local</span>
            </div>
          </div>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setIsConfigured(false)}
            className="text-gray-300 hover:text-white"
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="pb-20">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsContent value="home" className="mt-0">
            <VideoGrid serverUrl={serverUrl} />
          </TabsContent>
          
          <TabsContent value="search" className="mt-0">
            <SearchPage serverUrl={serverUrl} />
          </TabsContent>
          
          <TabsContent value="downloads" className="mt-0">
            <DownloadsPage />
          </TabsContent>
          
          <TabsContent value="profile" className="mt-0">
            <div className="p-4">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Perfil de Usuario</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">Funcionalidad de perfil próximamente</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700">
        <TabsList className="w-full h-16 bg-transparent grid grid-cols-4">
          <TabsTrigger 
            value="home" 
            className="flex flex-col items-center space-y-1 data-[state=active]:bg-gray-700 data-[state=active]:text-red-500 text-gray-400"
          >
            <Home className="h-5 w-5" />
            <span className="text-xs">Inicio</span>
          </TabsTrigger>
          
          <TabsTrigger 
            value="search"
            className="flex flex-col items-center space-y-1 data-[state=active]:bg-gray-700 data-[state=active]:text-red-500 text-gray-400"
          >
            <Search className="h-5 w-5" />
            <span className="text-xs">Buscar</span>
          </TabsTrigger>
          
          <TabsTrigger 
            value="downloads"
            className="flex flex-col items-center space-y-1 data-[state=active]:bg-gray-700 data-[state=active]:text-red-500 text-gray-400"
          >
            <Download className="h-5 w-5" />
            <span className="text-xs">Descargas</span>
          </TabsTrigger>
          
          <TabsTrigger 
            value="profile"
            className="flex flex-col items-center space-y-1 data-[state=active]:bg-gray-700 data-[state=active]:text-red-500 text-gray-400"
          >
            <User className="h-5 w-5" />
            <span className="text-xs">Perfil</span>
          </TabsTrigger>
        </TabsList>
      </nav>
    </div>
  );
};

export default Index;
