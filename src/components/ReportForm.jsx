import React, { useState } from 'react';
import { Button, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const ReportForm = ({ onReportSubmitted }) => {
  const [report, setReport] = useState({ message: '', type: '', image: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!navigator.onLine) {
      alert('Saved offline. Will sync when online.');
      localStorage.setItem('pendingReports', JSON.stringify([
        ...(JSON.parse(localStorage.getItem('pendingReports') || '[]')),
        { ...report, timestamp: Date.now() }
      ]));
      return;
    }

    // Simulate API call (will replace with real fetch later)
    alert('Report sent to server! (Simulated)');
    onReportSubmitted();

    setReport({ message: '', type: '', image: null });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <TextField
        label="What did you see?"
        value={report.message}
        onChange={(e) => setReport({...report, message: e.target.value})}
        variant="outlined"
        size="small"
        sx={{ flex: 2 }}
      />
      <FormControl size="small" sx={{ minWidth: 140 }}>
        <InputLabel>Hazard</InputLabel>
        <Select
          value={report.type}
          onChange={(e) => setReport({...report, type: e.target.value})}
        >
          <MenuItem value="High Wave">High Wave</MenuItem>
          <MenuItem value="Flood">Flood</MenuItem>
          <MenuItem value="Tsunami">Tsunami</MenuItem>
        </Select>
      </FormControl>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setReport({...report, image: e.target.files[0]})}
        style={{ padding: '0.5rem' }}
      />
      <Button type="submit" variant="contained" color="primary" size="small">
        Submit
      </Button>
    </form>
  );
};

export default ReportForm;