/* ============================================
   NESTIFY — Main JavaScript
   ============================================ */

// ── PRODUCT CATALOGUE ──────────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 1,
    title: 'Black Tape',
    vendor: 'Nestify Basics',
    price: 5.99,
    comparePrice: null,
    badge: 'In Stock',
    badgeClass: '',
    category: 'essentials',
    stars: '★★★★★',
    ratingCount: 142,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1586864387789-628af9feed72?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1553949285-1ebf1dd53073?w=800&h=800&fit=crop&q=80',
    ],
    variants: ['Single Roll', '3-Pack', '6-Pack'],
    description: `
      <p>Heavy-duty black tape that sticks — and stays stuck. Ideal for cable management, labelling, crafts, repairs, and everything in between.</p>
      <ul>
        <li>Extra-strong adhesive backing</li>
        <li>Tear-resistant polyethylene film</li>
        <li>UV & moisture resistant</li>
        <li>Width: 48mm | Length: 50m per roll</li>
        <li>Temperature resistant: -10°C to 60°C</li>
      </ul>
    `,
    sku: 'NST-BT-001',
    reviews: [
      { name: 'Tom H.', location: 'Chicago, USA', stars: '★★★★★', text: '"Surprisingly good quality for the price. Holds everything together perfectly."' },
      { name: 'Mia L.', location: 'Sydney, AU', stars: '★★★★★', text: '"Used it to organise all my cables. Does the job and looks clean."' },
    ]
  },
  {
    id: 2,
    title: 'Carrot Cutter',
    vendor: 'Kitchen Pro',
    price: 12.99,
    comparePrice: 18.99,
    badge: 'Sale',
    badgeClass: 'sale',
    category: 'kitchen',
    stars: '★★★★☆',
    ratingCount: 89,
    images: [
      'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1447175008436-054170c2e979?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1564519070904-40139eb81e07?w=800&h=800&fit=crop&q=80',
    ],
    variants: null,
    description: `
      <p>Slice, dice, and julienne carrots in seconds with this ergonomic carrot cutter. Perfect for meal prep, soups, salads, and stir-fries.</p>
      <ul>
        <li>Food-grade stainless steel blades</li>
        <li>BPA-free ABS plastic handle</li>
        <li>Non-slip base for safety</li>
        <li>Dishwasher safe</li>
        <li>Multiple cut styles: rounds, julienne, half-moons</li>
      </ul>
    `,
    sku: 'NST-CC-002',
    reviews: [
      { name: 'Rachel B.', location: 'London, UK', stars: '★★★★☆', text: '"Cuts carrots so fast now! The non-slip base is really useful."' },
      { name: 'Kevin S.', location: 'Dallas, USA', stars: '★★★★★', text: '"Excellent for meal prep. Blades are sharp and the plastic feels solid."' },
    ]
  },
  {
    id: 3,
    title: 'Digital Food Measuring Spoon Scale',
    vendor: 'Kitchen Pro',
    price: 24.99,
    comparePrice: null,
    badge: 'Best Seller',
    badgeClass: '',
    category: 'kitchen',
    stars: '★★★★★',
    ratingCount: 312,
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1574781330855-d0db8cc6a79c?w=800&h=800&fit=crop&q=80',
    ],
    variants: null,
    description: `
      <p>The world's most accurate measuring spoon — with a built-in digital scale. Perfect for baking, cooking, coffee brewing, and tracking nutrition.</p>
      <ul>
        <li>Precision accuracy to 0.1g</li>
        <li>Max capacity: 500g</li>
        <li>Tare / zero function</li>
        <li>4 units: g, oz, ml, tsp</li>
        <li>Includes 2× AAA batteries</li>
        <li>Food-grade stainless steel spoon</li>
        <li>Auto power-off after 2 minutes</li>
      </ul>
    `,
    sku: 'NST-DMS-003',
    reviews: [
      { name: 'Jessica A.', location: 'New York, USA', stars: '★★★★★', text: '"Changed my baking game completely. So accurate and easy to use."' },
      { name: 'Daniel W.', location: 'Melbourne, AU', stars: '★★★★★', text: '"Brilliant for coffee dosing and protein powder. Well worth every penny."' },
      { name: 'Claire M.', location: 'Paris, FR', stars: '★★★★★', text: '"Compact, precise and the display is super clear. Love it."' },
    ]
  },
  {
    id: 4,
    title: 'Silicone Stretch Lids (Set of 6)',
    vendor: 'Nestify Green',
    price: 14.99,
    comparePrice: null,
    badge: 'Eco Pick',
    badgeClass: '',
    category: 'kitchen',
    stars: '★★★★★',
    ratingCount: 204,
    images: [
      'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&h=800&fit=crop&q=80',
    ],
    variants: ['Set of 6', 'Set of 12'],
    description: `
      <p>Say goodbye to plastic wrap! These reusable silicone stretch lids create an airtight seal over any bowl, cup, can or container.</p>
      <ul>
        <li>Set of 6 in graduated sizes: XS–XL</li>
        <li>Food-grade BPA-free silicone</li>
        <li>Microwave, freezer & dishwasher safe</li>
        <li>Stretch to fit round, square & irregular shapes</li>
        <li>Reusable — replaces hundreds of single-use bags</li>
        <li>Temperature range: -40°C to 230°C</li>
      </ul>
    `,
    sku: 'NST-SL-004',
    reviews: [
      { name: 'Emma T.', location: 'Bristol, UK', stars: '★★★★★', text: '"These are incredible. They stretch over everything and seal perfectly."' },
      { name: 'Noah G.', location: 'Vancouver, CA', stars: '★★★★★', text: '"Great eco alternative. So much better than cling film, and they last forever."' },
    ]
  },
  {
    id: 5,
    title: 'Apple Corer Slicer Peeler',
    vendor: 'Kitchen Pro',
    price: 19.99,
    comparePrice: 27.99,
    badge: 'Sale',
    badgeClass: 'sale',
    category: 'kitchen',
    stars: '★★★★☆',
    ratingCount: 167,
    images: [
      'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1619546952812-520e98064a52?w=800&h=800&fit=crop&q=80',
    ],
    variants: null,
    description: `
      <p>Core, slice, and peel an apple in under 10 seconds. Perfect for pies, snacks, baby food, and smoothies. Works on pears too!</p>
      <ul>
        <li>Stainless steel blades and peeling arm</li>
        <li>Suction-cup base for stability</li>
        <li>16-slice uniform cutting</li>
        <li>Removable parts — fully dishwasher safe</li>
        <li>Also works with pears, potatoes & kiwi</li>
        <li>Compact fold-away design for easy storage</li>
      </ul>
    `,
    sku: 'NST-ACP-005',
    reviews: [
      { name: 'Linda P.', location: 'Boston, USA', stars: '★★★★☆', text: '"Works perfectly for apple pies. Cores and peels in seconds!"' },
      { name: 'Finn O.', location: 'Dublin, IE', stars: '★★★★★', text: '"My kids love apples now because I can prepare them so quickly with this."' },
    ]
  },
  {
    id: 6,
    title: 'Daily Wellness Supplements',
    vendor: 'Nestify Health',
    price: 34.99,
    comparePrice: null,
    badge: 'New',
    badgeClass: '',
    category: 'health',
    stars: '★★★★★',
    ratingCount: 98,
    images: [
      'https://images.unsplash.com/photo-1550572017-edd951b55104?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1614468153291-fc9d72f47d34?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=800&h=800&fit=crop&q=80',
    ],
    variants: ['30 Capsules', '60 Capsules', '90 Capsules'],
    description: `
      <p>Fuel your body from the inside out with our comprehensive daily wellness blend. Formulated with clinically-backed ingredients for energy, immunity, and focus.</p>
      <ul>
        <li>Vitamin C, D3, B12 & Zinc complex</li>
        <li>Omega-3 fatty acids (Fish Oil 1000mg)</li>
        <li>Ashwagandha for stress support</li>
        <li>Magnesium for sleep & muscle recovery</li>
        <li>Vegan-friendly capsules (90-cap option)</li>
        <li>No artificial colours, flavours or preservatives</li>
        <li>Third-party lab tested for purity</li>
      </ul>
    `,
    sku: 'NST-DWS-006',
    reviews: [
      { name: 'Priya K.', location: 'Mumbai, IN', stars: '★★★★★', text: '"Noticeable improvement in energy levels after 3 weeks. Really impressed."' },
      { name: 'Chris L.', location: 'San Francisco, USA', stars: '★★★★★', text: '"Clean ingredients list, no fillers. These are now a permanent part of my routine."' },
    ]
  },
  {
    id: 7,
    title: 'Catagaroo Hoodie with Kangaroo Pocket',
    vendor: 'Nestify Apparel',
    price: 49.99,
    comparePrice: null,
    badge: 'Limited',
    badgeClass: '',
    category: 'apparel',
    stars: '★★★★★',
    ratingCount: 56,
    images: [
      'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop&q=80',
      'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&h=800&fit=crop&q=80',
    ],
    variants: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: `
      <p>The coziest hoodie you'll ever own — featuring an extra-wide kangaroo pocket big enough to carry your cat, a small dog, or just all your snacks.</p>
      <ul>
        <li>80% cotton / 20% polyester fleece blend</li>
        <li>Extra-deep kangaroo front pocket</li>
        <li>Adjustable drawstring hood</li>
        <li>Ribbed cuffs and hem</li>
        <li>Unisex relaxed fit</li>
        <li>Machine washable — stays soft wash after wash</li>
        <li>Available in Charcoal, Forest Green & Navy</li>
      </ul>
    `,
    sku: 'NST-CHK-007',
    reviews: [
      { name: 'Zoe F.', location: 'Edinburgh, UK', stars: '★★★★★', text: '"I literally carry my cat in the pocket. Life-changing purchase."' },
      { name: 'Marcus D.', location: 'Berlin, DE', stars: '★★★★★', text: '"Incredibly soft and the fit is perfect. Already ordered two more colours."' },
    ]
  }
];

