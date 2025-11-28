[script.js](https://github.com/user-attachments/files/23826279/script.js)# SynapseUpskill-WelshBacc2
[index.html](https://github.com/user-attachments/files/23826275/index.html)
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Synapse UpSkill — Empowering Your People, Powering Your Future</title>
  <meta name="description" content="Synapse UpSkill: industry-specific, technology-agnostic upskilling and change management for mid-market energy companies." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <header>
      <div class="brand">
        <div class="logo" aria-hidden>
          <!-- Inline SVG logo: green synapse-like curve -->
          <svg width="52" height="52" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stop-color="#16a34a" />
                <stop offset="1" stop-color="#0ea5a4" />
              </linearGradient>
            </defs>
            <rect width="64" height="64" rx="12" fill="#021014" />
            <path d="M14 36c6-8 16-12 24-10 6 1.6 10 6.8 12 10" stroke="url(#g1)" stroke-width="3.8" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="22" cy="28" r="3.5" fill="#16a34a" />
            <circle cx="42" cy="40" r="3" fill="#0ea5a4" />
          </svg>
        </div>
        <div>
          <h1>Synapse UpSkill</h1>
          <div class="slogan">Empowering Your People, Powering Your Future</div>
        </div>
      </div>
      <nav>
        <a href="#services">Services</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="card">
          <div class="eyebrow">People-first digital transformation</div>
          <div class="lead"><strong>Bridge the gap between technology and operations.</strong>
            <p>Synapse UpSkill delivers industry-specific training, agnostic consultancy and change management for mid-market energy companies.</p>
          </div>
          <div class="cta-row">
            <button class="btn btn-primary" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">Book a Discovery Call</button>
            <a class="btn btn-ghost" href="#pricing">View Pricing</a>
          </div>

          <div style="margin-top:18px;color:var(--muted);font-size:14px">Quick facts: 12-month Transformation Partnerships • Custom learning pathways • OT-aware modules</div>
        </div>

        <aside>
          <div class="card">
            <h3 style="margin-top:0">Why clients choose us</h3>
            <ul style="color:var(--muted);line-height:1.7">
              <li>Vendor-agnostic consultancy covering any technology stack.</li>
              <li>Training designed for field engineers and operational teams.</li>
              <li>Change management to embed adoption, not just rollouts.</li>
            </ul>
            <div style="margin-top:12px"><strong>Testimonial</strong>
              <p style="margin:8px 0;color:var(--muted)">"Synapse helped upskill our ops team quickly — adoption increased 45% within 6 months." — Ops Manager, Independent E&P</p>
            </div>
          </div>
        </aside>
      </section>

      <section id="services" style="margin-top:6px">
        <div class="features">
          <div class="feature card">
            <h3>Industry Consultancy</h3>
            <p>Practical, impartial advice on digital strategy and technology selection tailored to mid-market operators.</p>
          </div>
          <div class="feature card">
            <h3>Custom Training Platform</h3>
            <p>O&G-focused learning paths, OT-aware modules, and blended delivery (e-learning + workshops).</p>
          </div>
          <div class="feature card">
            <h3>Change Management</h3>
            <p>Adoption planning, stakeholder coaching, and measurable uptake metrics to sustain transformation.</p>
          </div>
        </div>

        <div class="two-col">
          <div class="card">
            <h3 id="about">About Synapse UpSkill</h3>
            <p style="color:var(--muted)">Synapse UpSkill integrates three pillars: industry-specific consultancy, an O&G-focused digital training platform, and change management support to help mid-market energy firms unlock value from digital investments. We are technology-agnostic and people-first.</p>

            <h4 style="margin-top:14px">Evidence & Research</h4>
            <div class="competitors">
              <ul>
                <li><strong>SLB (Schlumberger):</strong> Enterprise digital platforms — https://www.slb.com/digital/digital-platform</li>
                <li><strong>Cognite:</strong> Industrial DataOps & Cognite Data Fusion — https://www.cognite.com/en/products/cognite-data-fusion</li>
                <li><strong>QA Ltd:</strong> Broad UK training — https://www.qa.com/apprenticeships/</li>
              </ul>
            </div>
          </div>

          <aside class="card pricing">
            <h3 id="pricing">Pricing (Example)</h3>
            <div class="price">£25,000 <span style="font-weight:600;font-size:14px">/ 12-month Transformation Partnership</span></div>
            <div class="list">Includes: consultancy, platform access, 4 workshops, and adoption coaching.</div>
            <button class="btn btn-primary" style="margin-top:10px" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">Start a Pilot</button>
          </aside>
        </div>
      </section>

      <section style="margin-top:28px" id="contact">
        <div class="card">
          <h3>Contact & Bookings</h3>
          <p style="color:var(--muted)">Interested in a pilot or want more information? Get in touch for a free discovery call.</p>

          <form onsubmit="event.preventDefault(); handleSend();">
            <input id="name" placeholder="Your name" required>
            <input id="company" placeholder="Company" required>
            <input id="email" placeholder="Email" type="email" required>
            <select id="interest">
              <option value="pilot">Pilot Programme</option>
              <option value="consult">Consultancy</option>
              <option value="training">Training Platform</option>
            </select>
            <textarea id="message" placeholder="Tell us about your challenge (optional)"></textarea>
            <div style="display:flex;gap:10px">
              <button class="btn btn-primary" type="submit">Send Enquiry</button>
              <button class="btn btn-ghost" type="button" onclick="window.open('mailto:hello@synapseupskill.example?subject=Synapse%20Enquiry','_self')">Email Us</button>
            </div>
            <div id="feedback" style="color:var(--accent);margin-top:8px;font-weight:700"></div>
          </form>
        </div>
      </section>

      <footer style="margin-top:26px;display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap">
        <div>
          <strong>Synapse UpSkill</strong> — Empowering Your People, Powering Your Future<br>
          <small style="color:var(--muted)">© Synapse UpSkill • All rights reserved</small>
        </div>
        <div style="text-align:right;color:var(--muted)">
          Evidence links: <br>
          SLB: https://www.slb.com/digital/digital-platform • Cognite: https://www.cognite.com/en/products/cognite-data-fusion • QA: https://www.qa.com/
        </div>
      </footer>
    </main>
  </div>
  [Uploadifunction handleSend(){
      const name = document.getElementById('name').value.trim();
      const company = document.getElementById('company').value.trim();
      const email = document.getElementById('email').value.trim();
      const interest = document.getElementById('interest').value;
      const message = document.getElementById('message').value.trim();
      const feedback = document.getElementById('feedback');

      if(!name || !company || !email){
        feedback.style.color = '#ffb4b4';
        feedback.textContent = 'Please complete the required fields.';
        return;
      }

      // Fallback behaviour: generate mailto link (no backend)
      const subject = encodeURIComponent('Synapse UpSkill Enquiry: ' + interest + ' - ' + company);
      const body = encodeURIComponent('Name: ' + name + '\nCompany: ' + company + '\nEmail: ' + email + '\n\nMessage:\n' + message);
      const mailto = 'mailto:hello@synapseupskill.example?subject=' + subject + '&body=' + body;
      // Open mail client
      window.open(mailto, '_self');
      feedback.style.color = 'var(--accent)';
      feedback.textContent = 'Your enquiry has opened in your email client. Send the message to complete the enquiry.';
    }
ng script.js…]()


  <script src="script.js"></script>
</body>
</html>
[style.css](https://github.com/user-attachments/files/23826281/style.css)
:root{--bg:#0f1724;--card:#0b1220;--muted:#94a3b8;--accent:#16a34a;--accent-2:#0ea5a4;--glass: rgba(255,255,255,0.04)}
    *{box-sizing:border-box}body{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,'Helvetica Neue',Arial;line-height:1.5;margin:0;background:linear-gradient(180deg,#071022 0%, #071827 100%);color:#e6eef6}
    a{color:var(--accent)}
    .container{max-width:1100px;margin:0 auto;padding:36px}
    header{display:flex;align-items:center;justify-content:space-between;gap:20px}
    .brand{display:flex;align-items:center;gap:14px}
    .logo{width:52px;height:52px;display:inline-flex;align-items:center;justify-content:center;background:transparent}
    .logo svg{display:block}
    h1{font-size:20px;margin:0;font-weight:700}
    .slogan{color:var(--muted);font-size:13px}
    nav a{color:var(--muted);text-decoration:none;margin-left:18px;font-weight:600}

    /* Hero */
    .hero{display:grid;grid-template-columns:1fr 420px;gap:28px;align-items:center;padding:40px 0}
    .card{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));border-radius:14px;padding:28px;box-shadow:0 6px 30px rgba(2,6,23,0.6)}
    .eyebrow{display:inline-block;padding:6px 10px;border-radius:999px;background:var(--glass);color:var(--accent);font-weight:700;font-size:12px}
    .lead{font-size:28px;margin:14px 0 8px}
    .lead p{margin:0;color:#cfe8ff}
    .cta-row{display:flex;gap:14px;margin-top:18px}
    .btn{padding:12px 18px;border-radius:10px;font-weight:700;border:0;cursor:pointer}
    .btn-primary{background:linear-gradient(90deg,var(--accent),var(--accent-2));color:#042017}
    .btn-ghost{background:transparent;border:1px solid rgba(255,255,255,0.06);color:var(--muted)}

    /* Features */
    .features{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin:28px 0}
    .feature{background:var(--card);padding:18px;border-radius:12px}
    .feature h3{margin:6px 0 6px}
    .feature p{margin:0;color:var(--muted);font-size:14px}

    /* Services & pricing */
    .two-col{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-top:24px}
    .pricing{padding:18px;border-radius:12px;background:linear-gradient(180deg, rgba(255,255,255,0.02), transparent)}
    .price{font-size:28px;font-weight:800;color:#fff}
    .list{margin:12px 0;color:var(--muted)}

    /* Competitors */
    .competitors{margin-top:20px}
    .competitors ul{color:var(--muted);line-height:1.6}

    /* Contact */
    form{display:grid;gap:10px}
    input,textarea,select{background:transparent;border:1px solid rgba(255,255,255,0.06);padding:10px;border-radius:8px;color:#e6eef6}
    textarea{min-height:120px}
    footer{margin-top:36px;color:var(--muted);font-size:13px}

    /* Responsive */
    @media(max-width:980px){.hero{grid-template-columns:1fr;}.features{grid-template-columns:1fr 1fr}.two-col{grid-template-columns:1fr}.container{padding:20px}}
    @media(max-width:560px){.features{grid-template-columns:1fr}}
