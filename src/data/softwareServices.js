const makeStudy = (name, description) => ({ name, description });

export const softwareServices = {
    etap: {
        id: 'etap',
        name: 'ETAP',
        heroTitle: 'ETAP Power System Engineering Services',
        shortDescription: 'Comprehensive ETAP modelling and analytical studies for safe, reliable, and compliant electrical network performance.',
        keyHighlights: [
            'Detailed network modelling for LV, MV, and HV systems',
            'Protection and safety-led engineering deliverables',
            'Utility and client-ready technical reports'
        ],
        overview: 'ETAP is a leading platform for design, operation, and analysis of electrical power systems. We use ETAP to simulate network behaviour under normal, contingency, and fault conditions, helping clients make informed technical and commercial decisions.',
        engineeringStudies: [
            makeStudy('Load Flow Analysis', 'Assess voltage profiles, loading, and operating margins across normal and contingency conditions.'),
            makeStudy('Short Circuit Analysis', 'Establish fault levels and equipment duty requirements for switchgear, busbars, and protection devices.'),
            makeStudy('Motor Starting Study', 'Review voltage dip, acceleration time, and starting torque for large motor loads.'),
            makeStudy('Harmonic Analysis', 'Measure distortion levels and identify mitigation options for nonlinear loads and VSDs.'),
            makeStudy('Relay Coordination', 'Coordinate protection curves to achieve reliable grading and selective tripping.'),
            makeStudy('Arc Flash', 'Quantify incident energy and recommended PPE boundaries for safer maintenance access.'),
            makeStudy('Grounding Analysis', 'Check touch and step voltages, grid resistance, and earthing system performance.')
        ],
        applications: [
            'Industrial plant electrical system expansion',
            'Data centre resilience validation',
            'Utility and private network compliance verification',
            'Substation upgrade impact assessment'
        ],
        benefits: [
            'Improved system reliability and safety',
            'Reduced design rework during project execution',
            'Early identification of protection and arc-flash risks',
            'Faster approvals with professional technical documentation'
        ],
        industries: [
            'Transmission & Distribution',
            'Industrial Plants',
            'Data Centres',
            'Utilities',
            'Infrastructure'
        ],
        faqs: [
            makeStudy('Is ETAP suitable for industrial power systems?', 'Yes. It is one of the most common tools for industrial LV and MV network studies.'),
            makeStudy('Can ETAP support protection coordination?', 'Yes. We use it for relay coordination and arc flash workflows.'),
            makeStudy('Do you provide grounding analysis in ETAP?', 'Yes. Earthing and grounding studies can be part of the ETAP scope.')
        ]
    },
    psse: {
        id: 'psse',
        name: 'PSS/E',
        heroTitle: 'PSS/E Grid and Stability Studies',
        shortDescription: 'Advanced transmission planning, dynamic studies, and regulatory grid analysis using Siemens PSS/E.',
        keyHighlights: [
            'Transmission-scale simulation capability',
            'Steady-state and dynamic stability expertise',
            'Strong utility and grid-code project experience'
        ],
        overview: 'PSS/E is one of the global standards for transmission network and interconnection studies. We use PSS/E to evaluate large-scale power system behaviour and provide evidence-based recommendations for generation, storage, and demand integration projects.',
        engineeringStudies: [
            makeStudy('Load Flow', 'Confirm steady-state operating performance, transfer capability, and voltage compliance across network scenarios.'),
            makeStudy('Short Circuit', 'Determine fault levels and withstand duties for transmission and distribution assets.'),
            makeStudy('Stability', 'Assess dynamic response, rotor-angle stability, and post-fault recovery under disturbed conditions.'),
            makeStudy('Grid Compliance', 'Support connection applications and ensure project performance aligns with grid-code requirements.')
        ],
        applications: [
            'Transmission interconnection studies',
            'Renewable and BESS grid integration',
            'N-1 contingency and planning assessments',
            'Operational security and dynamic performance evaluation'
        ],
        benefits: [
            'Confidence in grid-connection strategy',
            'Reduced interconnection and compliance risk',
            'Improved operational planning and dispatch decisions',
            'Support for regulator and utility submissions'
        ],
        industries: [
            'Transmission & Distribution',
            'Renewable Energy',
            'Utilities',
            'Infrastructure'
        ],
        faqs: [
            makeStudy('What is PSS/E used for?', 'It is mainly used for transmission planning, steady-state analysis, and dynamic stability studies.'),
            makeStudy('Can PSS/E support grid integration work?', 'Yes. It is well suited to interconnection and grid compliance studies.'),
            makeStudy('Do you use it for large networks?', 'Yes. PSS/E is ideal for transmission-scale systems and utility planning.')
        ]
    },
    pscad: {
        id: 'pscad',
        name: 'PSCAD',
        heroTitle: 'PSCAD Electromagnetic Transient Studies',
        shortDescription: 'High-fidelity EMT simulations for switching, insulation, and converter-dominated network behaviour.',
        keyHighlights: [
            'Specialist transient and switching analysis',
            'Strong insulation and overvoltage study capability',
            'Detailed modelling for modern converter-rich systems'
        ],
        overview: 'PSCAD enables electromagnetic transient simulation for events that cannot be adequately captured in steady-state tools. We deliver technically robust studies to de-risk equipment selection, protection strategy, and commissioning for complex power projects.',
        engineeringStudies: [
            makeStudy('Insulation Coordination', 'Verify withstand levels and surge protection performance for critical equipment and cable systems.'),
            makeStudy('TOV', 'Analyse temporary overvoltages and their impact on insulation stress and asset selection.'),
            makeStudy('Fast Front', 'Study lightning and steep-front impulse behaviour affecting insulation and arrestor coordination.'),
            makeStudy('Slow Front', 'Assess slower switching surges and system response during energisation and de-energisation.'),
            makeStudy('Transformer Energisation', 'Examine inrush, residual flux, and overvoltage conditions during transformer switching.'),
            makeStudy('TRO', 'Investigate transient recovery overvoltage conditions across breakers and switching devices.'),
            makeStudy('Cable Switching', 'Review cable charging, switching transients, and associated voltage stresses.'),
            makeStudy('Harmonic Resonance', 'Identify network resonance points and harmonic amplification risks in converter-led grids.')
        ],
        applications: [
            'Offshore and onshore renewable grid connections',
            'HV cable and switching transient assessments',
            'Substation insulation and surge arrester coordination',
            'Converter interaction and resonance investigations'
        ],
        benefits: [
            'Better insulation and equipment specification decisions',
            'Reduced commissioning and energisation surprises',
            'Lower asset risk from transient overvoltages',
            'Improved confidence in design margins'
        ],
        industries: [
            'Renewable Energy',
            'Transmission & Distribution',
            'Utilities',
            'Oil & Gas',
            'Infrastructure'
        ],
        faqs: [
            makeStudy('Why use PSCAD instead of steady-state tools?', 'PSCAD is used when electromagnetic transients and switching events need detailed time-domain analysis.'),
            makeStudy('Can you study transformer energisation?', 'Yes. Transformer energisation and inrush studies are a core PSCAD use case.'),
            makeStudy('Is PSCAD suitable for cable switching and resonance?', 'Yes. It is widely used for switching surge and harmonic resonance analysis.')
        ]
    },
    powerfactory: {
        id: 'powerfactory',
        name: 'DIgSILENT PowerFactory',
        heroTitle: 'DIgSILENT PowerFactory Engineering Studies',
        shortDescription: 'End-to-end power system analysis for planning, protection, compliance, and operational performance.',
        keyHighlights: [
            'Comprehensive planning-to-operation study coverage',
            'Strong compliance support for UK and international codes',
            'Integrated analysis workflows for efficient project delivery'
        ],
        overview: "DIgSILENT PowerFactory provides a versatile environment for network simulation, compliance assessment, and protection engineering. Our team uses PowerFactory to produce integrated studies aligned with utility expectations and project stakeholders' requirements.",
        engineeringStudies: [
            makeStudy('Load Flow', 'Verify voltage control, losses, and loading margins across normal and abnormal operating conditions.'),
            makeStudy('Reactive Compensation', 'Determine the optimum reactive strategy for voltage regulation and power-factor management.'),
            makeStudy('Short Circuit', 'Assess equipment duty and fault contribution across network configurations.'),
            makeStudy('Harmonic Analysis', 'Quantify distortion and identify filtering or mitigation measures for compliant operation.'),
            makeStudy('Relay Coordination', 'Develop coordinated protection settings for reliable and selective fault clearance.'),
            makeStudy('Arc Flash', 'Calculate incident energy and define safe working boundaries for operating teams.'),
            makeStudy('Grid Compliance', 'Demonstrate network performance against applicable codes and utility connection requirements.'),
            makeStudy('P28', 'Assess flicker and voltage disturbance impact in line with UK power quality expectations.'),
            makeStudy('G99', 'Support embedded generation and inverter-based resource connection compliance.'),
            makeStudy('G5/4', 'Review harmonic compatibility and planning limits for connected assets.'),
            makeStudy('G5/5', 'Verify voltage fluctuation and flicker compliance for modern generator connections.')
        ],
        applications: [
            'Renewable and storage connection packages',
            'Distribution and industrial network optimization',
            'Protection philosophy and relay setting validation',
            'Voltage quality and harmonic compliance submissions'
        ],
        benefits: [
            'One coherent model across multiple study domains',
            'Efficient compliance evidence generation',
            'Improved coordination between design and operations teams',
            'Clear, audit-ready engineering reports'
        ],
        industries: [
            'Renewable Energy',
            'Data Centres',
            'Industrial Plants',
            'Utilities',
            'Transmission & Distribution',
            'Infrastructure'
        ],
        faqs: [
            makeStudy('Can PowerFactory support compliance studies?', 'Yes. We use it for grid code, voltage quality, harmonic, and protection compliance work.'),
            makeStudy('Is it suitable for industrial and utility projects?', 'Yes. It is ideal for both utility planning and complex industrial network analysis.'),
            makeStudy('Can you provide report-ready outputs?', 'Yes. We produce structured engineering reports and supporting calculation appendices.')
        ]
    },
    homerpro: {
        id: 'homerpro',
        name: 'Homer Pro',
        heroTitle: 'Homer Pro Hybrid Renewable Energy Studies',
        shortDescription: 'Hybrid renewable system design and feasibility analysis for solar, wind, and battery-based projects.',
        keyHighlights: [
            'Renewable feasibility and sizing support',
            'Hybrid optimisation for solar, wind, and storage',
            'Commercially aware concept-stage decision support'
        ],
        overview: 'Homer Pro helps us evaluate hybrid renewable energy system configurations, optimise component sizing, and compare economic and technical options for early-stage energy projects.',
        engineeringStudies: [
            makeStudy('Solar + Battery Design', 'Assess PV and storage combinations for reliability, cost, and dispatchability.'),
            makeStudy('Wind + Solar Design', 'Compare complementary renewable profiles to improve generation balance.'),
            makeStudy('Hybrid Power Optimization', 'Optimise system architecture, dispatch, and storage strategy for project goals.'),
            makeStudy('Renewable Feasibility Studies', 'Test concept-stage assumptions and identify practical implementation pathways.')
        ],
        applications: [
            'Hybrid energy master planning',
            'Concept-stage renewable sizing',
            'Feasibility and option comparison',
            'Early commercial decision support'
        ],
        benefits: [
            'Better early-stage investment decisions',
            'Clear comparison of renewable configurations',
            'Reduced risk before detailed engineering starts',
            'Support for concept design and feasibility reports'
        ],
        industries: [
            'Renewable Energy',
            'Utilities',
            'Infrastructure',
            'Industrial Plants'
        ],
        faqs: [
            makeStudy('Do you use Homer Pro for feasibility only?', 'Mostly yes. It is especially valuable at concept and feasibility stages for comparing system options.'),
            makeStudy('Can Homer Pro support solar and battery projects?', 'Yes. It is a strong fit for solar, storage, and hybrid renewable configuration studies.'),
            makeStudy('Do you combine Homer Pro with other tools?', 'Yes. We often pair it with grid studies from ETAP, PSS/E, or PowerFactory.')
        ]
    }
};

export const serviceOverviewCards = Object.values(softwareServices).map((service) => ({
    id: service.id,
    name: service.name,
    description: service.shortDescription,
    keyHighlights: service.keyHighlights,
    imageAlt: `${service.name} engineering studies`
}));
