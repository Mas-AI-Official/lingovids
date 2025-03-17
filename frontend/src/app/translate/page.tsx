'use client';
import { useState } from 'react';
import axios from 'axios';

export default function Translate() {
  const [videoUrl, setVideoUrl] = useState('');
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/api/videos/translate', {
        videoUrl,
        language,
      });
      alert('Translation started: ' + response.data.message);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert('Error: ' + (error.response?.data?.error || error.message));
      } else {
        alert('Error: ' + error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='min-h-screen p-10 bg-gray-100'>
      <h1 className='text-4xl font-bold text-center mb-8'>Translate Video</h1>
      <form onSubmit={handleSubmit} className='max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6'>
        <div>
          <label className='block text-gray-700 mb-2'>Video URL</label>
          <input
            type='text'
            placeholder='Enter video URL (YouTube, Vimeo, TikTok)'
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className='w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>
        <div>
          <label className='block text-gray-700 mb-2'>Target Language</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className='w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            <option value='en'>English</option>
            <option value='es'>Spanish</option>
            <option value='fr'>French</option>
          </select>
        </div>
        <button type='submit' disabled={loading} className='w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition'>
          {loading ? 'Processing...' : 'Start Translation'}
        </button>
      </form>
    </main>
  );
}
