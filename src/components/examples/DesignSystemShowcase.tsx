/**
 * CHIDI Design System Showcase
 * Examples of using the design system tokens and components
 */

import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Container } from "../ui/container";
import { Stack } from "../ui/stack";
import { motion } from "motion/react";
import { fadeInUp, softSpring } from "@/design-system/motion/transitions";

export function DesignSystemShowcase() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-app)] py-[var(--space-2xl)]">
      <Container maxWidth="lg">
        <Stack gap="2xl">
          {/* Typography Section */}
          <motion.section
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={softSpring}
          >
            <h1 className="text-display mb-[var(--space-md)]">CHIDI Design System</h1>
            <p className="text-body text-[var(--color-text-secondary)]">
              A comprehensive design token system and component library
            </p>
          </motion.section>

          {/* Colors Section */}
          <Card padding="lg">
            <CardHeader>
              <CardTitle>Color Palette</CardTitle>
              <CardDescription>Consistent colors using CSS custom properties</CardDescription>
            </CardHeader>
            <CardContent>
              <Stack gap="md">
                <Stack direction="row" gap="md">
                  <div className="flex-1">
                    <div className="h-[80px] bg-[var(--color-bg-app)] rounded-[var(--radius-lg)] mb-[var(--space-2)]" />
                    <p className="text-caption">Background App</p>
                  </div>
                  <div className="flex-1">
                    <div className="h-[80px] bg-[var(--color-bg-surface)] rounded-[var(--radius-lg)] mb-[var(--space-2)]" />
                    <p className="text-caption">Surface</p>
                  </div>
                  <div className="flex-1">
                    <div className="h-[80px] bg-[var(--color-accent-primary)] rounded-[var(--radius-lg)] mb-[var(--space-2)]" />
                    <p className="text-caption">Primary</p>
                  </div>
                  <div className="flex-1">
                    <div className="h-[80px] bg-[var(--color-accent-secondary)] rounded-[var(--radius-lg)] mb-[var(--space-2)]" />
                    <p className="text-caption">Secondary</p>
                  </div>
                </Stack>
              </Stack>
            </CardContent>
          </Card>

          {/* Typography Section */}
          <Card padding="lg">
            <CardHeader>
              <CardTitle>Typography Scale</CardTitle>
              <CardDescription>Semantic typography classes</CardDescription>
            </CardHeader>
            <CardContent>
              <Stack gap="lg">
                <div>
                  <h1 className="text-display">Display Text</h1>
                  <code className="text-caption text-[var(--color-text-secondary)]">.text-display</code>
                </div>
                <div>
                  <h1 className="text-heading-1">Heading 1</h1>
                  <code className="text-caption text-[var(--color-text-secondary)]">.text-heading-1</code>
                </div>
                <div>
                  <h2 className="text-heading-2">Heading 2</h2>
                  <code className="text-caption text-[var(--color-text-secondary)]">.text-heading-2</code>
                </div>
                <div>
                  <h3 className="text-heading-3">Heading 3</h3>
                  <code className="text-caption text-[var(--color-text-secondary)]">.text-heading-3</code>
                </div>
                <div>
                  <p className="text-body">Body text with optimal line height for readability. This is the primary text style for content.</p>
                  <code className="text-caption text-[var(--color-text-secondary)]">.text-body</code>
                </div>
                <div>
                  <p className="text-caption">Caption text for metadata and secondary information</p>
                  <code className="text-caption text-[var(--color-text-secondary)]">.text-caption</code>
                </div>
              </Stack>
            </CardContent>
          </Card>

          {/* Buttons Section */}
          <Card padding="lg">
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>All button styles with motion feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <Stack gap="md">
                <Stack direction="row" gap="md">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                </Stack>
                <Stack direction="row" gap="md">
                  <Button variant="primary" size="sm">Small</Button>
                  <Button variant="primary" size="md">Medium</Button>
                  <Button variant="primary" size="lg">Large</Button>
                </Stack>
                <Button variant="primary" disabled>Disabled</Button>
              </Stack>
            </CardContent>
          </Card>

          {/* Badges Section */}
          <Card padding="lg">
            <CardHeader>
              <CardTitle>Badge Variants</CardTitle>
              <CardDescription>Status indicators and labels</CardDescription>
            </CardHeader>
            <CardContent>
              <Stack direction="row" gap="md">
                <Badge variant="default">Default</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="info">Info</Badge>
                <Badge variant="outline">Outline</Badge>
              </Stack>
            </CardContent>
          </Card>

          {/* Inputs Section */}
          <Card padding="lg">
            <CardHeader>
              <CardTitle>Input Fields</CardTitle>
              <CardDescription>Form inputs with consistent styling</CardDescription>
            </CardHeader>
            <CardContent>
              <Stack gap="md">
                <Input type="text" placeholder="Normal input" />
                <Input type="email" placeholder="Email input" />
                <Input type="text" placeholder="Error state" error />
                <Input type="text" placeholder="Disabled" disabled />
              </Stack>
            </CardContent>
          </Card>

          {/* Spacing Section */}
          <Card padding="lg">
            <CardHeader>
              <CardTitle>Spacing Scale</CardTitle>
              <CardDescription>Consistent spacing using design tokens</CardDescription>
            </CardHeader>
            <CardContent>
              <Stack gap="md">
                <div>
                  <div className="h-[8px] bg-[var(--color-accent-primary)] rounded-[var(--radius-sm)]" style={{ width: 'var(--space-xs)' }} />
                  <code className="text-caption">--space-xs (8px)</code>
                </div>
                <div>
                  <div className="h-[8px] bg-[var(--color-accent-primary)] rounded-[var(--radius-sm)]" style={{ width: 'var(--space-md)' }} />
                  <code className="text-caption">--space-md (16px)</code>
                </div>
                <div>
                  <div className="h-[8px] bg-[var(--color-accent-primary)] rounded-[var(--radius-sm)]" style={{ width: 'var(--space-xl)' }} />
                  <code className="text-caption">--space-xl (24px)</code>
                </div>
                <div>
                  <div className="h-[8px] bg-[var(--color-accent-primary)] rounded-[var(--radius-sm)]" style={{ width: 'var(--space-2xl)' }} />
                  <code className="text-caption">--space-2xl (32px)</code>
                </div>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </div>
  );
}
