import express from 'express';
import {
  insertCustomer,
  showAllCustomer,
  showSingleCustomer,
} from '../controllers/customerController.js';

const router = express.Router();

router.route('/insert').post(insertCustomer);

router.route('/showall').post(showAllCustomer);

router.route('/show').post(showSingleCustomer);

export default router;
