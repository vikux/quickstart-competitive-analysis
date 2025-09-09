// quickstart brand colors (extracted from typical fintech branding)
const colors = {
    primary: '#6C5CE7',      // Purple - quickstart primary
    secondary: '#A29BFE',    // Light purple
    accent: '#00CEC9',       // Teal accent
    success: '#00B894',      // Green for success/dominant
    warning: '#FDCB6E',      // Yellow for competitive
    info: '#74B9FF',         // Blue for innovative  
    opportunity: '#DDD6FE',  // Light purple for opportunities
    dark: '#2D3436',         // Dark text
    light: '#F8F9FA',        // Light backgrounds
    white: '#FFFFFF'
};

// Competitive analysis data structure with icons
const competitiveData = {
    // Current quickstart domains
    current: [
        {
            id: 'company-formation',
            name: 'Company Formation',
            icon: 'fas fa-building',
            description: 'Rapid business registration with integrated banking',
            quickstartAdvantage: '24-hour registration vs up to 4 weeks',
            marketSize: '~3,100 new ehf companies registered annually (2023: 3,074 new private limited companies, +1.4% YoY)',
            partners: [
                { name: 'KPMG Iceland', role: 'Professional services partner for compliance, legal framework, and corporate governance guidance' }
            ],
            competitors: [
                { name: 'RSK (Government)', strength: 'Official channel', weakness: 'Up to 4 weeks processing, complex process' },
                { name: 'Accounting Firms (JJ Fjármál)', strength: 'Professional service', weakness: '7 days, additional fees, separate banking' }
            ],
            marketPosition: 'dominant',
            size: 90
        },
        {
            id: 'expense-management',
            name: 'Corporate Cards & Expense',
            icon: 'fas fa-credit-card',
            description: 'Smart corporate cards with AI-powered expense tracking',
            quickstartAdvantage: 'Integrated from day one with bank account, AI receipt matching, bank-agnostic platform',
            marketSize: '~19-22k employers as practical SAM (2022: 18,906 employers); 40-60% adoption potential = ~8-13k active programs',
            partners: [
                { name: 'Landsbankinn', role: 'Primary banking partner for card issuance and account integration' },
                { name: 'Arion Bank (Coming Soon)', role: 'Expanding banking partnerships for multi-bank card issuance' }
            ],
            competitors: [
                { name: 'Kardío', strength: '95% receipt compliance, instant cards', weakness: 'Separate signup, expensive pricing model, not a recognized bank' },
                { name: 'Síminn Pay', strength: 'Telecom backing, flexible controls', weakness: 'Additional step post-incorporation, credit card business model' },
                { name: 'Traditional Banks (Landsbankinn, Íslandsbanki, Arion)', strength: 'Trusted institutions, established processes', weakness: 'Traditional approach, manual expense tracking, no AI features, card-by-card management instead of multi-card view' }
            ],
            marketPosition: 'competitive',
            size: 85
        },
        {
            id: 'contract-management',
            name: 'Contract Management',
            icon: 'fas fa-file-contract',
            description: 'E-signatures, legal templates, and lifecycle management',
            quickstartAdvantage: 'Foundation documents included, local Icelandic templates, AI-powered contract analysis, banking integration for seamless workflow',
            marketSize: '~30-40k entities needing contract lifecycle management (employers ~19-22k + micro-firms signing agreements)',
            partners: [
                { name: 'KPMG Iceland', role: 'Legal template validation and compliance review for Icelandic business law' },
                { name: 'Taktikal', role: 'E-signature technology and workflow automation infrastructure' }
            ],
            competitors: [
                { name: 'Dokobit', strength: 'Icelandic eID support, trusted by major banks', weakness: 'Signing only, no templates' },
                { name: 'Signet (Advania)', strength: 'QES compliance, local support', weakness: 'Limited lifecycle management' },
                { name: 'PandaDoc', strength: 'Global contract management, templates', weakness: 'Not localized, expensive, no Icelandic eID' },
                { name: 'Google Drive + manual processes', strength: 'Free storage, familiar interface', weakness: 'No e-signatures, no templates, manual tracking, no compliance' }
            ],
            marketPosition: 'innovative',
            size: 80
        }
    ],
    // Proposed new domains
    expansion: [
        {
            id: 'telecommunications',
            name: 'Telecommunications',
            icon: 'fas fa-phone',
            description: 'Centralized telco management, billing, and services integrated with company registration',
            marketSize: '~155-170k business mobile SIMs managed by ~19-22k employers (30% of ~520k mobile subscriptions)',
            quickstartAdvantage: 'Telco services included in company formation package, centralized billing with banking integration',
            partners: [
                { name: 'Nova', role: 'Telecommunications infrastructure and business communication services' }
            ],
            competitors: [
                { name: 'Síminn', strength: 'Market leader, extensive infrastructure', weakness: 'Traditional approach, separate billing, complex setup' }
            ],
            marketPosition: 'opportunity',
            size: 70
        },
        {
            id: 'equipment-rental',
            name: 'Computer & Phone Rental',
            icon: 'fas fa-laptop',
            description: 'Computer and phone rentals for businesses with flexible terms',
            marketSize: '~5-9k employer firms preferring OPEX rental model (25-40% of employers, ~459 rental & leasing businesses exist)',
            competitors: [
                { name: 'EU-based platforms (inki.tech)', strength: 'Pan-European reach, ships to Iceland', weakness: 'High shipping costs, complex logistics' },
                { name: 'Buying workstations', strength: 'Ownership, no monthly costs after purchase', weakness: 'High upfront capital, maintenance responsibility, technology depreciation, no flexibility for scaling' }
            ],
            marketPosition: 'opportunity',
            size: 60
        },
        {
            id: 'accounting-services',
            name: 'Accounting & Legal On-Demand',
            icon: 'fas fa-calculator',
            description: 'On-demand accounting and legal consulting services for startups and SMEs',
            marketSize: '~19-30k firms needing outsourced bookkeeping & ad-hoc legal (employers + VAT-liable micro-firms)',
            partners: [
                { name: 'KPMG Iceland', role: 'On-demand accounting expertise and financial advisory services' },
                { name: 'Lagahvoll', role: 'Legal consulting and specialized legal services for businesses' }
            ],
            competitors: [
                { name: 'Local accounting firms', strength: 'Local knowledge, personal relationships', weakness: 'Fixed retainers, limited availability, no digital platform' },
                { name: 'Freelance consultants', strength: 'Flexible, cost-effective', weakness: 'Inconsistent quality, no integrated platform' }
            ],
            marketPosition: 'opportunity',
            size: 75
        },
        {
            id: 'company-dashboard',
            name: 'Company Dashboard',
            icon: 'fas fa-chart-pie',
            description: 'Comprehensive business overview showing all assets, accounts, and future payables in one central dashboard',
            quickstartAdvantage: 'Native integration with Icelandic banks (Landsbankinn, Íslandsbanki, Arion), real-time asset tracking, local compliance',
            marketSize: '~19-22k employers needing dashboards; 30-50% penetration potential = ~6-11k organizations',
            competitors: [
                { name: 'Global platforms (QuickBooks, Xero, NetSuite, Sage)', strength: 'Established solutions, comprehensive features', weakness: 'No Icelandic bank integration, expensive, complex setup for local businesses' },
                { name: 'Manual processes (Excel, spreadsheets)', strength: 'Familiar tools, low cost', weakness: 'Time-consuming, error-prone, no real-time data, no automation' }
            ],
            marketPosition: 'opportunity',
            size: 70
        },
        {
            id: 'foreign-exchange',
            name: 'Foreign Exchange 24/7',
            icon: 'fas fa-exchange-alt',
            description: 'Real-time currency exchange and international payments',
            marketSize: '~12-16k potential FX users from trade-active firms (15-20% of 81k enterprises; ~5-8k regular users)',
            partners: [
                { name: 'SKAGI', role: 'Foreign exchange services and international payment processing' }
            ],
            competitors: [
                { name: 'Banks', strength: 'Trusted institutions', weakness: 'Limited hours, high fees, unfair exchange rates' },
                { name: 'Wise (TransferWise)', strength: 'Low fees, transparent', weakness: 'Not Iceland-focused, cannot top-up in ISK instantly' }
            ],
            marketPosition: 'opportunity',
            size: 68
        },
        {
            id: 'corporate-governance',
            name: 'Corporate Governance & Fundraising',
            icon: 'fas fa-users-cog',
            description: 'Board management, compliance tools, and investment facilitation',
            marketSize: '~8-12k limited liability companies maintaining boards/governance (subset of employers beyond micro-size)',
            competitors: [
                { name: 'BoardEffect', strength: 'Comprehensive governance features', weakness: 'Enterprise-focused, expensive, no fundraising' },
                { name: 'Carta', strength: 'Cap table management, equity tools', weakness: 'US-focused, expensive, complex for SMEs' },
                { name: 'Manual processes', strength: 'Familiar approach', weakness: 'Time-consuming, error-prone, fragmented' }
            ],
            marketPosition: 'opportunity',
            size: 70
        }
    ]
};

