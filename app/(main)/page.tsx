"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { MessageSquare, CheckSquare, Sparkles, Zap, LayoutGrid, ArrowRight, Brain, Smartphone } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
        <div className="relative">
          <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:pt-32">
            <motion.div 
              className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <motion.div 
                  className="inline-flex space-x-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-500/20 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/20">
                    AI-Powered
                  </span>
                  <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600 dark:text-gray-400">
                    <span>Task Management Reimagined</span>
                  </span>
                </motion.div>
              </div>
              <motion.h1 
                className="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Meet TaskFusion
                <span className="block text-blue-600 dark:text-blue-400">Your AI Assistant</span>
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Experience the future of task management with AI-powered suggestions, 
                intelligent organization, and seamless switching between chat and visual modes. 
                Get more done with less effort.
              </motion.p>
              <motion.div 
                className="mt-10 flex items-center gap-x-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-6 text-lg font-semibold rounded-xl border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300">
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
            <motion.div 
              className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <PlaceholderImage
                  width={800}
                  height={600}
                  alt="TaskFusion App Preview"
                  className="w-full max-w-4xl rounded-md shadow-2xl ring-1 ring-gray-900/10 dark:ring-white/10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mode Preview Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            {...fadeInUp}
          >
            <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Two Powerful Modes</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Choose Your Workflow
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Switch seamlessly between AI chat assistance and traditional task management interface
            </p>
          </motion.div>
          
          <motion.div 
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/50 dark:to-indigo-950/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">AI Chat Mode</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300">Conversational task management</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-white/80 dark:bg-gray-800/80 p-4 shadow-sm">
                      <div className="flex items-start space-x-3">
                        <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                          <span className="text-white text-sm font-semibold">AI</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-700 dark:text-gray-300">"I've organized your tasks by priority. Would you like me to schedule the client meeting for tomorrow?"</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-blue-50 dark:bg-blue-900/30 p-4">
                      <div className="flex items-start space-x-3">
                        <div className="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center">
                          <span className="text-white text-sm font-semibold">You</span>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-700 dark:text-gray-300">"Yes, and remind me to prepare the presentation slides"</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-950/50 dark:to-teal-950/50">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600">
                      <LayoutGrid className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">UI Mode</CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300">Visual task management</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 rounded-lg bg-white/80 dark:bg-gray-800/80 p-3 shadow-sm">
                      <CheckSquare className="h-5 w-5 text-emerald-600" />
                      <span className="flex-1 text-sm font-medium text-gray-700 dark:text-gray-300">Review quarterly reports</span>
                      <span className="text-xs text-gray-500 bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded-full">High</span>
                    </div>
                    <div className="flex items-center space-x-3 rounded-lg bg-white/80 dark:bg-gray-800/80 p-3 shadow-sm">
                      <CheckSquare className="h-5 w-5 text-emerald-600" />
                      <span className="flex-1 text-sm font-medium text-gray-700 dark:text-gray-300">Client meeting preparation</span>
                      <span className="text-xs text-gray-500 bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded-full">Medium</span>
                    </div>
                    <div className="flex items-center space-x-3 rounded-lg bg-white/80 dark:bg-gray-800/80 p-3 shadow-sm">
                      <CheckSquare className="h-5 w-5 text-gray-400" />
                      <span className="flex-1 text-sm text-gray-500 dark:text-gray-400 line-through">Update project timeline</span>
                      <span className="text-xs text-gray-400">Done</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-white/50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            {...fadeInUp}
          >
            <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">Everything You Need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Powerful Features
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Advanced AI capabilities combined with intuitive design for maximum productivity
            </p>
          </motion.div>
          
          <motion.div 
            className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <motion.div className="flex flex-col" variants={fadeInUp}>
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-600">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  AI-Powered Suggestions
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">Get intelligent task recommendations, priority suggestions, and automated scheduling based on your work patterns and deadlines.</p>
                </dd>
              </motion.div>
              
              <motion.div className="flex flex-col" variants={fadeInUp}>
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-emerald-600">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  Smart Organization
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">Automatically categorize and organize your tasks with AI-driven tagging, project grouping, and deadline management.</p>
                </dd>
              </motion.div>
              
              <motion.div className="flex flex-col" variants={fadeInUp}>
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-purple-600">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  Seamless Mode Switching
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">Switch instantly between AI chat mode and traditional UI mode without losing context or progress on your tasks.</p>
                </dd>
              </motion.div>
              
              <motion.div className="flex flex-col" variants={fadeInUp}>
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-orange-600">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                  Mobile Responsive
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">Access your tasks anywhere with a fully responsive design that works perfectly on desktop, tablet, and mobile devices.</p>
                </dd>
              </motion.div>
              
              <motion.div className="flex flex-col" variants={fadeInUp}>
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-pink-600">
                    <CheckSquare className="h-8 w-8 text-white" />
                  </div>
                  Advanced Analytics
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">Track your productivity with detailed analytics, completion rates, and insights into your work patterns and habits.</p>
                </dd>
              </motion.div>
              
              <motion.div className="flex flex-col" variants={fadeInUp}>
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-indigo-600">
                    <MessageSquare className="h-8 w-8 text-white" />
                  </div>
                  Natural Language
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                  <p className="flex-auto">Create and manage tasks using natural language. Just tell the AI what you need to do, and it handles the rest.</p>
                </dd>
              </motion.div>
            </dl>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 sm:top-[-30rem] sm:-ml-80 lg:left-[max(14rem,calc(100%-59rem))] lg:top-[-15rem] xl:left-[max(23rem,calc(100%-71rem))]">
          <div className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-blue-400 to-purple-300 opacity-30" style={{clipPath: "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)"}} />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Productivity?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Join thousands of users who have revolutionized their task management with AI-powered assistance.
            </p>
            <motion.div 
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Start Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 text-gray-300 hover:bg-gray-800 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
