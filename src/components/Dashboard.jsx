import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ReportForm from './ReportForm';
import SidebarFilters from './SidebarFilters';
import HeatmapLayer from './HeatmapLayer';
import { api } from '../services/api';

export default function Dashboard() {
  const [reports, setReports] = useState([]);
  const [hotspots, setHotspots] = useState([]);
  const [social, setSocial] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const rep = await api.getReports();
      const hot = await api.getHotspots();
      const soc = await api.getSocial();
      setReports(rep);
      setHotspots(hot);
      setSocial(soc);
    };
    fetchData();
  }, []);

  const handleReportSubmitted = async () => {
    // Simulate form submission
    const formData = new FormData();
    formData.append('message', 'Test report from frontend!');
    formData.append('type', 'High Wave');
    formData.append('location', JSON.stringify([80.2707, 13.0827]));

    await api.submitReport(formData);
    window.location.reload(); // Simple refresh
  };

  return (
    // ... same as before, but now with real data
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Top Bar */}
      <div style={{ backgroundColor: '#005B96', color: 'white', padding: '1rem', textAlign: 'center', fontWeight: 'bold' }}>
        OCEANGUARDIAN — Listen to the Coast. Save Lives Faster.
      </div>

      {/* Main Content */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Left: Map */}
        <div style={{ flex: 3, position: 'relative' }}>
          <MapContainer center={[13.0827, 80.2707]} zoom={10} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {reports.map(r => (
              <Marker key={r._id} position={[r.location.coordinates[1], r.location.coordinates[0]]}>
                <Popup>{r.message}</Popup>
              </Marker>
            ))}
            {hotspots.length > 0 && (
              <HeatmapLayer
                points={hotspots.map(h => [h.lat, h.lng, h.weight])}
                radius={25}
                blur={15}
                maxZoom={12}
                gradient={{ 0.4: 'blue', 0.6: 'yellow', 0.8: 'orange', 1.0: 'red' }}
              />
            )}
          </MapContainer>
        </div>

        {/* Right: Sidebar */}
        <div style={{ flex: 1, backgroundColor: '#f5f5f5', padding: '1rem', overflowY: 'auto' }}>
          <SidebarFilters />
          <h3>📍 Recent Reports ({reports.length})</h3>
          {reports.slice(0, 3).map(r => (
            <div key={r._id} style={{ border: '1px solid #ddd', margin: '0.5rem 0', padding: '0.5rem', borderRadius: '4px' }}>
              <strong>{r.type}</strong>: {r.message}
            </div>
          ))}
          <h3>🐦 Social Feed ({social.length})</h3>
          {social.map(s => (
            <div key={s.text} style={{ border: '1px dashed #ccc', margin: '0.5rem 0', padding: '0.5rem', borderRadius: '4px' }}>
              <small>{s.user} • {s.time}</small><br />
              {s.text}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: Report Form */}
      <div style={{ padding: '1rem', backgroundColor: '#fff', borderTop: '1px solid #eee' }}>
        <ReportForm onReportSubmitted={handleReportSubmitted} />
      </div>
    </div>
  );
}