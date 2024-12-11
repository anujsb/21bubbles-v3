'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Zap, Target, Users } from 'lucide-react'

const reasons = [
  {
    title: 'Fast Turnaround',
    description: 'Get your projects live within 7–15 days depending on the scope.',
    icon: Zap,
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden charges, clear deliverables.',
    icon: Target,
  },
  {
    title: 'Customer-Centric Approach',
    description: 'We prioritize your goals and provide end-to-end support.',
    icon: Users,
  },
]

export function WhyChooseUs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mt-24"
    >
      <h2 className="text-3xl font-bold text-center text-black mb-8">Why Choose 21Bubbles?</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
          >
            <Card className="bg-white/10 backdrop-blur-lg border-none text-black h-full">
              <CardHeader>
                <reason.icon className="h-8 w-8 text-blue-700 mb-2" />
                <CardTitle className="text-xl font-semibold">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{reason.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

