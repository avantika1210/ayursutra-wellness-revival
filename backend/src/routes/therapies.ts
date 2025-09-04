import { Router } from 'express';
const router = Router();

// Example: GET /api/therapies
router.get('/', (req, res) => {
  res.json({ message: 'Get all therapies (placeholder)' });
});

export default router;
