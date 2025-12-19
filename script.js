// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.match-card, .team-card, .tournament-card, .news-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Live match timer simulation
const liveMatches = document.querySelectorAll('.match-status.live');
if (liveMatches.length > 0) {
    setInterval(() => {
        liveMatches.forEach(match => {
            // Simulate score updates (for demo purposes)
            const matchCard = match.closest('.match-card');
            if (matchCard) {
                const scoreElements = matchCard.querySelectorAll('.match-score span');
                if (scoreElements.length >= 3) {
                    // Just animate, don't actually change scores in demo
                    scoreElements[0].style.animation = 'pulse 0.5s ease';
                    setTimeout(() => {
                        scoreElements[0].style.animation = '';
                    }, 500);
                }
            }
        });
    }, 5000);
}

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelectorAll('input[type="text"]')[1].value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Lütfen tüm alanları doldurun.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Lütfen geçerli bir e-posta adresi girin.');
            return;
        }
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Gönderiliyor...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.');
            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1500);
    });
}

// Match card hover effects
document.querySelectorAll('.match-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Team card click to view details (demo)
document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('click', function() {
        const teamName = this.querySelector('h3').textContent;
        console.log(`${teamName} detayları görüntüleniyor...`);
        // Here you could navigate to a team detail page
    });
    
    card.style.cursor = 'pointer';
});

// Tournament card animations
document.querySelectorAll('.tournament-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        if (this.classList.contains('featured')) {
            this.style.boxShadow = '0 20px 60px rgba(99, 102, 241, 0.4)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.boxShadow = '';
    });
});

// News card read more functionality
document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const newsCard = this.closest('.news-card');
        const title = newsCard.querySelector('h3').textContent;
        console.log(`${title} haber detayı görüntüleniyor...`);
        // Here you could navigate to a news detail page
        alert(`"${title}" haberinin detay sayfasına yönlendiriliyorsunuz...`);
    });
});

// Watch button functionality
document.querySelectorAll('.watch-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const matchCard = this.closest('.match-card');
        const teams = matchCard.querySelectorAll('.team h3');
        const team1 = teams[0]?.textContent || 'Takım 1';
        const team2 = teams[1]?.textContent || 'Takım 2';
        
        if (this.textContent === 'İzle') {
            alert(`${team1} vs ${team2} maçı canlı yayın sayfasına yönlendiriliyorsunuz...`);
        } else {
            alert(`${team1} vs ${team2} maçı için hatırlatıcı ayarlandı!`);
        }
    });
});

