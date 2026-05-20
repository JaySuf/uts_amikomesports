document.addEventListener('DOMContentLoaded', () => {

    const themeToggleBtn = document.getElementById('theme-toggle');
    const storedTheme = localStorage.getItem('theme');

    const activeTheme = storedTheme || 'dark';
    document.documentElement.setAttribute('data-theme', activeTheme);
    updateThemeIcon(activeTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        if (!themeToggleBtn) return;
        const icon = themeToggleBtn.querySelector('i');
        if (icon) {
            if (theme === 'dark') {
                icon.className = 'ri-sun-line'; // Remixicon or general class for sun
                themeToggleBtn.title = "Ganti ke Mode Terang";
            } else {
                icon.className = 'ri-moon-line'; // Remixicon or general class for moon
                themeToggleBtn.title = "Ganti ke Mode Gelap";
            }
        }
    }

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    const currentPath = window.location.pathname;
    const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === pageName || (pageName === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    const passwordInput = document.getElementById('signup-password');
    const strengthFill = document.querySelector('.password-strength-fill');
    const strengthText = document.querySelector('.password-strength-text');

    if (passwordInput && strengthFill && strengthText) {
        passwordInput.addEventListener('input', () => {
            const value = passwordInput.value;
            let score = 0;

            if (value.length > 5) score++;
            if (value.length > 8) score++;
            if (/[A-Z]/.test(value)) score++;
            if (/[0-9]/.test(value)) score++;
            if (/[^A-Za-z0-9]/.test(value)) score++;

            let percent = (score / 5) * 100;
            strengthFill.style.width = `${percent}%`;

            if (score === 0) {
                strengthFill.style.backgroundColor = 'var(--danger-color)';
                strengthText.textContent = 'Kependekan';
            } else if (score <= 2) {
                strengthFill.style.backgroundColor = 'var(--danger-color)';
                strengthText.textContent = 'Lemah';
            } else if (score <= 4) {
                strengthFill.style.backgroundColor = 'var(--warning-color)';
                strengthText.textContent = 'Lumayan';
            } else {
                strengthFill.style.backgroundColor = 'var(--success-color)';
                strengthText.textContent = 'GGWP';
            }
        });
    }

    const contactForm = document.getElementById('contact-form');
    const feedbackBanner = document.getElementById('form-feedback');

    if (contactForm && feedbackBanner) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const message = document.getElementById('contact-message').value.trim();

            if (!name || !email || !message) {
                showFeedback('Isi formnya yang bener dong.', 'error');
                return;
            }

            showFeedback('Lagi ngirim pesan...', 'success');

            setTimeout(() => {
                showFeedback('Mantap! Pesan lo udah berhasil terkirim.', 'success');
                contactForm.reset();
            }, 1500);
        });
    }

    function showFeedback(text, type) {
        if (!feedbackBanner) return;
        feedbackBanner.textContent = text;
        feedbackBanner.className = `form-feedback ${type}`;

        if (type === 'success' && text.includes('berhasil')) {
            setTimeout(() => {
                feedbackBanner.style.display = 'none';
            }, 5000);
        }
    }

    const quickTransferForm = document.getElementById('quick-transfer-form');
    const transactionTableBody = document.querySelector('.data-table tbody');
    const sidebarToggleBtn = document.getElementById('menu-btn-dash');
    const dashboardSidebar = document.querySelector('.sidebar');

    if (sidebarToggleBtn && dashboardSidebar) {
        sidebarToggleBtn.addEventListener('click', () => {
            dashboardSidebar.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 1024 && 
                !dashboardSidebar.contains(e.target) && 
                e.target !== sidebarToggleBtn && 
                !sidebarToggleBtn.contains(e.target)) {
                dashboardSidebar.classList.remove('active');
            }
        });
    }

    if (quickTransferForm && transactionTableBody) {
        quickTransferForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const recipient = document.getElementById('transfer-recipient').value.trim();
            const amountInput = document.getElementById('transfer-amount');
            const amount = parseFloat(amountInput.value);

            if (!recipient || isNaN(amount) || amount <= 0) {
                alert('Masukin nickname penerima sama jumlah koin yang bener dong.');
                return;
            }

            const newRow = document.createElement('tr');

            const formatter = new Intl.NumberFormat('id-ID', {
                style: 'currency',
                currency: 'USD'
            });

            const dateStr = new Date().toLocaleDateString('id-ID', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            });

            newRow.innerHTML = `
                <td>
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80" alt="${recipient}" style="width: 32px; height: 32px; border-radius: 50%;">
                        <div>
                            <h5 style="font-weight: 600;">Transfer ke ${recipient}</h5>
                            <span style="font-size: 0.8rem; color: var(--text-muted);">Pembayaran Cepat</span>
                        </div>
                    </div>
                </td>
                <td>${dateStr}</td>
                <td style="font-weight: 600; color: var(--danger-color);">- ${formatter.format(amount)}</td>
                <td><span class="badge badge-success">Selesai</span></td>
            `;

            transactionTableBody.insertBefore(newRow, transactionTableBody.firstChild);

            const balanceValueEl = document.querySelector('.metric-card:first-child .value');
            if (balanceValueEl) {
                let currentVal = parseFloat(balanceValueEl.textContent.replace(/[^\d,.-]/g, '').replace(/\./g, '').replace(/,/g, '.'));
                if (!isNaN(currentVal)) {
                    balanceValueEl.textContent = formatter.format(currentVal - amount);
                }
            }

            alert(`Sukses ngirim ${formatter.format(amount)} koin ke ${recipient}!`);
            quickTransferForm.reset();
        });
    }

    const chartPoints = document.querySelectorAll('.chart-point');
    chartPoints.forEach(point => {
        point.addEventListener('mouseenter', () => {
            const val = point.getAttribute('data-value');
            point.setAttribute('r', '8');
            point.style.fill = 'var(--accent-color)';

            const tooltip = document.createElement('div');
            tooltip.className = 'chart-tooltip';
            tooltip.style.position = 'absolute';
            tooltip.style.background = 'var(--bg-secondary)';
            tooltip.style.border = '1px solid var(--border-color)';
            tooltip.style.padding = '6px 12px';
            tooltip.style.borderRadius = 'var(--radius-sm)';
            tooltip.style.fontSize = '0.8rem';
            tooltip.style.pointerEvents = 'none';
            tooltip.style.color = 'var(--text-primary)';
            tooltip.style.boxShadow = 'var(--shadow-sm)';
            tooltip.textContent = `Users: ${val}`;
            tooltip.id = 'chart-hover-tooltip';

            document.body.appendChild(tooltip);

            const rect = point.getBoundingClientRect();
            tooltip.style.left = `${rect.left + window.scrollX - tooltip.offsetWidth/2}px`;
            tooltip.style.top = `${rect.top + window.scrollY - 35}px`;
        });

        point.addEventListener('mouseleave', () => {
            point.setAttribute('r', '6');
            point.style.fill = 'var(--primary-color)';
            const tooltip = document.getElementById('chart-hover-tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
});
