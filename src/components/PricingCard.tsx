'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

interface PricingCardProps {
  title: string
  price: number
  features: string[]
}

export function PricingCard({ title, price, features }: PricingCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className="flex flex-col h-96 items-center justify-center">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="text-4xl font-bold text-center mb-6">
            ₹{price.toLocaleString()}
          </div>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Get Started</Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