// Tournament Details Data
const tournamentDetails = {
    'csgo-champ': {
        title: 'World Championship 2024',
        game: 'CS:GO',
        prize: 'Ücretsiz Katılım',
        teams: '24 Takım',
        date: '15-30 Ocak 2024',
        location: 'Katowice, Polonya',
        format: 'Grup Aşaması + Playoff',
        stream: 'Twitch, YouTube',
        description: 'Dünyanın en prestijli CS:GO turnuvası! 24 takım, 2 haftalık yoğun mücadelede şampiyonluk için yarışacak. Turnuva tamamen ücretsizdir. Turnuva grup aşaması ve çift eliminasyon playoff sisteminden oluşmaktadır.',
        prizeDistribution: [],
        participatingTeams: [
            'Natus Vincere', 'FaZe Clan', 'G2 Esports', 'Team Liquid',
            'Astralis', 'Vitality', 'Furia Esports', 'Cloud9',
            'MOUZ', 'Heroic', 'NIP', 'Complexity',
            'BIG', 'OG', 'Spirit', 'Eternal Fire',
            'GamerLegion', 'Virtus.pro', 'BIG Academy', 'Team Falcons',
            'SAW', 'Bravado', '9z Team', 'M80'
        ]
    },
    'valorant-champ': {
        title: 'Valorant Champions',
        game: 'Valorant',
        prize: 'Ücretsiz Katılım',
        teams: '16 Takım',
        date: '20-28 Ocak 2024',
        location: 'Los Angeles, ABD',
        format: 'Grup Aşaması + Çift Eliminasyon',
        stream: 'Twitch, YouTube',
        description: 'Valorant Champions, Riot Games\'in en büyük yıllık turnuvasıdır. Dünya çapında en iyi 16 takım, şampiyonluk unvanı için mücadele edecek. Turnuva tamamen ücretsizdir.',
        prizeDistribution: [],
        participatingTeams: [
            'Sentinels', 'Fnatic', 'Paper Rex', 'LOUD',
            'Team Liquid', 'Gen.G', 'Cloud9', '100 Thieves',
            'NRG', 'EDward Gaming', 'DRX', 'T1',
            'FUT Esports', 'Bleed', 'Giants', 'ZETA DIVISION'
        ]
    },
    'lol-champ': {
        title: 'LoL World Championship',
        game: 'League of Legends',
        prize: 'Ücretsiz Katılım',
        teams: '22 Takım',
        date: '10-25 Şubat 2024',
        location: 'Seul, Güney Kore',
        format: 'Play-In + Grup Aşaması + Playoff',
        stream: 'Twitch, YouTube, LoL Esports',
        description: 'League of Legends Dünya Şampiyonası, dünyanın en büyük e-spor turnuvalarından biridir. 22 takım, dünya şampiyonluğu için yarışacak. Turnuva tamamen ücretsizdir.',
        prizeDistribution: [],
        participatingTeams: [
            'T1', 'Gen.G', 'JD Gaming', 'Bilibili Gaming',
            'G2 Esports', 'Fnatic', 'MAD Lions', 'Team Liquid',
            'Cloud9', '100 Thieves', 'NRG', 'Dplus KIA',
            'KT Rolster', 'Hanwha Life', 'EDward Gaming', 'Top Esports',
            'Weibo Gaming', 'LNG Esports', 'DetonatioN', 'GAM Esports',
            'CTBC Flying Oyster', 'PSG Talon'
        ]
    },
    'pubg-champ': {
        title: 'PUBG Global Championship',
        game: 'PUBG',
        prize: 'Ücretsiz Katılım',
        teams: '32 Takım',
        date: '5-15 Şubat 2024',
        location: 'Bangkok, Tayland',
        format: 'Grup Aşaması + Final',
        stream: 'Twitch, YouTube, PUBG Esports',
        description: 'PUBG Global Championship, battle royale e-sporunun en prestijli turnuvasıdır. 32 takım, 10 günlük yoğun mücadelede şampiyonluk için yarışacak. Turnuva tamamen ücretsizdir.',
        prizeDistribution: [],
        participatingTeams: [
            'Soniqs', 'FaZe Clan', 'Gen.G', 'Team Liquid',
            'Twisted Minds', 'Natus Vincere', '17 Gaming', 'Tianba',
            'Four Angry Men', 'NewHappy', 'Petrichor Road', 'Danawa e-sports',
            'Azure', 'DPlus KIA', 'BGP', 'Faze Clan EU',
            'EXO Clan', 'Question Mark', 'Exalt', 'HOWL',
            'Daytrade Gaming', 'FUT Esports', 'Acend Club', 'Rise Esports',
            'FaZe Clan NA', 'Wildcard Gaming', 'Disguised', 'Complexity',
            'Soniqs EU', 'Team Falcons', 'BTR', 'Mercurial'
        ]
    }
};

// Tournament Modal Functions
const tournamentModal = document.getElementById('tournamentModal');
const modalClose = document.getElementById('modalClose');

function openTournamentModal(tournamentId) {
    const details = tournamentDetails[tournamentId];
    if (!details) return;

    // Set modal content
    document.getElementById('modalGame').textContent = details.game;
    document.getElementById('modalTitle').textContent = details.title;
    document.getElementById('modalPrize').textContent = details.prize;
    document.getElementById('modalTeams').textContent = details.teams;
    document.getElementById('modalDate').textContent = details.date;
    document.getElementById('modalLocation').textContent = details.location;
    document.getElementById('modalFormat').textContent = details.format;
    document.getElementById('modalStream').textContent = details.stream;
    document.getElementById('modalDescription').textContent = details.description;

    // Set prize distribution (now free tournaments)
    const prizeDistContainer = document.getElementById('modalPrizeDistribution');
    prizeDistContainer.innerHTML = '';
    if (details.prizeDistribution && details.prizeDistribution.length > 0) {
        details.prizeDistribution.forEach(prize => {
            const prizeItem = document.createElement('div');
            prizeItem.className = 'prize-item';
            prizeItem.innerHTML = `
                <div class="prize-rank">${prize.rank}</div>
                <div class="prize-amount">${prize.amount}</div>
                <div class="prize-label">${prize.label}</div>
            `;
            prizeDistContainer.appendChild(prizeItem);
        });
    } else {
        prizeDistContainer.innerHTML = '<div class="free-tournament-notice">🎮 Bu turnuva tamamen ücretsizdir! Şampiyonluk için yarışın ve başarılarınızı gösterin.</div>';
    }

    // Set participating teams
    const teamsContainer = document.getElementById('modalParticipatingTeams');
    teamsContainer.innerHTML = '';
    details.participatingTeams.forEach(teamName => {
        const teamItem = document.createElement('div');
        teamItem.className = 'participating-team';
        teamItem.innerHTML = `
            <img src="https://via.placeholder.com/60" alt="${teamName}">
            <span>${teamName}</span>
        `;
        teamsContainer.appendChild(teamItem);
    });

    // Show modal
    tournamentModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeTournamentModal() {
    tournamentModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Tournament button functionality
document.querySelectorAll('.tournament-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const tournamentId = this.getAttribute('data-tournament');
        if (tournamentId) {
            openTournamentModal(tournamentId);
        }
    });
});

