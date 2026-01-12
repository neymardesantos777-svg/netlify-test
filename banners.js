document.addEventListener('DOMContentLoaded', function() {
    const bannerHTML = `
        <div class="banner-container">
            <div class="banner-slider" id="bannerSlider">
                <a href="https://www.hfm.com/sv/en/?refid=374930" target="_blank" class="banner-slide banner-1">
                    <div class="banner-content">
                        <div class="banner-icon">🏆</div>
                        <div class="banner-text">
                            <div class="banner-title">Trade with HFM</div>
                            <div class="banner-subtitle">Award-Winning Forex Broker</div>
                        </div>
                        <div class="banner-cta">Start Trading →</div>
                    </div>
                </a>

                <a href="https://one.exnessonelink.com/a/y7scclopum" target="_blank" class="banner-slide banner-2">
                    <div class="banner-content">
                        <div class="banner-icon">⚡</div>
                        <div class="banner-text">
                            <div class="banner-title">Join Exness</div>
                            <div class="banner-subtitle">Lightning-Fast Execution</div>
                        </div>
                        <div class="banner-cta">Get Started →</div>
                    </div>
                </a>
            </div>

            <div class="banner-dots">
                <div class="banner-dot active" onclick="goToSlide(0)"></div>
                <div class="banner-dot" onclick="goToSlide(1)"></div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', bannerHTML);
    
    let currentSlide = 0;
    const slider = document.getElementById('bannerSlider');
    const dots = document.querySelectorAll('.banner-dot');
    const totalSlides = 2;

    window.updateSlider = function() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }

    window.goToSlide = function(index) {
        currentSlide = index;
        updateSlider();
    }

    setInterval(nextSlide, 5000);
});