'use client'

import { motion } from 'framer-motion'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

interface PricingToggleProps {
  showWebsitePlans: boolean
  setShowWebsitePlans: (show: boolean) => void
}

export function PricingToggle({ showWebsitePlans, setShowWebsitePlans }: PricingToggleProps) {
  return (
    <div className="flex items-center space-x-4">
      <Label htmlFor="pricing-toggle" className="text-lg font-medium">
        Website Development
      </Label>
      <Switch
        id="pricing-toggle"
        checked={!showWebsitePlans}
        onCheckedChange={() => setShowWebsitePlans(!showWebsitePlans)}
      />
      <Label htmlFor="pricing-toggle" className="text-lg font-medium">
        Software Development
      </Label>
      <motion.div
        className="absolute -z-10 rounded-full bg-primary/20"
        layoutId="pricing-background"
        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
        style={{
          width: '120px',
          height: '40px',
          left: showWebsitePlans ? '0%' : '50%',
          transform: 'translateX(-50%)',
        }}
      />
    </div>
  )
}

