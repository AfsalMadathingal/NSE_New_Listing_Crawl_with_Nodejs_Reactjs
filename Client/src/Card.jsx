import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ symbol, issuePrice, change, perChange, totalQty }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="p-4 border rounded-md bg-white"
    >
      <div className="text-lg font-semibold">{symbol}</div>
      <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse mt-2"></div>
      LIVE
      <div className="flex justify-between mt-4">
        <div>
          <p className="text-gray-500">Issue Price</p>
          <motion.p
            key={issuePrice}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-2xl font-bold"
          >
            {Number(issuePrice) - Number(change)  || 'N/A'}
          </motion.p>
        </div>
        <div>
          <p className="text-gray-500">Estimated Listing </p>
          <motion.p
            key={issuePrice}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-2xl font-bold"
          >
            {issuePrice || 'N/A'}
          </motion.p>
        </div>
        <div>
          <p className="text-gray-500">Change</p>
          <motion.p
            key={change}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className={`text-2xl font-bold ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}
          >
            {typeof change === 'string' ? change : (typeof change === 'number' ? change : 0).toFixed(2)}
          </motion.p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <p className="text-gray-500">% Change</p>
          <motion.p
            key={perChange}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className={`text-xl font-bold ${perChange >= 0 ? 'text-green-500' : 'text-red-500'}`}
          >
            {typeof perChange === 'string' ? perChange : (typeof perChange === 'number' ? perChange : 0).toFixed(2)}%
          </motion.p>
        </div>
        <div>
          <p className="text-gray-500">Total Qty</p>
          <motion.p
            key={totalQty}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-xl font-bold"
          >
            {typeof totalQty === 'string' ? totalQty : (typeof totalQty === 'number' ? totalQty : 0).toLocaleString()}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
