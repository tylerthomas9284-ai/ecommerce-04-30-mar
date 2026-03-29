<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MANE. — Premium Hair Styling Accessories</title>
  <meta name="description" content="Brutally beautiful premium hair accessories. Scrunchies, clips, claw clips, ribbons & more. Free shipping over $60.">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

<!-- NAV -->
<nav class="nav">
  <a href="index.html" class="nav__logo">MANE.</a>
  <ul class="nav__links">
    <li><a href="index.html" class="active">Home</a></li>
    <li><a href="products.html">Shop</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
  <div class="nav__right">
    <a href="cart.html" class="nav__cart-btn">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
      Cart <span class="badge" id="cart-count">0</span>
    </a>
    <button class="hamburger" onclick="toggleMenu()" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>

<!-- MOBILE MENU -->
<div class="mobile-menu" id="mobile-menu">
  <a href="index.html" onclick="toggleMenu()">Home</a>
  <a href="products.html" onclick="toggleMenu()">Shop</a>
  <a href="about.html" onclick="toggleMenu()">About</a>
  <a href="contact.html" onclick="toggleMenu()">Contact</a>
  <a href="cart.html" onclick="toggleMenu()">Cart</a>
</div>

<!-- HERO -->
<section class="hero">
  <div class="hero__content">
    <span class="hero__eyebrow">✦ New Collection 2026</span>
    <h1 class="hero__title">
      Hair That
      <span class="line-pink">Hits</span>
      <span class="line-stroke">Different.</span>
    </h1>
    <p class="hero__desc">Premium styling accessories for the bold and the beautiful. Silk, satin, velvet, crystal — every piece designed to elevate your look instantly.</p>
    <div class="hero__actions">
      <a href="products.html" class="btn btn-pink btn-lg">Shop Now →</a>
      <a href="about.html" class="btn btn-outline btn-lg">Our Story</a>
    </div>
    <div class="hero__stats">
      <div class="hero__stat"><strong>50K+</strong><span>Happy Customers</span></div>
      <div class="hero__stat"><strong>4.8★</strong><span>Average Rating</span></div>
      <div class="hero__stat"><strong>100%</strong><span>Premium Quality</span></div>
    </div>
  </div>
  <div class="hero__visual">
    <img src="https://images.unsplash.com/photo-1601684769038-83b1f767a3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=900" alt="Premium hair accessories" loading="eager">
    <div class="hero__badge">
      <strong>$28</strong>
      <span>Starting From</span>
    </div>
    <div class="hero__badge-2">
      <strong>Free Shipping</strong>
      <span>On orders over $60</span>
    </div>
  </div>
</section>

<!-- MARQUEE -->
<div class="marquee-bar">
  <div class="marquee-track">
    <span>Satin Scrunchies</span>
    <span>Pearl Clips</span>
    <span>Velvet Claws</span>
    <span>Silk Ribbons</span>
    <span>Crystal Butterfly</span>
    <span>Free Shipping $60+</span>
    <span>Premium Quality</span>
    <span>New Collection</span>
    <span>Satin Scrunchies</span>
    <span>Pearl Clips</span>
    <span>Velvet Claws</span>
    <span>Silk Ribbons</span>
    <span>Crystal Butterfly</span>
    <span>Free Shipping $60+</span>
    <span>Premium Quality</span>
    <span>New Collection</span>
  </div>
</div>