class CompetitiveMap {
    constructor() {
        this.svg = d3.select('#domain-map');
        this.width = 1000;
        this.height = 600;
        this.centerX = this.width / 2;
        this.centerY = this.height / 2;
        this.defaultScale = 0.75; // Default zoom level to fit everything
        
        this.svg.attr('viewBox', `0 0 ${this.width} ${this.height}`);
        
        // Create gradient definitions
        this.createGradients();
        
        this.simulation = d3.forceSimulation()
            .force('charge', d3.forceManyBody().strength(-200))
            .force('center', d3.forceCenter(this.centerX, this.centerY))
            .force('collision', d3.forceCollide().radius(d => d.size / 2 + 25))
            .alphaDecay(0.2)
            .velocityDecay(0.9);
        
        this.zoom = d3.zoom()
            .scaleExtent([0.5, 3])
            .on('zoom', (event) => {
                this.container.attr('transform', event.transform);
            });
        
        this.svg.call(this.zoom);
        this.container = this.svg.append('g');
        
        this.init();
    }
    
    createGradients() {
        const defs = this.svg.append('defs');
        
        // quickstart gradient
        const quickstartGradient = defs.append('radialGradient')
            .attr('id', 'quickstart-gradient')
            .attr('cx', '50%')
            .attr('cy', '50%')
            .attr('r', '50%');
        
        quickstartGradient.append('stop')
            .attr('offset', '0%')
            .attr('stop-color', colors.primary)
            .attr('stop-opacity', 1);
        
        quickstartGradient.append('stop')
            .attr('offset', '100%')
            .attr('stop-color', colors.secondary)
            .attr('stop-opacity', 0.8);
            
        // Domain gradients based on market position
        const positions = ['dominant', 'competitive', 'innovative', 'opportunity'];
        const positionColors = [colors.success, colors.warning, colors.info, colors.opportunity];
        
        positions.forEach((position, i) => {
            const gradient = defs.append('radialGradient')
                .attr('id', `${position}-gradient`)
                .attr('cx', '50%')
                .attr('cy', '50%')
                .attr('r', '50%');
            
            gradient.append('stop')
                .attr('offset', '0%')
                .attr('stop-color', positionColors[i])
                .attr('stop-opacity', 0.9);
            
            gradient.append('stop')
                .attr('offset', '100%')
                .attr('stop-color', positionColors[i])
                .attr('stop-opacity', 0.6);
        });
    }
    