// Close modal events
if (modalClose) {
    modalClose.addEventListener('click', closeTournamentModal);
}

if (tournamentModal) {
    tournamentModal.addEventListener('click', function(e) {
        if (e.target === this || e.target.classList.contains('modal-overlay')) {
            closeTournamentModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && tournamentModal.classList.contains('active')) {
            closeTournamentModal();
        }
    });
}

// Scroll to top functionality
let scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px) scale(1.1)';
    this.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.6)';
});

scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
    this.style.boxShadow = '0 4px 15px rgba(99, 102, 241, 0.4)';
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Counter animation for team stats
const animateCounter = (element, target, duration = 2000) => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
};

// Observe team stats for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statValue = entry.target;
            const target = parseInt(statValue.textContent);
            if (!isNaN(target)) {
                animateCounter(statValue, target);
                statsObserver.unobserve(statValue);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-value').forEach(stat => {
    statsObserver.observe(stat);
});

// Team Registration Form - Game Tabs
const gameTabs = document.querySelectorAll('.game-tab');
const gameTypeInput = document.getElementById('gameType');
const selectedGameName = document.getElementById('selectedGameName');

// Game tab switching
gameTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const selectedGame = this.getAttribute('data-game');
        
        // Remove active class from all tabs
        gameTabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Update hidden input and display
        if (gameTypeInput) {
            gameTypeInput.value = selectedGame;
        }
        if (selectedGameName) {
            selectedGameName.textContent = selectedGame;
        }
        
        // Scroll to form
        document.getElementById('teamRegistrationForm').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest' 
        });
    });
});

// Team Registration Form
let memberCount = 0;
const minMembers = 4;
const maxMembers = 10;

function createMemberInput() {
    memberCount++;
    const memberDiv = document.createElement('div');
    memberDiv.className = 'member-item';
    memberDiv.setAttribute('data-member-index', memberCount);
    
    memberDiv.innerHTML = `
        <div class="member-item-header">
            <span class="member-number">Oyuncu #${memberCount}</span>
            ${memberCount > 1 ? '<button type="button" class="remove-member-btn">Kaldır</button>' : ''}
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Oyuncu Adı <span class="required">*</span></label>
                <input type="text" name="memberName${memberCount}" placeholder="Oyuncu adı" required>
            </div>
            <div class="form-group">
                <label>Oyunda Kullanıcı Adı/ID <span class="required">*</span></label>
                <input type="text" name="memberGameID${memberCount}" placeholder="Oyundaki kullanıcı adı/ID" required>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Rol/Pozisyon</label>
                <select name="memberRole${memberCount}">
                    <option value="">Seçiniz</option>
                    <option value="Oyuncu">Oyuncu</option>
                    <option value="Yedek">Yedek</option>
                    <option value="Kaptan">Kaptan</option>
                    <option value="Koç">Koç</option>
                </select>
            </div>
            <div class="form-group">
                <label>Yaş</label>
                <input type="number" name="memberAge${memberCount}" placeholder="Yaş" min="13" max="99">
            </div>
        </div>
    `;
    
    // Add remove button functionality
    const removeBtn = memberDiv.querySelector('.remove-member-btn');
    if (removeBtn) {
        removeBtn.addEventListener('click', function() {
            memberDiv.remove();
            updateMemberNumbers();
        });
    }
    
    return memberDiv;
}

function updateMemberNumbers() {
    const memberItems = document.querySelectorAll('.member-item');
    memberCount = memberItems.length; // Update member count
    memberItems.forEach((item, index) => {
        const numberSpan = item.querySelector('.member-number');
        const newIndex = index + 1;
        numberSpan.textContent = `Oyuncu #${newIndex}`;
        
        // Update data attribute
        const oldIndex = item.getAttribute('data-member-index');
        item.setAttribute('data-member-index', newIndex);
        
        // Update input names if index changed
        if (oldIndex != newIndex) {
            const inputs = item.querySelectorAll('input, select');
            inputs.forEach(input => {
                if (input.name && input.name.includes(oldIndex)) {
                    input.name = input.name.replace(oldIndex, newIndex);
                }
            });
        }
        
        // Update remove button visibility
        const removeBtn = item.querySelector('.remove-member-btn');
        if (newIndex === 1 && removeBtn) {
            removeBtn.style.display = 'none';
        } else if (removeBtn) {
            removeBtn.style.display = 'block';
        }
    });
}

