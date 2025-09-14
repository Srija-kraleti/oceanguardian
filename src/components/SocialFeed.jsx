import React from 'react';

const SocialFeed = ({ posts }) => {
  return (
    <div style={{ maxHeight: '200px', overflowY: 'auto', border: '1px dashed #ccc', padding: '0.5rem', borderRadius: '4px', marginTop: '1rem' }}>
      <h5>🐦 Social Media Feeds</h5>
      {posts.map((p, i) => (
        <div key={i} style={{ fontSize: '0.8rem', marginBottom: '0.3rem' }}>
          <strong>{p.user}</strong>: {p.text}
          <br /><small>{p.time}</small>
        </div>
      ))}
    </div>
  );
};

export default SocialFeed;