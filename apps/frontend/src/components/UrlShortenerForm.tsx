import { useState } from 'react';

interface ApiResponse {
  shortUrl: string;
}

export default function UrlShortenerForm() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleShorten = async () => {
    // Reset only error state, keep showResult to avoid animation flicker
    setError('');

    if (!longUrl.trim()) {
      setError('Por favor, introduce una URL válida.');
      return;
    }

    // Basic URL validation
    try {
      new URL(longUrl);
    } catch (e) {
      setError('La URL introducida no es válida. Asegúrate de incluir el "http://" o "https://".');
      return;
    }

    setIsLoading(true);

    try {
      console.log('Enviando URL:', longUrl);

      const response = await fetch('http://localhost:3001/api/v1/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ originalUrl: longUrl }),
      });

      console.log('Respuesta:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error del servidor:', errorText);
        throw new Error('Error al acortar la URL');
      }

      const data: ApiResponse = await response.json();
      setShortUrl(data.shortUrl);
      setShowResult(true);

    } catch (error) {
      console.error('Error en la llamada:', error);
      setError('Error al conectar con el servidor. Inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      // Fallback for browsers that don't support navigator.clipboard
      const tempInput = document.createElement('input');
      tempInput.value = shortUrl;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleShorten();
    }
  };

  return (
    <>
      {/* Input Section */}
      <div className="flex flex-col md:flex-row gap-4 mt-8 w-full">
        <input
          type="url"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          onKeyPress={handleKeyPress}
          className="url-input"
          placeholder="pega una url larga aquí..."
          required
        />
        <button
          onClick={handleShorten}
          disabled={isLoading}
          className={`shorten-btn ${isLoading ? 'loading-state' : ''}`}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-5 w-5 mr-2 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Acortando...
            </>
          ) : (
            'acortar'
          )}
        </button>
      </div>

      {/* Result Section - Bottom Sheet */}
      {showResult && (
        <div 
          className="fixed bottom-0 left-0 right-0 transform translate-y-0 opacity-100
                     transition-all duration-300 ease-out
                     bg-white shadow-xl rounded-t-2xl p-6"
        >
          <div className="shortened-url-container flex items-center justify-between">
            <span className="shortened-url font-semibold text-blue-600">{shortUrl}</span>
            <button 
              onClick={handleCopy}
              className="copy-btn bg-blue-500 text-white px-3 py-1 rounded-lg"
            >
              {copySuccess ? '¡Copiado!' : 'copiar'}
            </button>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <p className="text-red-500 mt-4 fade-in">{error}</p>
      )}
    </>
  );
}