<!-- FEATURED PRODUCTS -->
<section class="section">
  <div class="container">
    <div class="section-head" style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:16px;">
      <div>
        <div class="section-label">✦ Our Products</div>
        <h2 class="section-title">Bestsellers &<br>New Drops</h2>
      </div>
      <a href="products.html" class="btn btn-outline">View All Products →</a>
    </div>

    <div class="products-grid">

      <!-- Product 1 -->
      <article class="product-card">
        <div class="product-card__img-wrap">
          <a href="product-scrunchie.html">
            <img class="product-card__img" src="https://images.unsplash.com/photo-1630081757603-a46d414be089?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600" alt="Satin Cloud Scrunchie Set" loading="lazy">
          </a>
          <span class="product-card__badge best">Best Seller</span>
        </div>
        <div class="product-card__body">
          <div class="product-card__cat">Scrunchies</div>
          <h3 class="product-card__name"><a href="product-scrunchie.html">Satin Cloud Scrunchie Set</a></h3>
          <p class="product-card__desc">Ultra-soft satin, zero creasing. Set of 6 luxe colors.</p>
          <div>
            <span class="product-card__price">$28</span>
            <span class="product-card__price-old">$42</span>
          </div>
        </div>
        <div class="product-card__footer">
          <button class="btn btn-pink btn-sm" style="flex:1" onclick="addToCart('p001')">Add to Cart</button>
          <a href="product-scrunchie.html" class="btn btn-outline btn-sm">View</a>
        </div>
      </article>

      <!-- Product 2 -->
      <article class="product-card">
        <div class="product-card__img-wrap">
          <a href="product-clips.html">
            <img class="product-card__img" src="https://images.unsplash.com/photo-1554196222-3464352db975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600" alt="Pearl Pin-Up Clips" loading="lazy">
          </a>
          <span class="product-card__badge new">New</span>
        </div>
        <div class="product-card__body">
          <div class="product-card__cat">Clips</div>
          <h3 class="product-card__name"><a href="product-clips.html">Pearl Pin-Up Clips</a></h3>
          <p class="product-card__desc">Instant glamour, secure hold. Pack of 10 pearl pins.</p>
          <div>
            <span class="product-card__price">$32</span>
          </div>
        </div>
        <div class="product-card__footer">
          <button class="btn btn-pink btn-sm" style="flex:1" onclick="addToCart('p002')">Add to Cart</button>
          <a href="product-clips.html" class="btn btn-outline btn-sm">View</a>
        </div>
      </article>

      <!-- Product 3 -->
      <article class="product-card">
        <div class="product-card__img-wrap">
          <a href="product-claw.html">
            <img class="product-card__img" src="https://images.unsplash.com/photo-1648010035195-6b0a56e14667?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600" alt="Velvet Claw Clip Trio" loading="lazy">
          </a>
          <span class="product-card__badge sale">Sale</span>
        </div>
        <div class="product-card__body">
          <div class="product-card__cat">Claws</div>
          <h3 class="product-card__name"><a href="product-claw.html">Velvet Claw Clip Trio</a></h3>
          <p class="product-card__desc">Oversized velvet claws, 3 sophisticated tones. Never slips.</p>
          <div>
            <span class="product-card__price">$24</span>
            <span class="product-card__price-old">$36</span>
          </div>
        </div>
        <div class="product-card__footer">
          <button class="btn btn-pink btn-sm" style="flex:1" onclick="addToCart('p003')">Add to Cart</button>
          <a href="product-claw.html" class="btn btn-outline btn-sm">View</a>
        </div>
      </article>

      <!-- Product 4 -->
      <article class="product-card">
        <div class="product-card__img-wrap">
          <a href="product-ribbon.html">
            <img class="product-card__img" src="https://images.unsplash.com/photo-1728040407339-78b4e7e2a91e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600" alt="Silk Bow Ribbon Set" loading="lazy">
          </a>
          <span class="product-card__badge new">New</span>
        </div>
        <div class="product-card__body">
          <div class="product-card__cat">Ribbons</div>
          <h3 class="product-card__name"><a href="product-ribbon.html">Silk Bow Ribbon Set</a></h3>
          <p class="product-card__desc">100% pure silk. 4 ribbons, 120cm each. Effortlessly chic.</p>
          <div>
            <span class="product-card__price">$38</span>
          </div>
        </div>
        <div class="product-card__footer">
          <button class="btn btn-pink btn-sm" style="flex:1" onclick="addToCart('p004')">Add to Cart</button>
          <a href="product-ribbon.html" class="btn btn-outline btn-sm">View</a>
        </div>
      </article>

      <!-- Product 5 -->
      <article class="product-card">
        <div class="product-card__img-wrap">
          <a href="product-butterfly.html">
            <img class="product-card__img" src="https://images.unsplash.com/photo-1763347118969-824d513fa5dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=600" alt="Crystal Butterfly Set" loading="lazy">
          </a>
          <span class="product-card__badge sale">Sale</span>
        </div>
        <div class="product-card__body">
          <div class="product-card__cat">Butterfly</div>
          <h3 class="product-card__name"><a href="product-butterfly.html">Crystal Butterfly Set</a></h3>
          <p class="product-card__desc">Dazzling crystal clips. Set of 5 assorted sizes. Turns heads.</p>
          <div>
            <span class="product-card__price">$45</span>
            <span class="product-card__price-old">$65</span>
          </div>
        </div>
        <div class="product-card__footer">
          <button class="btn btn-pink btn-sm" style="flex:1" onclick="addToCart('p005')">Add to Cart</button>
          <a href="product-butterfly.html" class="btn btn-outline btn-sm">View</a>
        </div>
      </article>

    </div>
  </div>
</section>