// ── CART (localStorage) ────────────────────────────────────────────────────
function getCart() {
  try { return JSON.parse(localStorage.getItem('nestify_cart')) || []; }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem('nestify_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const cart = getCart();
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('#cart-count').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'flex' : 'none';
  });
}

function addToCart(title, price, variant) {
  const cart = getCart();
  const key = title + (variant ? `|${variant}` : '');
  const existing = cart.find(i => i.key === key);
  if (existing) {
    existing.qty++;
  } else {
    const prod = PRODUCTS.find(p => p.title === title || p.title.startsWith(title.replace(' Supplements','').trim()));
    cart.push({
      key,
      title,
      variant: variant || null,
      price,
      qty: 1,
      image: prod ? prod.images[0] : ''
    });
  }
  saveCart(cart);
  showToast(`✓ "${title}" added to cart`);
}

// ── TOAST ──────────────────────────────────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toast-msg');
  if (!toast) return;
  msgEl.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ── NAV HELPERS ────────────────────────────────────────────────────────────
function toggleMenu() {
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('drawer-overlay');
  if (!drawer) return;
  drawer.classList.toggle('open');
  overlay.classList.toggle('show');
}

function toggleSearch() {
  showToast('Search coming soon!');
}

// ── QUANTITY ───────────────────────────────────────────────────────────────
function changeQty(delta) {
  const input = document.getElementById('qty');
  if (!input) return;
  const val = Math.max(1, Math.min(99, (parseInt(input.value) || 1) + delta));
  input.value = val;
}

