import { Router } from 'express';
const router = Router();

// Example: GET /api/users
router.get('/', (req, res) => {
  res.json({ message: 'Get all users (placeholder)' });
});

export default router;
