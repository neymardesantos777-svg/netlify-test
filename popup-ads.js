// Pop-up Ad Manager
(function() {
    const POPUP_DELAY_FIRST = 20000; // 20 seconds after page load
    const POPUP_INTERVAL = 1800000;  // 30 minutes between repeat shows
    const STORAGE_KEY = 'worldbankfx_popup_last_shown';
    const COOLDOWN = 60 * 60 * 1000; // 1 hour cooldown between sessions

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
                            <a href="https://www.hfm.com/sv/en/?refid=374930" target="_blank" rel="noopener noreferrer" class="broker-card hfm" onclick="trackClick('HFM')">
                                <div class="broker-icon">🏆</div>
                                <div class="broker-name">HFM</div>
                                <div class="broker-tagline">Award-Winning Broker</div>
                                <span class="broker-btn">Trade Now →</span>
                            </a>

                            <a href="https://one.exnessonelink.com/a/y7scclopum" target="_blank" rel="noopener noreferrer" class="broker-card exness" onclick="trackClick('Exness')">
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

    function hasSeenRecentlyThisSession() {
        return window._popupShownThisSession === true;
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

        // Check if shown recently (within cooldown period)
        const lastShown = localStorage.getItem(STORAGE_KEY);
        const now = Date.now();

        if (lastShown && (now - parseInt(lastShown)) < COOLDOWN) {
            // Visited recently, wait longer before showing
            setTimeout(function() {
                showPopup();
                localStorage.setItem(STORAGE_KEY, Date.now().toString());
                window._popupShownThisSession = true;
            }, POPUP_DELAY_FIRST * 2); // double delay for returning visitors
        } else {
            // Fresh visitor or been away a while
            setTimeout(function() {
                showPopup();
                localStorage.setItem(STORAGE_KEY, Date.now().toString());
                window._popupShownThisSession = true;
            }, POPUP_DELAY_FIRST);
        }

        // Show again after interval, but only once more per session
        setInterval(function() {
            if (!hasSeenRecentlyThisSession()) return;
            showPopup();
        }, POPUP_INTERVAL);
    });
})();