// ── PRODUCT PAGE ───────────────────────────────────────────────────────────
let currentProduct = null;
let selectedVariant = null;

function loadProduct(id) {
  const prod = PRODUCTS.find(p => p.id === id);
  if (!prod) { window.location.href = 'collections.html'; return; }
  currentProduct = prod;
  selectedVariant = prod.variants ? prod.variants[0] : null;

  document.title = `${prod.title} — Nestify`;
  document.getElementById('page-title').textContent = `${prod.title} — Nestify`;
  document.getElementById('breadcrumb-title').textContent = prod.title;
  document.getElementById('prod-vendor').textContent = prod.vendor;
  document.getElementById('prod-title').textContent = prod.title;
  document.getElementById('prod-stars').textContent = prod.stars;
  document.getElementById('prod-rating-count').textContent = `(${prod.ratingCount} reviews)`;
  document.getElementById('prod-price').textContent = `$${prod.price.toFixed(2)}`;
  document.getElementById('prod-description').innerHTML = prod.description;

  if (prod.comparePrice) {
    const comp = document.getElementById('prod-compare');
    comp.textContent = `$${prod.comparePrice.toFixed(2)}`;
    comp.style.display = 'inline';
    document.getElementById('prod-price').classList.add('price-sale');
  }

  document.getElementById('prod-meta').innerHTML = `
    <p>SKU: <span>${prod.sku}</span></p>
    <p>Vendor: <span>${prod.vendor}</span></p>
    <p>Category: <span>${prod.category.charAt(0).toUpperCase() + prod.category.slice(1)}</span></p>
  `;

  // Gallery
  const mainImg = document.getElementById('main-img');
  mainImg.src = prod.images[0];
  mainImg.alt = prod.title;

  const thumbs = document.getElementById('gallery-thumbs');
  thumbs.innerHTML = prod.images.map((src, i) => `
    <div class="gallery-thumb ${i === 0 ? 'active' : ''}" onclick="switchImage(${i})">
      <img src="${src}" alt="${prod.title} ${i+1}" loading="lazy" />
    </div>
  `).join('');

  // Variants
  if (prod.variants) {
    document.getElementById('variants-section').style.display = 'block';
    document.getElementById('selected-variant').textContent = selectedVariant;
    document.getElementById('variant-options').innerHTML = prod.variants.map(v => `
      <button class="variant-btn ${v === selectedVariant ? 'active' : ''}" onclick="selectVariant('${v}')">${v}</button>
    `).join('');
  }

  // Reviews
  document.getElementById('review-heading').textContent = `${prod.ratingCount} Reviews for ${prod.title}`;
  document.getElementById('reviews-grid').innerHTML = prod.reviews.map(r => `
    <div class="testimonial-card">
      <div class="testimonial-stars">${r.stars}</div>
      <p class="testimonial-text">${r.text}</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${r.name[0]}</div>
        <div>
          <div class="testimonial-name">${r.name}</div>
          <div class="testimonial-location">${r.location}</div>
        </div>
      </div>
    </div>
  `).join('');

  // Related products (excluding current)
  const related = PRODUCTS.filter(p => p.id !== id).slice(0, 4);
  document.getElementById('related-grid').innerHTML = related.map(p => `
    <div class="product-card">
      <div class="product-card-media">
        <img src="${p.images[0]}" alt="${p.title}" loading="lazy" />
        <span class="product-badge ${p.badgeClass}">${p.badge}</span>
        <div class="product-card-quick-add">
          <button class="btn-green btn" onclick="addToCart('${p.title}', ${p.price})">Quick Add — $${p.price.toFixed(2)}</button>
        </div>
      </div>
      <div class="product-card-info">
        <p class="product-card-vendor">${p.vendor}</p>
        <h3 class="product-card-title"><a href="product.html?id=${p.id}">${p.title}</a></h3>
        <div class="product-price">
          <span class="price ${p.comparePrice ? 'price-sale' : ''}">$${p.price.toFixed(2)}</span>
          ${p.comparePrice ? `<span class="price-compare">$${p.comparePrice.toFixed(2)}</span>` : ''}
        </div>
        <div class="product-rating"><span class="stars">${p.stars}</span><span class="rating-count">(${p.ratingCount})</span></div>
      </div>
    </div>
  `).join('');
}