    init() {
        // Combine current and expansion domains
        this.allDomains = [...competitiveData.current, ...competitiveData.expansion];
        
        // Create quickstart center node
        this.quickstartNode = {
            id: 'quickstart-center',
            name: 'quickstart.is',
            icon: 'fas fa-rocket',
            type: 'quickstart',
            x: this.centerX,
            y: this.centerY,
            fx: this.centerX, // Fixed x position
            fy: this.centerY, // Fixed y position
            size: 120
        };
        
        // Position domains around quickstart with even distribution
        const currentDomains = this.allDomains.filter(d => competitiveData.current.includes(d));
        const expansionDomains = this.allDomains.filter(d => !competitiveData.current.includes(d));
        
        this.domainNodes = [];
        
        // Position current domains in inner circle
        currentDomains.forEach((domain, i) => {
            const angle = (2 * Math.PI * i) / currentDomains.length - Math.PI / 2; // Start from top
            const radius = 200;
            this.domainNodes.push({
                ...domain,
                type: 'current',
                x: this.centerX + Math.cos(angle) * radius,
                y: this.centerY + Math.sin(angle) * radius
            });
        });
        
        // Position expansion domains in outer circle
        expansionDomains.forEach((domain, i) => {
            const angle = (2 * Math.PI * i) / expansionDomains.length - Math.PI / 2; // Start from top
            const radius = 300;
            this.domainNodes.push({
                ...domain,
                type: 'expansion',
                x: this.centerX + Math.cos(angle) * radius,
                y: this.centerY + Math.sin(angle) * radius
            });
        });
        
        // Only include domain nodes in simulation, not the center node
        this.nodes = [...this.domainNodes];
        
        this.drawVisualization();
        this.setupControls();
        this.setInitialZoom();
    }
    