// Initialize team registration form
const teamRegistrationForm = document.getElementById('teamRegistrationForm');
const addMemberBtn = document.getElementById('addMemberBtn');
const teamMembersContainer = document.getElementById('teamMembersContainer');

if (teamRegistrationForm && addMemberBtn && teamMembersContainer) {
    // Add initial members (at least 4)
    for (let i = 0; i < 4; i++) {
        const memberInput = createMemberInput();
        teamMembersContainer.appendChild(memberInput);
    }
    
    // Add member button functionality
    addMemberBtn.addEventListener('click', function() {
        if (memberCount < maxMembers) {
            const memberInput = createMemberInput();
            teamMembersContainer.appendChild(memberInput);
            
            // Scroll to new member
            memberInput.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            alert(`Maksimum ${maxMembers} oyuncu ekleyebilirsiniz.`);
        }
    });
    
    // Form submission
    teamRegistrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate minimum members
        const currentMembers = teamMembersContainer.querySelectorAll('.member-item').length;
        if (currentMembers < minMembers) {
            alert(`En az ${minMembers} oyuncu eklemeniz gerekiyor.`);
            return;
        }
        
        // Collect form data
        const formData = new FormData(teamRegistrationForm);
        const teamData = {
            teamInfo: {
                name: formData.get('teamName'),
                tag: formData.get('teamTag'),
                gameType: formData.get('gameType'),
                foundedYear: formData.get('foundedYear'),
                description: formData.get('teamDescription')
            },
            captain: {
                name: formData.get('captainName'),
                email: formData.get('captainEmail'),
                phone: formData.get('captainPhone'),
                age: formData.get('captainAge'),
                gameID: formData.get('captainGameID')
            },
            members: [],
            social: {
                discord: formData.get('discord'),
                twitter: formData.get('twitter'),
                twitch: formData.get('twitch'),
                website: formData.get('website')
            },
            termsAccepted: formData.get('termsAccepted'),
            newsletter: formData.get('newsletter')
        };
        
        // Collect member data
        const memberItems = teamMembersContainer.querySelectorAll('.member-item');
        memberItems.forEach((item) => {
            const memberIndex = item.getAttribute('data-member-index');
            teamData.members.push({
                name: formData.get(`memberName${memberIndex}`),
                gameID: formData.get(`memberGameID${memberIndex}`),
                role: formData.get(`memberRole${memberIndex}`) || '',
                age: formData.get(`memberAge${memberIndex}`) || ''
            });
        });
        
        // Validate all required fields
        if (!teamData.teamInfo.name || !teamData.teamInfo.tag || !teamData.teamInfo.gameType) {
            alert('Lütfen tüm zorunlu alanları doldurun.');
            return;
        }
        
        if (!teamData.captain.name || !teamData.captain.email || !teamData.captain.phone || !teamData.captain.gameID) {
            alert('Lütfen takım kaptanı bilgilerini eksiksiz doldurun.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(teamData.captain.email)) {
            alert('Lütfen geçerli bir e-posta adresi girin.');
            return;
        }
        
        // Validate members
        let hasEmptyMember = false;
        teamData.members.forEach((member, index) => {
            if (!member.name || !member.gameID) {
                hasEmptyMember = true;
            }
        });
        
        if (hasEmptyMember) {
            alert('Lütfen tüm oyuncuların adını ve oyun ID\'sini doldurun.');
            return;
        }
        
        // Show success message
        showSuccessMessage();
        
        // Log data (in real app, this would be sent to a server)
        console.log('Team Registration Data:', teamData);
        
        // Reset form after 2 seconds
        setTimeout(() => {
            teamRegistrationForm.reset();
            // Clear all members except first 4
            const memberItems = teamMembersContainer.querySelectorAll('.member-item');
            memberItems.forEach((item, index) => {
                if (index >= 4) {
                    item.remove();
                }
            });
            memberCount = 4;
            updateMemberNumbers();
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 2000);
    });
}

function showSuccessMessage() {
    // Create or show success message
    let successMsg = document.querySelector('.form-success-message');
    if (!successMsg) {
        successMsg = document.createElement('div');
        successMsg.className = 'form-success-message';
        successMsg.innerHTML = '✅ Takımınız başarıyla kaydedildi! En kısa sürede size dönüş yapacağız.';
        teamRegistrationForm.insertBefore(successMsg, teamRegistrationForm.firstChild);
    }
    
    successMsg.classList.add('show');
    
    // Hide after 5 seconds
    setTimeout(() => {
        successMsg.classList.remove('show');
    }, 5000);
}

console.log('Cappu Gaming - E-Spor Platformu yüklendi! 🎮');

