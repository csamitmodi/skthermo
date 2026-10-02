import {company} from '../data/company.js';import {esc} from './ui.js';
// Future registration, infrastructure, capacity, history and customer evidence.
// Each entry requires explicit approval; null values produce no public component.
export function verifiedTrust(){const facts=(company.trustFacts||[]).filter(f=>f.verified===true&&f.value!=null&&f.value!=='');return facts.length?`<section class="company-facts"><p class="eyebrow">COMPANY FACTS</p><dl>${facts.map(f=>`<div><dt>${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`).join('')}</dl></section>`:'';}
