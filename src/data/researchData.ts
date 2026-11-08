import { ResearchParticipant } from '../types';

export const RESEARCH_PARTICIPANTS: ResearchParticipant[] = [
  {
    id: 'U1',
    name: 'Ankit K. (AK)',
    age: 24,
    role: 'Junior QA Engineer',
    income: '₹34,000 / month',
    location: 'Bengaluru (Tier 1)',
    monthlySip: '₹1,500',
    status: 'Paused at Month 4',
    fundType: 'Nifty 50 Index Fund',
    incident: 'Set debit date on 5th. In Month 4, company payroll was delayed to 7th due to bank holiday weekend. On 5th, account had ₹380 balance. HDFC charged ₹590 ECS return fee.',
    userQuote: 'I lost ₹590 because of a ₹1,500 investment. It felt like I was being penalized for saving money. I immediately paused the SIP on Groww so it wouldn\'t happen again. It\'s been 3 months and I haven\'t resumed.',
    rootInsight: 'A single bank penalty wipes out 6 months of nominal gains on early micro-portfolios, turning an aspirational habit into a perceived financial liability.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'U2',
    name: 'Sneha M. (SM)',
    age: 26,
    role: 'Content Operations Specialist',
    income: '₹28,000 / month',
    location: 'Pune (Tier 2)',
    monthlySip: '₹1,000',
    status: 'Paused at Month 5',
    fundType: 'Flexi Cap Fund',
    incident: 'Invested ₹1,000 every month for 5 months (total ₹5,000). Logged in during Month 5 and saw portfolio value was ₹5,042 (+₹42 gain).',
    userQuote: 'I was disciplined for 5 months. But ₹42 profit after half a year felt completely unrewarding. My savings account gives more than that with zero stress. When an expense came up for a family wedding, I stopped the SIP.',
    rootInsight: 'Displaying nominal monetary returns (+₹42) on nascent portfolios undermines habit reinforcement. Without milestone framing, users judge early SIPs as failed investments.',
    avatarUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'U3',
    name: 'Rohit V. (RV)',
    age: 23,
    role: 'BPO Customer Executive',
    income: '₹24,000 / month',
    location: 'Delhi NCR (Tier 1)',
    monthlySip: '₹1,000',
    status: 'Cancelled at Month 6',
    fundType: 'Flexi Cap Fund',
    incident: 'In Month 6, his two-wheeler clutch cable snapped requiring an urgent ₹3,800 garage repair. His Groww balance stood at ₹6,100.',
    userQuote: 'Groww never showed me what my money was working toward. It just looked like cash sitting in an account. I withdrew the balance for my bike and cancelled the SIP.',
    rootInsight: 'When micro-investments lack concrete milestone anchoring or purpose tagging, they become prime targets for liquidating during minor discretionary crunches.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'U4',
    name: 'Meena P. (MP)',
    age: 28,
    role: 'Government High School Teacher',
    income: '₹42,000 / month',
    location: 'Bhopal (Tier 2)',
    monthlySip: '₹2,500',
    status: 'Active at Month 9 (Retained)',
    fundType: 'Large & Mid Cap Fund',
    incident: 'Government salary credits without fail on the 1st of every month. Her retired father advised her to treat SIP like Provident Fund.',
    userQuote: 'My father told me: "Treat this like government PF cut from your salary slip. Don\'t open the app every week." I only look at it when I get my annual tax statement.',
    rootInsight: 'Habit persistence in retail investing is driven by predictable cashflow buffers and intentionally decoupled app engagement during early volatility.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'U5',
    name: 'Tarun D. (TD)',
    age: 25,
    role: 'Freelance UI Designer',
    income: '₹30,000 - ₹60,000 (Variable)',
    location: 'Jaipur (Tier 3)',
    monthlySip: '₹2,000',
    status: 'Paused at Month 3',
    fundType: 'Small Cap Fund',
    incident: 'Client payment delayed into 3rd week of the month. Wanted to push debit date from 5th to 22nd for just one month. Found the process too rigid with T-3 lockout.',
    userQuote: 'I didn\'t want to cancel my investment. I just wanted to shift this month\'s payment to the 22nd. But Groww required a 3-day buffer and changing the date permanently felt complicated. I had to pause it instead, and I forgot to restart.',
    rootInsight: 'Rigid static-calendar deductions clash violently with the 40M+ Indian gig and freelance economy, forcing artificial pauses that morph into permanent churn.',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 'U6',
    name: 'Deepak R. (DR)',
    age: 27,
    role: 'Retail Pharmacist',
    income: '₹36,000 / month',
    location: 'Mumbai (Tier 1)',
    monthlySip: '₹2,000',
    status: 'Active at Month 8 (Retained)',
    fundType: 'Multi Asset Allocation Fund',
    incident: 'Experienced market correction in Month 4; ₹16,000 portfolio lost ₹720 in a single session. Groww dashboard flashed 1-Day Red return.',
    userQuote: 'If I hadn\'t called my chartered accountant cousin who explained NAV dips and unit averaging, I would have stopped the SIP immediately to protect my money.',
    rootInsight: 'Prominent daily red indicators activate loss aversion in long-term investors, triggering impulsive exits when educational framing is absent.',
    avatarUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80'
  }
];

export const QUANT_SURVEY_STATS = [
  {
    percentage: 83.3,
    label: 'Salary-Debit Timing Clash',
    detail: 'Experienced at least one payroll delay clashing with their fixed SIP debit date in their first 6 months.'
  },
  {
    percentage: 66.7,
    label: 'Micro-Corpus Fatigue',
    detail: 'Reported feeling unmotivated by nominal rupee gains (+₹40 to +₹120) after 4-6 months of consistent investing.'
  },
  {
    percentage: 100.0,
    label: 'Intended Temporary Break',
    detail: '100% of participants who paused intended to take only a 1-month break, but lacked an automated resumption schedule.'
  },
  {
    percentage: 78.4,
    label: 'Permanent Dormancy Rate',
    detail: 'Of all paused first-time SIPs on Groww, 78.4% remain inactive beyond 180 days due to open-ended pause architecture.'
  }
];
