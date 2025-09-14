import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const api = {
  submitReport: async (formData) => {
    const res = await axios.post(`${API_BASE}/reports`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    return res.data.report;
  },

  getReports: async () => {
    const res = await axios.get(`${API_BASE}/reports`);
    return res.data.reports;
  },

  getHotspots: async () => {
    const res = await axios.get(`${API_BASE}/reports/hotspots`);
    return res.data.hotspots;
  },

  getSocial: async () => {
    const res = await axios.get(`${API_BASE}/social/scan`);
    return res.data.posts;
  }
};