<!-- FEATURES -->
<section style="padding:0;border-top:3px solid var(--black);border-bottom:3px solid var(--black);background:var(--white);">
  <div class="container" style="padding-left:0;padding-right:0;max-width:100%;">
    <div class="features-grid">
      <div class="feature-item">
        <div class="feature-icon">🚚</div>
        <div class="feature-title">Free Shipping $60+</div>
        <div class="feature-desc">Free standard delivery on all orders over $60. Fast dispatch, reliable delivery.</div>
      </div>
      <div class="feature-item">
        <div class="feature-icon">💎</div>
        <div class="feature-title">Premium Materials</div>
        <div class="feature-desc">Genuine silk, soft satin, solid velvet. Only the finest for your hair.</div>
      </div>
      <div class="feature-item">
        <div class="feature-icon">↩️</div>
        <div class="feature-title">30-Day Returns</div>
        <div class="feature-desc">Not in love? Return or exchange within 30 days, no questions asked.</div>
      </div>
      <div class="feature-item">
        <div class="feature-icon">💳</div>
        <div class="feature-title">Secure Checkout</div>
        <div class="feature-desc">Card, PayPal, or Cash on Delivery. 100% safe and encrypted payments.</div>
      </div>
    </div>
  </div>
</section>

<!-- PROMO BANNER -->
<section style="background:var(--pink);border-bottom:3px solid var(--black);padding:80px 0;">
  <div class="container text-center">
    <div class="section-label" style="background:var(--yellow);margin:0 auto 20px;">Limited Time Offer</div>
    <h2 style="font-size:clamp(36px,5vw,64px);font-weight:700;letter-spacing:-2px;color:var(--white);margin-bottom:16px;line-height:1.1;">
      Use code <span style="background:var(--yellow);color:var(--black);padding:0 12px;display:inline-block;">MANE10</span><br>for 10% off
    </h2>
    <p style="font-size:17px;color:rgba(255,255,255,.8);margin-bottom:36px;">Apply at checkout. Valid on all orders.</p>
    <a href="products.html" class="btn btn-white btn-lg">Shop the Collection →</a>
  </div>
</section>

<!-- NEWSLETTER -->
<section class="newsletter">
  <div class="container">
    <h2>Get <span>First Access</span> to New Drops</h2>
    <p>Join 50,000+ hair lovers. No spam — just launches, deals, and style inspo.</p>
    <form class="newsletter-form" onsubmit="handleNewsletter(event)">
      <input type="email" placeholder="Your email address" required>
      <button type="submit">Subscribe</button>
    </form>
  </div>
</section>

<!-- FOOTER -->
<footer class="footer">
  <div class="container">
    <div class="footer__top">
      <div>
        <div class="footer__logo">MANE.</div>
        <p class="footer__tagline">Premium hair accessories for the bold, the fearless, and the fabulous. Brutally beautiful.</p>
        <div class="footer__social">
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="TikTok">TK</a>
          <a href="#" aria-label="Pinterest">PT</a>
          <a href="#" aria-label="YouTube">YT</a>
        </div>
      </div>
      <div class="footer__col">
        <h4>Shop</h4>
        <ul>
          <li><a href="products.html">All Products</a></li>
          <li><a href="products.html">Scrunchies</a></li>
          <li><a href="products.html">Clips</a></li>
          <li><a href="products.html">Claw Clips</a></li>
          <li><a href="products.html">Ribbons</a></li>
          <li><a href="products.html">Butterfly Clips</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>Company</h4>
        <ul>
          <li><a href="about.html">About Us</a></li>
          <li><a href="contact.html">Contact</a></li>
          <li><a href="cart.html">Cart</a></li>
          <li><a href="checkout.html">Checkout</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>Legal</h4>
        <ul>
          <li><a href="privacy-policy.html">Privacy Policy</a></li>
          <li><a href="terms-conditions.html">Terms & Conditions</a></li>
          <li><a href="disclaimer.html">Disclaimer</a></li>
          <li><a href="cookie-policy.html">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <span class="footer__copy">© 2026 MANE. All rights reserved.</span>
      <div class="footer__payment">
        <span>We Accept:</span>
        <span class="pay-badge">VISA</span>
        <span class="pay-badge">MASTERCARD</span>
        <span class="pay-badge">AMEX</span>
        <span class="pay-badge">PAYPAL</span>
        <span class="pay-badge">COD</span>
      </div>
    </div>
  </div>
</footer>

<!-- COOKIE BANNER -->
<div class="cookie-banner" id="cookie-banner">
  <p>We use cookies to enhance your experience. Read our <a href="cookie-policy.html">Cookie Policy</a> for details.</p>
  <div class="cookie-banner__actions">
    <button class="btn btn-yellow btn-sm" onclick="acceptCookies()">Accept All</button>
    <button class="btn btn-outline btn-sm" style="border-color:var(--white);color:var(--white);" onclick="declineCookies()">Decline</button>
  </div>
</div>

<script src="js/script.js"></script>
</body>
</html>