function switchImage(index) {
  if (!currentProduct) return;
  document.getElementById('main-img').src = currentProduct.images[index];
  document.querySelectorAll('.gallery-thumb').forEach((t, i) => {
    t.classList.toggle('active', i === index);
  });
}

function selectVariant(variant) {
  selectedVariant = variant;
  document.getElementById('selected-variant').textContent = variant;
  document.querySelectorAll('.variant-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent === variant);
  });
}

function addCurrentToCart() {
  if (!currentProduct) return;
  const qty = parseInt(document.getElementById('qty').value) || 1;
  for (let i = 0; i < qty; i++) {
    addToCart(currentProduct.title, currentProduct.price, selectedVariant);
  }
}

function buyNow() {
  addCurrentToCart();
  window.location.href = 'cart.html';
}

// ── CART PAGE ──────────────────────────────────────────────────────────────
function renderCartPage() {
  const cart = getCart();
  const emptyEl = document.getElementById('empty-cart');
  const contentEl = document.getElementById('cart-content');
  const countEl = document.getElementById('cart-item-count');

  if (!emptyEl) return;

  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  countEl.textContent = totalQty > 0 ? `(${totalQty} item${totalQty !== 1 ? 's' : ''})` : '';

  if (cart.length === 0) {
    emptyEl.style.display = 'block';
    contentEl.style.display = 'none';
    return;
  }

  emptyEl.style.display = 'none';
  contentEl.style.display = 'grid';

  const listEl = document.getElementById('cart-items-list');
  listEl.innerHTML = cart.map((item, idx) => `
    <div class="cart-item" id="cart-item-${idx}">
      <div class="cart-item-image">
        <img src="${item.image || 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop'}" alt="${item.title}" loading="lazy" />
      </div>
      <div>
        <div class="cart-item-title">${item.title}</div>
        ${item.variant ? `<div class="cart-item-variant">${item.variant}</div>` : ''}
        <div class="qty-selector" style="margin-top:10px;">
          <button class="qty-btn" onclick="updateCartQty(${idx}, -1)">−</button>
          <input class="qty-input" type="number" value="${item.qty}" min="1" max="99"
            onchange="setCartQty(${idx}, this.value)" style="width:44px;" />
          <button class="qty-btn" onclick="updateCartQty(${idx}, 1)">+</button>
        </div>
        <div class="cart-item-remove" onclick="removeFromCart(${idx})">Remove</div>
      </div>
      <div>
        <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
        <div style="font-size:12px;color:var(--color-text-muted);margin-top:3px;">$${item.price.toFixed(2)} each</div>
      </div>
    </div>
  `).join('');

  updateCartSummary();
}

