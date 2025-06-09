
import { Download, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const DownloadsPage = () => {
  return (
    <div className="p-4">
      <div className="text-center py-12">
        <div className="bg-gray-800 rounded-lg p-8 mx-auto max-w-sm">
          <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
            <Download className="h-8 w-8 text-gray-500" />
          </div>
          <h3 className="text-white text-lg font-semibold mb-2">No hay videos descargados</h3>
          <p className="text-gray-400 text-sm">
            Descarga videos para verlos sin conexión
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadsPage;