    drawVisualization() {
        // Create connections from quickstart to current domains
        this.connections = this.container.selectAll('.connection')
            .data(this.domainNodes.filter(d => d.type === 'current'))
            .enter()
            .append('line')
            .attr('class', 'connection')
            .attr('x1', this.quickstartNode.fx)
            .attr('y1', this.quickstartNode.fy)
            .attr('x2', d => d.x)
            .attr('y2', d => d.y);
        
        // Create domain groups
        this.domainGroups = this.container.selectAll('.domain-group')
            .data(this.domainNodes)
            .enter()
            .append('g')
            .attr('class', d => `domain-group ${d.type} ${d.marketPosition || ''}`)
            .attr('transform', d => `translate(${d.x}, ${d.y})`)
            .style('cursor', 'pointer')
            .on('click', (event, d) => this.showDomainDetails(d))
            .on('mouseover', (event, d) => {
                // Stop the simulation to prevent shaking
                this.simulation.alpha(0);
                this.showTooltip(event, d);
            })
            .on('mouseout', () => {
                this.hideTooltip();
                // Resume simulation with low alpha to settle positions
                this.simulation.alpha(0.1).restart();
            });
        
        // Add domain circles with gradients
        this.domainGroups.append('circle')
            .attr('class', 'domain-circle')
            .attr('r', d => d.size / 2)
            .attr('fill', d => `url(#${d.marketPosition || 'opportunity'}-gradient`)
            .attr('stroke', d => this.getStrokeColor(d))
            .attr('stroke-width', d => d.type === 'current' ? 4 : 2)
            .attr('stroke-dasharray', d => d.type === 'expansion' ? '8,4' : 'none');
        
        // Add icons using foreignObject for better icon rendering
        this.domainGroups.append('foreignObject')
            .attr('x', d => -d.size / 6)
            .attr('y', d => -d.size / 6)
            .attr('width', d => d.size / 3)
            .attr('height', d => d.size / 3)
            .html(d => `<div class="domain-icon-container">
                <i class="${d.icon}" style="font-size: ${d.size / 4}px; color: ${colors.white}; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);"></i>
            </div>`);
        
        // Add labels with better text wrapping
        this.domainGroups.each(function(d) {
            const group = d3.select(this);
            const words = d.name.split(' ');
            const lineHeight = 14;
            const startY = d.size / 2 + 25;
            
            if (words.length === 1) {
                // Single word - simple text
                group.append('text')
                    .attr('class', 'domain-label')
                    .attr('y', startY)
                    .attr('text-anchor', 'middle')
                    .text(d.name)
                    .style('fill', colors.dark)
                    .style('font-weight', '600')
                    .style('font-size', '12px');
            } else {
                // Multiple words - create tspan elements
                const textElement = group.append('text')
                    .attr('class', 'domain-label')
                    .attr('text-anchor', 'middle')
                    .style('fill', colors.dark)
                    .style('font-weight', '600')
                    .style('font-size', '12px');
                
                // Split into lines (max 2-3 words per line)
                const lines = [];
                if (words.length <= 3) {
                    // Short names: try to keep on 1-2 lines
                    if (words.join(' ').length <= 15) {
                        lines.push(words.join(' '));
                    } else if (words.length === 2) {
                        lines.push(words[0]);
                        lines.push(words[1]);
                    } else if (words.length === 3) {
                        lines.push(words.slice(0, 2).join(' '));
                        lines.push(words[2]);
                    }
                } else {
                    // Longer names: split more carefully
                    const midPoint = Math.ceil(words.length / 2);
                    lines.push(words.slice(0, midPoint).join(' '));
                    lines.push(words.slice(midPoint).join(' '));
                }
                
                lines.forEach((line, i) => {
                    textElement.append('tspan')
                        .attr('x', 0)
                        .attr('y', startY + (i * lineHeight) - ((lines.length - 1) * lineHeight / 2))
                        .text(line);
                });
            }
        });
        
        // Create quickstart center group
        this.centerGroup = this.container.append('g')
            .attr('class', 'quickstart-center-group')
            .attr('transform', `translate(${this.quickstartNode.x}, ${this.quickstartNode.y})`)
            .style('cursor', 'default')
            .style('pointer-events', 'all');
        
        // Add quickstart circle
        this.centerGroup.append('circle')
            .attr('class', 'quickstart-center')
            .attr('r', this.quickstartNode.size / 2)
            .attr('fill', 'url(#quickstart-gradient)')
            .attr('stroke', colors.primary)
            .attr('stroke-width', 5);
        
        // Add quickstart icon
        this.centerGroup.append('foreignObject')
            .attr('x', -this.quickstartNode.size / 6)
            .attr('y', -this.quickstartNode.size / 6)
            .attr('width', this.quickstartNode.size / 3)
            .attr('height', this.quickstartNode.size / 3)
            .html(`<div class="quickstart-icon-container">
                <i class="${this.quickstartNode.icon}" style="font-size: ${this.quickstartNode.size / 3.5}px; color: ${colors.white}; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);"></i>
            </div>`);
        
        // Add quickstart label
        this.centerGroup.append('text')
            .attr('class', 'quickstart-label')
            .attr('y', this.quickstartNode.size / 2 + 25)
            .attr('text-anchor', 'middle')
            .text('quickstart.is')
            .style('fill', colors.dark)
            .style('font-weight', 'bold')
            .style('font-size', '16px');
        
        // Start simulation
        this.simulation.nodes(this.nodes)
            .on('tick', () => this.updatePositions())
            .on('end', () => {
                // Fix positions after simulation ends to prevent further movement
                this.nodes.forEach(node => {
                    node.fx = node.x;
                    node.fy = node.y;
                });
            });
    }
    