function updateCartSummary() {
  const cart = getCart();
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const totalQty = cart.reduce((s, i) => s + i.qty, 0);
  const shipping = subtotal >= 50 ? 'Free' : '$4.99';
  const shippingVal = subtotal >= 50 ? 0 : 4.99;
  const total = subtotal + shippingVal;

  const qtyEl = document.getElementById('sum-qty');
  const subEl = document.getElementById('sum-subtotal');
  const shipEl = document.getElementById('sum-shipping');
  const totEl = document.getElementById('sum-total');

  if (qtyEl) qtyEl.textContent = totalQty;
  if (subEl) subEl.textContent = `$${subtotal.toFixed(2)}`;
  if (shipEl) {
    shipEl.textContent = shipping;
    shipEl.style.color = shipping === 'Free' ? 'var(--color-accent)' : '';
    shipEl.style.fontWeight = shipping === 'Free' ? '700' : '';
  }
  if (totEl) totEl.textContent = `$${total.toFixed(2)}`;
}

function updateCartQty(idx, delta) {
  const cart = getCart();
  if (!cart[idx]) return;
  cart[idx].qty = Math.max(1, cart[idx].qty + delta);
  saveCart(cart);
  renderCartPage();
}

function setCartQty(idx, val) {
  const cart = getCart();
  if (!cart[idx]) return;
  cart[idx].qty = Math.max(1, parseInt(val) || 1);
  saveCart(cart);
  renderCartPage();
}

function removeFromCart(idx) {
  const cart = getCart();
  const name = cart[idx] ? cart[idx].title : 'Item';
  cart.splice(idx, 1);
  saveCart(cart);
  renderCartPage();
  showToast(`"${name}" removed from cart`);
}

function checkout() {
  showToast('Checkout coming soon! This is a prototype store.');
}

function applyPromo() {
  const code = document.getElementById('promo-input').value.trim().toUpperCase();
  const msg = document.getElementById('promo-msg');
  if (code === 'NEST10') {
    msg.textContent = '✓ 10% discount applied!';
    msg.style.color = 'var(--color-accent)';
    msg.style.display = 'block';
  } else {
    msg.textContent = '✗ Invalid discount code.';
    msg.style.color = 'var(--color-error)';
    msg.style.display = 'block';
  }
}

// ── NEWSLETTER ─────────────────────────────────────────────────────────────
function subscribeNewsletter(e) {
  e.preventDefault();
  showToast('🎉 You\'re subscribed! Check your inbox for a welcome discount.');
  e.target.reset();
}

// ── INIT ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  updateCartBadge();
});
