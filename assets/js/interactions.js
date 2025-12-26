// Interactive Features
document.addEventListener('DOMContentLoaded', function() {

    // Favorite Button Functionality
    const favoriteBtn = document.querySelector('[aria-label="Favorite"]');
    const heartIcon = favoriteBtn.querySelector('i');

    // Check if already favorited
    const isFavorited = localStorage.getItem('puredj-favorited') === 'true';
    if (isFavorited) {
        heartIcon.classList.remove('fa-regular');
        heartIcon.classList.add('fa-solid');
        heartIcon.style.color = '#ff1744';
    }

    favoriteBtn.addEventListener('click', function() {
        const currentlyFavorited = localStorage.getItem('puredj-favorited') === 'true';

        if (currentlyFavorited) {
            // Unfavorite
            localStorage.setItem('puredj-favorited', 'false');
            heartIcon.classList.remove('fa-solid');
            heartIcon.classList.add('fa-regular');
            heartIcon.style.color = '';
            showNotification('Removed from favorites ❌');
        } else {
            // Favorite
            localStorage.setItem('puredj-favorited', 'true');
            heartIcon.classList.remove('fa-regular');
            heartIcon.classList.add('fa-solid');
            heartIcon.style.color = '#ff1744';
            showNotification('Added to favorites ❤️');
        }
    });

    // Share Button Functionality
    const shareBtn = document.querySelector('[aria-label="Share"]');

    shareBtn.addEventListener('click', async function() {
        const shareData = {
            title: 'PureDJ - Live Trance & House Music',
            text: 'Listen to the best electronic music 24/7!',
            url: window.location.href
        };

        try {
            // Try native share API (mobile)
            if (navigator.share) {
                await navigator.share(shareData);
                showNotification('Thanks for sharing! 🎵');
            } else {
                // Fallback: copy to clipboard
                await navigator.clipboard.writeText(window.location.href);
                showNotification('Link copied to clipboard! 📋');
            }
        } catch (err) {
            // If share fails or is canceled
            if (err.name !== 'AbortError') {
                console.error('Share error:', err);
                showNotification('Could not share ❌');
            }
        }
    });

    // Home Button - Smooth Scroll to Top
    const homeLinks = document.querySelectorAll('a[href="#"]');
    homeLinks.forEach(link => {
        const linkText = link.textContent.trim();
        if (linkText === 'Home') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    });

    // Social Media Links - Update with real URLs or open in new tab
    updateSocialLinks();

    // Notification System
    function showNotification(message) {
        // Remove existing notification if any
        const existingNotification = document.querySelector('.custom-notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = 'custom-notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: linear-gradient(135deg, #0292D2, #00D4FF);
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(2, 146, 210, 0.4);
            z-index: 9999;
            font-weight: 600;
            animation: slideIn 0.3s ease-out;
            max-width: 300px;
        `;

        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Add notification animations to document
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }

            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Update social media links
    function updateSocialLinks() {
        // You can replace these with actual PureDJ social media URLs
        const socialLinks = {
            facebook: 'https://www.facebook.com/puredj',
            instagram: 'https://www.instagram.com/puredj',
            twitter: 'https://twitter.com/puredj',
            youtube: 'https://www.youtube.com/@puredj'
        };

        // Update all social links to open in new tab
        document.querySelectorAll('a[aria-label="Facebook"]').forEach(link => {
            link.href = socialLinks.facebook;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        });

        document.querySelectorAll('a[aria-label="Instagram"]').forEach(link => {
            link.href = socialLinks.instagram;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        });

        document.querySelectorAll('a[aria-label="Twitter"]').forEach(link => {
            link.href = socialLinks.twitter;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        });

        document.querySelectorAll('a[aria-label="YouTube"]').forEach(link => {
            link.href = socialLinks.youtube;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        });
    }
});
