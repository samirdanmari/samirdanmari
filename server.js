// # Create server.js for future backend API
cat > server.js << 'EOF'
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from Angular build
app.use(express.static(path.join(__dirname, 'dist')));

// CORS for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// API Routes (Ready for your backend)
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend API is ready!', timestamp: new Date().toISOString() });
});

// Placeholder API routes - add your routes here later
app.get('/api/*', (req, res) => {
  res.json({ 
    message: 'API endpoint reserved and ready for your backend implementation!',
    endpoint: req.path,
    method: req.method
  });
});

app.post('/api/*', (req, res) => {
  res.json({ 
    message: 'POST endpoint ready for your backend!',
    endpoint: req.path,
    body: req.body
  });
});

// Serve Angular app for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Frontend: Served from /dist');
  console.log('Backend API: Available at /api/*');
});
EOF