    getStrokeColor(d) {
        switch(d.marketPosition) {
            case 'dominant': return colors.success;
            case 'competitive': return colors.warning;
            case 'innovative': return colors.info;
            default: return colors.secondary;
        }
    }
    
    updatePositions() {
        this.domainGroups
            .attr('transform', d => `translate(${d.x}, ${d.y})`);
        
        this.connections
            .attr('x1', this.quickstartNode.fx)
            .attr('y1', this.quickstartNode.fy)
            .attr('x2', d => d.x)
            .attr('y2', d => d.y);
        
        // Keep center group fixed in position
        this.centerGroup
            .attr('transform', `translate(${this.quickstartNode.fx}, ${this.quickstartNode.fy})`);
    }
    
    showDomainDetails(domain) {
        const panel = document.getElementById('competitor-panel');
        const title = document.getElementById('panel-title');
        const content = document.getElementById('panel-content');
        
        title.innerHTML = `<i class="${domain.icon}"></i> ${domain.name}`;
        
        let html = `
            <div class="domain-overview">
                <p><strong>Description:</strong> ${domain.description}</p>
                ${domain.marketSize ? `<p class="market-size"><strong>Market Size:</strong> ${domain.marketSize}</p>` : ''}
                ${domain.partners ? `
                    <div class="partners-section">
                        <h5><i class="fas fa-handshake"></i> Key Partners:</h5>
                        ${domain.partners.map(partner => `
                            <div class="partner-item">
                                <strong>${partner.name}:</strong> ${partner.role}
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                ${domain.quickstartAdvantage ? `<p class="advantage"><strong>quickstart Advantage:</strong> ${domain.quickstartAdvantage}</p>` : ''}
                <p class="market-position ${domain.marketPosition}"><strong>Market Position:</strong> ${domain.marketPosition}</p>
            </div>
            <div class="competitors-section">
                <h4><i class="fas fa-users"></i> Competitors Analysis:</h4>
        `;
        
        domain.competitors.forEach(competitor => {
            html += `
                <div class="competitor-card">
                    <h5><i class="fas fa-building"></i> ${competitor.name}</h5>
                    <p class="strength"><i class="fas fa-thumbs-up"></i> <strong>Strength:</strong> ${competitor.strength}</p>
                    <p class="weakness"><i class="fas fa-thumbs-down"></i> <strong>Weakness:</strong> ${competitor.weakness}</p>
                </div>
            `;
        });
        
        html += '</div>';
        content.innerHTML = html;
        panel.classList.add('active');
    }
    
    showTooltip(event, domain) {
        const tooltip = d3.select('body').append('div')
            .attr('class', 'tooltip')
            .style('opacity', 0);
        
        tooltip.transition().duration(200).style('opacity', .9);
        tooltip.html(`
            <div class="tooltip-header">
                <i class="${domain.icon}"></i>
                <strong>${domain.name}</strong>
            </div>
            <p>${domain.description}</p>
            <div class="tooltip-footer">
                <em>${domain.competitors.length} competitors</em>
                <span class="market-badge ${domain.marketPosition}">${domain.marketPosition}</span>
            </div>
        `)
        .style('left', (event.pageX + 15) + 'px')
        .style('top', (event.pageY - 10) + 'px');
    }
    
    hideTooltip() {
        d3.selectAll('.tooltip').remove();
    }
    
    setInitialZoom() {
        // Set initial zoom to fit entire visualization
        const initialTransform = d3.zoomIdentity
            .translate(this.width * (1 - this.defaultScale) / 2, this.height * (1 - this.defaultScale) / 2)
            .scale(this.defaultScale);
        
        this.svg.call(this.zoom.transform, initialTransform);
    }
    
    setupControls() {
        document.getElementById('reset-zoom').addEventListener('click', () => {
            // Reset to initial zoomed-out view
            const resetTransform = d3.zoomIdentity
                .translate(this.width * (1 - this.defaultScale) / 2, this.height * (1 - this.defaultScale) / 2)
                .scale(this.defaultScale);
            
            this.svg.transition().duration(750).call(
                this.zoom.transform,
                resetTransform
            );
        });
        
        document.getElementById('close-panel').addEventListener('click', () => {
            document.getElementById('competitor-panel').classList.remove('active');
        });
    }
}

// Initialize the visualization when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new CompetitiveMap();
});