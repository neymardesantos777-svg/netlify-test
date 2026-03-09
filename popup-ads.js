// Pop-up Ad Manager
(function() {
    const POPUP_DELAY_FIRST = 3000; // 3 seconds after page load
    const POPUP_INTERVAL = 180000; // 3 minutes (180000ms)
    const STORAGE_KEY = 'worldbankfx_popup_shown';

    function createPopup() {
        const popupHTML = `
            <div id="adPopup" class="popup-overlay">
                <div class="popup-content">
                    <button class="popup-close" onclick="closeAdPopup()">×</button>
                    
                    <div class="popup-header">
                        <h2>🚀 Start Trading Today!</h2>
                        <p>Choose Your Preferred Broker</p>
                    </div>

                    <div class="popup-body">
                        <div class="broker-comparison">
                            <a href="https://www.hfm.com/sv/en/?refid=374930" target="_blank" class="broker-card hfm" onclick="trackClick('HFM')">
                                <div class="broker-icon">🏆</div>
                                <div class="broker-name">HFM</div>
                                <div class="broker-tagline">Award-Winning Broker</div>
                                <span class="broker-btn">Trade Now →</span>
                            </a>

                            <a href="https://one.exnessonelink.com/a/y7scclopum" target="_blank" class="broker-card exness" onclick="trackClick('Exness')">
                                <div class="broker-icon">⚡</div>
                                <div class="broker-name">Exness</div>
                                <div class="broker-tagline">Lightning-Fast Execution</div>
                                <span class="broker-btn">Get Started →</span>
                            </a>
                        </div>
                    </div>

                    <div class="popup-footer">
                        <p>Both brokers are trusted by millions of traders worldwide</p>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', popupHTML);
    }

    function showPopup() {
        const popup = document.getElementById('adPopup');
        if (popup) {
            popup.classList.add('show');
        }
    }

    function hidePopup() {
        const popup = document.getElementById('adPopup');
        if (popup) {
            popup.classList.remove('show');
        }
    }

    window.closeAdPopup = function() {
        hidePopup();
    };

    window.trackClick = function(broker) {
        console.log('Broker clicked:', broker);
    };

    // Close popup when clicking outside
    document.addEventListener('click', function(e) {
        const popup = document.getElementById('adPopup');
        if (e.target === popup) {
            hidePopup();
        }
    });

    // Initialize popup system
    document.addEventListener('DOMContentLoaded', function() {
        createPopup();

        // Show first popup after delay
        setTimeout(function() {
            showPopup();
        }, POPUP_DELAY_FIRST);

        // Show popup every 3 minutes
        setInterval(function() {
            showPopup();
        }, POPUP_INTERVAL);
    });
})();