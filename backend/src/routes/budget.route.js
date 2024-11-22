import express from 'express';
import { createBudget } from '../middlewares/budget.middleware';
const router = express.router();

router.post('/createBugder',createBudget)