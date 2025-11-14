'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const slides = [
  {
    id: 1,
    title: "Brushless DC (BLDC) Motors",
    subtitle: "The Future of Electric Motion",
    content: (
      <div className="space-y-6">
        <p className="text-2xl text-slate-300 leading-relaxed">
          A comprehensive exploration of modern electric motor technology
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/30">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">High Efficiency</h3>
            <p className="text-slate-400">85-95% energy conversion</p>
          </div>
          <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/30">
            <div className="text-5xl mb-4">🔧</div>
            <h3 className="text-xl font-semibold mb-2">Low Maintenance</h3>
            <p className="text-slate-400">No brushes to replace</p>
          </div>
          <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/30">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Precise Control</h3>
            <p className="text-slate-400">Superior speed regulation</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "What is a BLDC Motor?",
    content: (
      <div className="space-y-8">
        <div className="bg-slate-800/50 p-8 rounded-2xl border border-blue-500/30">
          <h3 className="text-3xl font-semibold mb-4 text-blue-300">Definition</h3>
          <p className="text-xl text-slate-300 leading-relaxed">
            A Brushless DC Motor is a synchronous electric motor powered by direct current
            electricity via an electronic controller that switches the current to the motor
            windings, producing magnetic fields that effectively rotate in space.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-900/20 p-6 rounded-xl border border-green-500/30">
            <h4 className="text-2xl font-semibold mb-4 text-green-300">Key Components</h4>
            <ul className="space-y-3 text-lg text-slate-300">
              <li className="flex items-start">
                <span className="text-green-400 mr-3">▸</span>
                <span><strong>Rotor:</strong> Permanent magnets</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">▸</span>
                <span><strong>Stator:</strong> Electromagnets (windings)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">▸</span>
                <span><strong>Controller:</strong> Electronic commutation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">▸</span>
                <span><strong>Sensors:</strong> Hall effect sensors (optional)</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-900/20 p-6 rounded-xl border border-orange-500/30">
            <h4 className="text-2xl font-semibold mb-4 text-orange-300">Operating Principle</h4>
            <ul className="space-y-3 text-lg text-slate-300">
              <li className="flex items-start">
                <span className="text-orange-400 mr-3">1.</span>
                <span>Controller energizes stator coils</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3">2.</span>
                <span>Magnetic field attracts/repels rotor</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3">3.</span>
                <span>Electronic switching replaces brushes</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3">4.</span>
                <span>Continuous rotation achieved</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "BLDC vs Brushed DC Motors",
    content: (
      <div className="space-y-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-blue-500">
                <th className="p-4 text-2xl font-semibold text-blue-300">Feature</th>
                <th className="p-4 text-2xl font-semibold text-green-300">BLDC Motor</th>
                <th className="p-4 text-2xl font-semibold text-red-300">Brushed DC Motor</th>
              </tr>
            </thead>
            <tbody className="text-lg">
              <tr className="border-b border-slate-700 bg-slate-800/30">
                <td className="p-4 font-semibold">Efficiency</td>
                <td className="p-4 text-green-300">85-95% ✓</td>
                <td className="p-4 text-red-300">75-85% ✗</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-4 font-semibold">Maintenance</td>
                <td className="p-4 text-green-300">Very Low ✓</td>
                <td className="p-4 text-red-300">High (brush replacement) ✗</td>
              </tr>
              <tr className="border-b border-slate-700 bg-slate-800/30">
                <td className="p-4 font-semibold">Lifespan</td>
                <td className="p-4 text-green-300">10,000+ hours ✓</td>
                <td className="p-4 text-red-300">1,000-3,000 hours ✗</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-4 font-semibold">Speed Control</td>
                <td className="p-4 text-green-300">Excellent precision ✓</td>
                <td className="p-4 text-red-300">Good ✗</td>
              </tr>
              <tr className="border-b border-slate-700 bg-slate-800/30">
                <td className="p-4 font-semibold">Noise</td>
                <td className="p-4 text-green-300">Very Low ✓</td>
                <td className="p-4 text-red-300">High (brush arcing) ✗</td>
              </tr>
              <tr className="border-b border-slate-700">
                <td className="p-4 font-semibold">Cost</td>
                <td className="p-4 text-yellow-300">Higher initial cost</td>
                <td className="p-4 text-green-300">Lower initial cost ✓</td>
              </tr>
              <tr className="bg-slate-800/30">
                <td className="p-4 font-semibold">Heat Generation</td>
                <td className="p-4 text-green-300">Lower ✓</td>
                <td className="p-4 text-red-300">Higher ✗</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Types of BLDC Motors",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-8 rounded-2xl border border-blue-500/30">
          <h3 className="text-3xl font-semibold mb-6 text-blue-300">Inner Rotor</h3>
          <div className="space-y-4 text-lg text-slate-300">
            <p className="leading-relaxed">
              <strong className="text-blue-200">Configuration:</strong> Rotor inside, stator outside
            </p>
            <div className="my-6 p-4 bg-blue-950/50 rounded-lg">
              <div className="text-6xl text-center">⊙</div>
              <p className="text-center mt-2 text-sm text-slate-400">Rotor (center) + Stator (outer)</p>
            </div>
            <p><strong className="text-blue-200">Advantages:</strong></p>
            <ul className="space-y-2 ml-4">
              <li>• Better heat dissipation</li>
              <li>• Higher speed capability</li>
              <li>• Compact design</li>
            </ul>
            <p><strong className="text-blue-200">Applications:</strong> Drones, computers, power tools</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 p-8 rounded-2xl border border-purple-500/30">
          <h3 className="text-3xl font-semibold mb-6 text-purple-300">Outer Rotor</h3>
          <div className="space-y-4 text-lg text-slate-300">
            <p className="leading-relaxed">
              <strong className="text-purple-200">Configuration:</strong> Rotor outside, stator inside
            </p>
            <div className="my-6 p-4 bg-purple-950/50 rounded-lg">
              <div className="text-6xl text-center">◎</div>
              <p className="text-center mt-2 text-sm text-slate-400">Stator (center) + Rotor (outer)</p>
            </div>
            <p><strong className="text-purple-200">Advantages:</strong></p>
            <ul className="space-y-2 ml-4">
              <li>• Higher torque</li>
              <li>• Lower speed ripple</li>
              <li>• Larger rotor inertia</li>
            </ul>
            <p><strong className="text-purple-200">Applications:</strong> Fans, electric vehicles, industrial machines</p>
          </div>
        </div>

        <div className="md:col-span-2 bg-gradient-to-r from-green-900/40 to-teal-800/20 p-8 rounded-2xl border border-green-500/30">
          <h3 className="text-3xl font-semibold mb-6 text-green-300">Sensorless vs Sensored</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-green-200">Sensored (Hall Effect)</h4>
              <ul className="space-y-2 text-lg text-slate-300">
                <li>✓ Precise position feedback</li>
                <li>✓ Better low-speed performance</li>
                <li>✓ Smoother startup</li>
                <li>✗ More complex/expensive</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-teal-200">Sensorless (Back-EMF)</h4>
              <ul className="space-y-2 text-lg text-slate-300">
                <li>✓ Simpler design</li>
                <li>✓ Lower cost</li>
                <li>✓ More reliable (fewer components)</li>
                <li>✗ Poor low-speed performance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "Working Principle & Commutation",
    content: (
      <div className="space-y-8">
        <div className="bg-slate-800/50 p-8 rounded-2xl border border-blue-500/30">
          <h3 className="text-3xl font-semibold mb-4 text-blue-300">Electronic Commutation Process</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-blue-950/50 p-6 rounded-xl">
              <div className="text-4xl mb-3">1️⃣</div>
              <h4 className="text-xl font-semibold mb-2 text-blue-200">Detection</h4>
              <p className="text-slate-300">Hall sensors or back-EMF detect rotor position</p>
            </div>
            <div className="bg-blue-950/50 p-6 rounded-xl">
              <div className="text-4xl mb-3">2️⃣</div>
              <h4 className="text-xl font-semibold mb-2 text-blue-200">Switching</h4>
              <p className="text-slate-300">Controller switches current to appropriate coils</p>
            </div>
            <div className="bg-blue-950/50 p-6 rounded-xl">
              <div className="text-4xl mb-3">3️⃣</div>
              <h4 className="text-xl font-semibold mb-2 text-blue-200">Rotation</h4>
              <p className="text-slate-300">Magnetic field rotates, pulling rotor along</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-purple-900/20 p-6 rounded-xl border border-purple-500/30">
            <h4 className="text-2xl font-semibold mb-4 text-purple-300">Three-Phase Commutation</h4>
            <p className="text-lg text-slate-300 mb-4">Standard BLDC uses 3 phases (U, V, W):</p>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">▸</span>
                <span><strong>6-step commutation:</strong> Each phase energized in sequence</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">▸</span>
                <span><strong>120° electrical angle:</strong> Between phases</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">▸</span>
                <span><strong>Trapezoidal back-EMF:</strong> Standard control</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-3">▸</span>
                <span><strong>Sinusoidal control:</strong> Smoother operation (FOC)</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-900/20 p-6 rounded-xl border border-orange-500/30">
            <h4 className="text-2xl font-semibold mb-4 text-orange-300">Control Methods</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-xl font-semibold text-orange-200 mb-2">Trapezoidal Control</h5>
                <ul className="text-slate-300 space-y-1 ml-4">
                  <li>• Simple implementation</li>
                  <li>• Lower cost</li>
                  <li>• Some torque ripple</li>
                </ul>
              </div>
              <div>
                <h5 className="text-xl font-semibold text-orange-200 mb-2">Field-Oriented Control (FOC)</h5>
                <ul className="text-slate-300 space-y-1 ml-4">
                  <li>• Smooth operation</li>
                  <li>• High efficiency</li>
                  <li>• Complex algorithm</li>
                  <li>• Better torque control</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-900/20 p-6 rounded-xl border border-green-500/30">
          <h4 className="text-2xl font-semibold mb-4 text-green-300">Key Formulas</h4>
          <div className="grid md:grid-cols-2 gap-4 text-lg font-mono">
            <div className="bg-slate-950/50 p-4 rounded">
              <p className="text-green-200">Speed (RPM) = (120 × f) / P</p>
              <p className="text-sm text-slate-400 mt-1">f = frequency, P = pole pairs</p>
            </div>
            <div className="bg-slate-950/50 p-4 rounded">
              <p className="text-green-200">Torque = K<sub>t</sub> × I</p>
              <p className="text-sm text-slate-400 mt-1">K<sub>t</sub> = torque constant, I = current</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "Advantages of BLDC Motors",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: "⚡",
            title: "High Efficiency",
            desc: "85-95% efficiency due to electronic commutation and permanent magnets",
            color: "from-yellow-900/40 to-yellow-800/20 border-yellow-500/30"
          },
          {
            icon: "🔧",
            title: "Low Maintenance",
            desc: "No brushes to wear out, reducing maintenance requirements significantly",
            color: "from-green-900/40 to-green-800/20 border-green-500/30"
          },
          {
            icon: "🎯",
            title: "Precise Control",
            desc: "Electronic control enables accurate speed and position regulation",
            color: "from-blue-900/40 to-blue-800/20 border-blue-500/30"
          },
          {
            icon: "🔇",
            title: "Low Noise",
            desc: "Quieter operation without mechanical brush friction and arcing",
            color: "from-purple-900/40 to-purple-800/20 border-purple-500/30"
          },
          {
            icon: "📊",
            title: "Better Speed-Torque",
            desc: "Linear and flat speed-torque characteristics for consistent performance",
            color: "from-pink-900/40 to-pink-800/20 border-pink-500/30"
          },
          {
            icon: "🌡️",
            title: "Lower Heat",
            desc: "Less heat generation improves reliability and reduces cooling needs",
            color: "from-red-900/40 to-red-800/20 border-red-500/30"
          },
          {
            icon: "⏱️",
            title: "Long Lifespan",
            desc: "10,000+ hours operational life due to minimal wear components",
            color: "from-cyan-900/40 to-cyan-800/20 border-cyan-500/30"
          },
          {
            icon: "⚙️",
            title: "High Power Density",
            desc: "More power output per unit weight and size compared to brushed",
            color: "from-indigo-900/40 to-indigo-800/20 border-indigo-500/30"
          },
          {
            icon: "🚀",
            title: "Better Dynamic Response",
            desc: "Fast acceleration and deceleration with excellent transient response",
            color: "from-teal-900/40 to-teal-800/20 border-teal-500/30"
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`bg-gradient-to-br ${item.color} p-6 rounded-xl border`}
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-slate-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    )
  },
  {
    id: 7,
    title: "Applications of BLDC Motors",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-8 rounded-2xl border border-blue-500/30">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300 flex items-center">
              <span className="text-4xl mr-3">🚗</span>
              Electric Vehicles
            </h3>
            <ul className="space-y-2 text-lg text-slate-300">
              <li>• Electric cars and bikes</li>
              <li>• E-scooters and e-bikes</li>
              <li>• Power steering systems</li>
              <li>• Battery cooling fans</li>
              <li>• Seat adjustments</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 p-8 rounded-2xl border border-purple-500/30">
            <h3 className="text-2xl font-semibold mb-4 text-purple-300 flex items-center">
              <span className="text-4xl mr-3">✈️</span>
              Aerospace & Drones
            </h3>
            <ul className="space-y-2 text-lg text-slate-300">
              <li>• Quadcopters and drones</li>
              <li>• Aircraft actuators</li>
              <li>• Satellite systems</li>
              <li>• UAV propulsion</li>
              <li>• Gimbal stabilization</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 p-8 rounded-2xl border border-green-500/30">
            <h3 className="text-2xl font-semibold mb-4 text-green-300 flex items-center">
              <span className="text-4xl mr-3">🏭</span>
              Industrial
            </h3>
            <ul className="space-y-2 text-lg text-slate-300">
              <li>• CNC machines</li>
              <li>• Conveyor systems</li>
              <li>• Robotic arms</li>
              <li>• Textile machinery</li>
              <li>• Packaging equipment</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/20 p-8 rounded-2xl border border-orange-500/30">
            <h3 className="text-2xl font-semibold mb-4 text-orange-300 flex items-center">
              <span className="text-4xl mr-3">💻</span>
              Consumer Electronics
            </h3>
            <ul className="space-y-2 text-lg text-slate-300">
              <li>• Computer hard drives</li>
              <li>• Cooling fans</li>
              <li>• Optical drives (DVD/Blu-ray)</li>
              <li>• Gaming consoles</li>
              <li>• Camera stabilizers</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-900/40 to-red-800/20 p-8 rounded-2xl border border-red-500/30">
            <h3 className="text-2xl font-semibold mb-4 text-red-300 flex items-center">
              <span className="text-4xl mr-3">🏥</span>
              Medical Equipment
            </h3>
            <ul className="space-y-2 text-lg text-slate-300">
              <li>• Surgical tools</li>
              <li>• Ventilators</li>
              <li>• Blood pumps</li>
              <li>• Centrifuges</li>
              <li>• Dental equipment</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/20 p-8 rounded-2xl border border-cyan-500/30">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-300 flex items-center">
              <span className="text-4xl mr-3">🏠</span>
              Home Appliances
            </h3>
            <ul className="space-y-2 text-lg text-slate-300">
              <li>• Washing machines</li>
              <li>• Air conditioners</li>
              <li>• Refrigerator compressors</li>
              <li>• Vacuum cleaners</li>
              <li>• Power tools</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "Specifications & Performance",
    content: (
      <div className="space-y-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">Power Range</h3>
            <div className="text-4xl font-bold text-blue-400 mb-2">1W - 100kW+</div>
            <p className="text-slate-300">From tiny drones to electric vehicles</p>
          </div>
          <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/30">
            <h3 className="text-2xl font-semibold mb-4 text-purple-300">Speed Range</h3>
            <div className="text-4xl font-bold text-purple-400 mb-2">1k - 100k RPM</div>
            <p className="text-slate-300">Highly variable depending on design</p>
          </div>
          <div className="bg-green-900/30 p-6 rounded-xl border border-green-500/30">
            <h3 className="text-2xl font-semibold mb-4 text-green-300">Efficiency</h3>
            <div className="text-4xl font-bold text-green-400 mb-2">85-95%</div>
            <p className="text-slate-300">Superior energy conversion</p>
          </div>
        </div>

        <div className="bg-slate-800/50 p-8 rounded-2xl border border-blue-500/30">
          <h3 className="text-3xl font-semibold mb-6 text-blue-300">Key Performance Parameters</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-blue-200">Electrical Specifications</h4>
              <ul className="space-y-2 text-lg text-slate-300">
                <li><strong>Voltage Rating:</strong> 12V, 24V, 48V, 96V, 300V+</li>
                <li><strong>Current:</strong> Varies by application</li>
                <li><strong>Phases:</strong> Typically 3-phase</li>
                <li><strong>Pole Pairs:</strong> 2-16 (common)</li>
                <li><strong>KV Rating:</strong> RPM per volt (motors)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-purple-200">Mechanical Specifications</h4>
              <ul className="space-y-2 text-lg text-slate-300">
                <li><strong>Torque:</strong> 0.01 Nm - 1000+ Nm</li>
                <li><strong>Speed Control:</strong> 0-100% rated speed</li>
                <li><strong>Acceleration:</strong> Excellent dynamic response</li>
                <li><strong>Operating Temp:</strong> -40°C to +125°C</li>
                <li><strong>Duty Cycle:</strong> Continuous or intermittent</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 p-8 rounded-2xl border border-orange-500/30">
          <h3 className="text-3xl font-semibold mb-6 text-orange-300">Performance Curves</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-950/50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-3 text-orange-200">Torque-Speed Characteristics</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Flat torque curve across wide speed range</li>
                <li>• Peak torque at low speeds</li>
                <li>• Constant power region available</li>
                <li>• Minimal torque ripple with FOC</li>
              </ul>
            </div>
            <div className="bg-slate-950/50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-3 text-red-200">Efficiency Map</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Peak efficiency at 70-80% load</li>
                <li>• High efficiency across wide speed range</li>
                <li>• Better part-load efficiency</li>
                <li>• Minimal losses in electronic control</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 9,
    title: "Control Electronics & Drivers",
    content: (
      <div className="space-y-8">
        <div className="bg-slate-800/50 p-8 rounded-2xl border border-blue-500/30">
          <h3 className="text-3xl font-semibold mb-6 text-blue-300">Motor Controller Components</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-950/50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-3 text-blue-200">Power Stage</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• MOSFETs or IGBTs</li>
                <li>• 3-phase bridge</li>
                <li>• Gate drivers</li>
                <li>• Protection circuits</li>
              </ul>
            </div>
            <div className="bg-purple-950/50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-3 text-purple-200">Control Stage</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Microcontroller</li>
                <li>• PWM generation</li>
                <li>• ADC for sensing</li>
                <li>• Communication interface</li>
              </ul>
            </div>
            <div className="bg-green-950/50 p-6 rounded-xl">
              <h4 className="text-xl font-semibold mb-3 text-green-200">Feedback</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Hall effect sensors</li>
                <li>• Current sensors</li>
                <li>• Voltage monitoring</li>
                <li>• Temperature sensors</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/20 p-6 rounded-xl border border-orange-500/30">
            <h3 className="text-2xl font-semibold mb-4 text-orange-300">PWM Control Techniques</h3>
            <ul className="space-y-3 text-lg text-slate-300">
              <li className="flex items-start">
                <span className="text-orange-400 mr-3">▸</span>
                <span><strong>Six-Step Commutation:</strong> Basic trapezoidal control</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3">▸</span>
                <span><strong>Sinusoidal PWM:</strong> Smoother operation</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3">▸</span>
                <span><strong>Space Vector PWM:</strong> Improved DC bus utilization</span>
              </li>
              <li className="flex items-start">
                <span className="text-orange-400 mr-3">▸</span>
                <span><strong>Direct Torque Control:</strong> Fast dynamic response</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/20 p-6 rounded-xl border border-cyan-500/30">
            <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Protection Features</h3>
            <ul className="space-y-3 text-lg text-slate-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">▸</span>
                <span><strong>Overcurrent Protection:</strong> Prevents motor damage</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">▸</span>
                <span><strong>Over-temperature:</strong> Thermal shutdown</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">▸</span>
                <span><strong>Overvoltage/Undervoltage:</strong> Supply monitoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-3">▸</span>
                <span><strong>Short Circuit:</strong> Immediate shutdown</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-500/30">
          <h3 className="text-3xl font-semibold mb-6 text-purple-300">Popular Controller ICs</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-950/50 p-4 rounded-lg">
              <h4 className="font-semibold text-lg text-purple-200 mb-2">Texas Instruments</h4>
              <p className="text-slate-300">DRV8301, DRV8323, MCF8316A</p>
            </div>
            <div className="bg-slate-950/50 p-4 rounded-lg">
              <h4 className="font-semibold text-lg text-pink-200 mb-2">STMicroelectronics</h4>
              <p className="text-slate-300">L6234, STSPIN32, STM32 MCUs</p>
            </div>
            <div className="bg-slate-950/50 p-4 rounded-lg">
              <h4 className="font-semibold text-lg text-purple-200 mb-2">Infineon</h4>
              <p className="text-slate-300">TLE9879, IFX007T, BTN8982</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 10,
    title: "Future Trends & Innovations",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-8 rounded-2xl border border-blue-500/30">
            <div className="text-5xl mb-4">🔮</div>
            <h3 className="text-2xl font-semibold mb-4 text-blue-300">Emerging Technologies</h3>
            <ul className="space-y-3 text-lg text-slate-300">
              <li>• <strong>SiC & GaN Power Devices:</strong> Higher efficiency, switching frequency</li>
              <li>• <strong>AI-Based Control:</strong> Adaptive algorithms, predictive maintenance</li>
              <li>• <strong>Integrated Motor Drives:</strong> Single-chip solutions</li>
              <li>• <strong>Wireless Control:</strong> IoT-enabled motor systems</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-900/40 to-green-800/20 p-8 rounded-2xl border border-green-500/30">
            <div className="text-5xl mb-4">🌱</div>
            <h3 className="text-2xl font-semibold mb-4 text-green-300">Sustainability Focus</h3>
            <ul className="space-y-3 text-lg text-slate-300">
              <li>• <strong>Energy Recovery:</strong> Regenerative braking systems</li>
              <li>• <strong>Material Innovation:</strong> Rare-earth-free magnets</li>
              <li>• <strong>Recyclability:</strong> Eco-friendly design</li>
              <li>• <strong>Grid Integration:</strong> V2G applications</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/20 p-8 rounded-2xl border border-purple-500/30">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-300">Performance Advances</h3>
            <ul className="space-y-3 text-lg text-slate-300">
              <li>• <strong>Higher Power Density:</strong> Compact designs</li>
              <li>• <strong>Ultra-High Speed:</strong> 100k+ RPM applications</li>
              <li>• <strong>Improved Torque Density:</strong> Stronger magnets</li>
              <li>• <strong>Better Thermal Management:</strong> Advanced cooling</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/20 p-8 rounded-2xl border border-orange-500/30">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-2xl font-semibold mb-4 text-orange-300">Smart Features</h3>
            <ul className="space-y-3 text-lg text-slate-300">
              <li>• <strong>Digital Twin:</strong> Virtual motor modeling</li>
              <li>• <strong>Predictive Maintenance:</strong> Fault detection</li>
              <li>• <strong>Cloud Connectivity:</strong> Remote monitoring</li>
              <li>• <strong>Self-Calibration:</strong> Automated setup</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-8 rounded-2xl border border-cyan-500/30">
          <h3 className="text-3xl font-semibold mb-6 text-cyan-300">Market Growth Projections</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">$45B</div>
              <p className="text-xl text-slate-300">Global market by 2030</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">8.5%</div>
              <p className="text-xl text-slate-300">CAGR 2024-2030</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">60%</div>
              <p className="text-xl text-slate-300">EV market share driver</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 11,
    title: "Conclusion",
    content: (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 p-8 rounded-2xl border border-blue-500/30">
          <h3 className="text-4xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            Key Takeaways
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-3xl">✓</div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-300 mb-1">Superior Efficiency</h4>
                  <p className="text-slate-300">85-95% efficiency makes BLDC motors ideal for energy-conscious applications</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-3xl">✓</div>
                <div>
                  <h4 className="text-xl font-semibold text-purple-300 mb-1">Low Maintenance</h4>
                  <p className="text-slate-300">Electronic commutation eliminates brush wear, extending operational life</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-3xl">✓</div>
                <div>
                  <h4 className="text-xl font-semibold text-green-300 mb-1">Versatile Applications</h4>
                  <p className="text-slate-300">From tiny drones to electric vehicles, BLDC motors excel everywhere</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-3xl">✓</div>
                <div>
                  <h4 className="text-xl font-semibold text-orange-300 mb-1">Precise Control</h4>
                  <p className="text-slate-300">Electronic control enables sophisticated speed and torque regulation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-3xl">✓</div>
                <div>
                  <h4 className="text-xl font-semibold text-cyan-300 mb-1">Growing Market</h4>
                  <p className="text-slate-300">Rapid adoption in EVs, robotics, and renewable energy sectors</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-3xl">✓</div>
                <div>
                  <h4 className="text-xl font-semibold text-pink-300 mb-1">Future-Ready</h4>
                  <p className="text-slate-300">Continuous innovations in materials, control, and integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-green-900/30 p-6 rounded-xl border border-green-500/30 text-center">
            <div className="text-5xl mb-3">🌍</div>
            <h4 className="text-xl font-semibold text-green-300 mb-2">Environmental Impact</h4>
            <p className="text-slate-300">Reducing energy consumption globally through efficient motor technology</p>
          </div>
          <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/30 text-center">
            <div className="text-5xl mb-3">💡</div>
            <h4 className="text-xl font-semibold text-blue-300 mb-2">Innovation Driver</h4>
            <p className="text-slate-300">Enabling new technologies in transportation, automation, and beyond</p>
          </div>
          <div className="bg-purple-900/30 p-6 rounded-xl border border-purple-500/30 text-center">
            <div className="text-5xl mb-3">⚡</div>
            <h4 className="text-xl font-semibold text-purple-300 mb-2">Industry Standard</h4>
            <p className="text-slate-300">Becoming the preferred choice across multiple sectors worldwide</p>
          </div>
        </div>

        <div className="bg-slate-800/50 p-8 rounded-2xl border border-blue-500/30 text-center">
          <h3 className="text-3xl font-semibold mb-4 text-blue-300">The Future is Brushless</h3>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            BLDC motors represent a fundamental shift in electric motor technology, combining efficiency,
            reliability, and performance in a way that meets the demands of modern applications. As we move
            toward an electrified future, BLDC motors will continue to play a crucial role in enabling
            sustainable, high-performance solutions across industries.
          </p>
        </div>
      </div>
    )
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="relative min-h-screen">
      <div className="slide-section">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="slide-content"
        >
          <h1 className="slide-title">{slides[currentSlide].title}</h1>
          {slides[currentSlide].subtitle && (
            <h2 className="slide-subtitle">{slides[currentSlide].subtitle}</h2>
          )}
          <div className="mt-8">
            {slides[currentSlide].content}
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6 bg-slate-800/80 backdrop-blur-lg px-8 py-4 rounded-full border border-blue-500/30">
        <button
          onClick={prevSlide}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors font-semibold"
          disabled={currentSlide === 0}
        >
          ← Previous
        </button>
        <span className="text-lg font-semibold">
          {currentSlide + 1} / {slides.length}
        </span>
        <button
          onClick={nextSlide}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors font-semibold"
          disabled={currentSlide === slides.length - 1}
        >
          Next →
        </button>
      </div>

      {/* Slide indicators */}
      <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentSlide ? 'bg-blue-500 w-8' : 'bg-slate-600'
            }`}
          />
        ))}
      </div>
    </main>
  );
}
