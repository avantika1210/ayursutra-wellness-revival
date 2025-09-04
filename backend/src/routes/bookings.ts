import { Router } from 'express';
const router = Router();

// Example: GET /api/bookings
router.get('/', (req, res) => {
  res.json({ message: 'Get all bookings (placeholder)' });
});

export default router;
