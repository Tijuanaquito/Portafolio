import express from 'express';
import { pathToFileURL } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

router.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  // Integrate with email service (e.g., SendGrid, Nodemailer) here
  // For now, imply success
  console.log('Form received:', { name, email, message });
  res.status(200).json({ success: true, message: 'Message sent successfully' });
});

app.use('/api', router);

// Only listen if run directly (not when imported for Netlify Functions)
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

export default app;
