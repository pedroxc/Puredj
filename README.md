# PureDJ - Live Radio Streaming Platform

🎵 A modern, responsive web radio platform for Trance & House music streaming, featuring live track information and an intuitive audio player.

## 🚀 Features

- **Live Audio Stream** - 24/7 high-quality 320kbps streaming
- **Real-time Track Info** - Integration with Centova Cast for live metadata
- **Custom Audio Player** - Full-featured player with volume controls
- **Responsive Design** - Mobile-first approach using Tailwind CSS
- **Modern UI/UX** - Clean, professional design with custom animations
- **Marquee Display** - Multilingual thank you messages with live track info

## 📁 Project Structure

```
Puredjmock/
├── assets/
│   ├── css/
│   │   └── style.css          # Custom styles
│   ├── js/
│   │   ├── tailwind.config.js # Tailwind configuration
│   │   ├── streaminfo.js      # Stream info synchronization
│   │   ├── navigation.js      # Navigation blocking
│   │   ├── player.js          # Audio player controls
│   │   └── utils.js           # Utility functions
│   ├── images/
│   │   ├── logo.png           # Site logo
│   │   └── favicon.ico        # Favicon
│   └── fonts/
│       └── ethnocentric.otf   # Custom font
├── .editorconfig              # Editor configuration
├── .gitignore                 # Git ignore rules
├── index.html                 # Main HTML file
├── proxy-stream.php           # PHP proxy for HTTPS
└── README.md                  # This file
```

## 🛠️ Technologies

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript (ES6+)** - Modern vanilla JS
- **jQuery** - DOM manipulation
- **Font Awesome 6** - Icon library
- **Centova Cast API** - Stream metadata
- **PHP** - Proxy for mixed-content resolution

## 📋 Prerequisites

- Web server with PHP support (Apache/Nginx)
- Modern web browser with HTML5 audio support
- Internet connection for CDN resources

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Puredjmock
   ```

2. **Configure stream URL**
   - Update stream URL in `index.html` (line ~94)
   - Update Centova Cast username in `assets/js/streaminfo.js`

3. **Deploy to web server**
   - Upload all files to your web server
   - Ensure PHP is enabled for `proxy-stream.php`
   - Set proper file permissions

4. **Access the site**
   - Open your browser and navigate to your domain
   - The player should load and display live track information

## ⚙️ Configuration

### Stream Information
Edit the stream info sync interval in `assets/js/streaminfo.js`:
```javascript
const POLL_INTERVAL = 60000; // 60 seconds
```

### Player Volume
Default volume is set to 50% in `assets/js/player.js`:
```javascript
let lastVolume = 50;
audio.volume = 0.5;
```

### Colors & Branding
Customize colors in `assets/js/tailwind.config.js`:
```javascript
colors: {
    primary: '#0292D2',
    dark: '#0A0E27',
    darker: '#050816',
}
```

## 🔧 Development

### Local Development
To run locally with PHP:
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

### CSS Customization
Edit `assets/css/style.css` for custom styles beyond Tailwind utilities.

### JavaScript Modules
- `player.js` - Audio player functionality
- `streaminfo.js` - Centova Cast integration
- `navigation.js` - Link blocking for embedded use
- `utils.js` - Utility functions (year, etc.)

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 📝 License

All rights reserved © 2025 PureDJ

## 👤 Contact

- Email: sm@puredj.fm
- Website: [Your Domain]

## 🐛 Known Issues

- Mixed-content warning in production (resolved via proxy-stream.php)
- Marquee element uses deprecated HTML tag (consider CSS animation alternative)

## 🔜 Future Enhancements

- [ ] Progressive Web App (PWA) support
- [ ] Offline mode with service workers
- [ ] User playlist management
- [ ] Social sharing integration
- [ ] Analytics integration
- [ ] Dark/Light theme toggle
- [ ] Multi-language support

## 📚 Credits

- Fonts: Google Fonts (Exo 2), Custom (Ethnocentric)
- Icons: Font Awesome 6
- CSS Framework: Tailwind CSS
- Stream Provider: Centova Cast
