'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const addOns = [
  { title: 'SEO Optimization', price: 5000, description: 'Per project' },
  // { title: 'Content Creation', price: 3000, description: 'Starting at' },
  { title: 'E-Commerce Integration', price: 10000, description: 'Per project' },
  { title: 'Maintenance and Support', price: 5000, description: 'Per revision' },
]

export function AddOnServices() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-24"
    >
      <h2 className="text-3xl font-bold text-center text-black mb-8">Add-On Services</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-center justify-center">
        {addOns.map((addon, index) => (
          <motion.div
            key={addon.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-none text-black ">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{addon.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">₹{addon.price.toLocaleString()}</p>
                <p className="text-sm text-gray-700">{addon.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

