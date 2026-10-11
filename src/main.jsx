
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Menu,
  X,
  MapPin,
  Phone,
  CarFront,
  CookingPot,
  Trees,
  Sparkles,
  Flower2,
  Heart,
  Users,
  UserRound,
  ArrowRight,
  MessageCircle,
  Waves,
  Instagram,
  Facebook,
  ExternalLink,
  Sun,
  BedDouble,
} from 'lucide-react';
import { SITE, whatsappLink } from './config';
import './styles.css';

const photos = {
  hero: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2200&q=90',
  home: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1100&q=85',
  room1: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=85',
  room2: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=900&q=85',
  food1: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=85',
  food2: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=800&q=85',
  food3: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=85',
  coast: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=85',
  temple: 'https://images.unsplash.com/photo-1606293926075-69a00db01b60?auto=format&fit=crop&w=700&q=85',
  culture: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=700&q=85',
  fishing: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=700&q=85',
  dance: 'https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=700&q=85',
  beach1: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=85',
  beach2: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=800&q=85',
  beach3: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=85',
  beach4: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=800&q=85',
  veranda: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=85',
};

const nav = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Rooms', 'rooms'],
  ['Food', 'food'],
  ['Culture', 'culture'],
  ['Gallery', 'gallery'],
  ['Location', 'location'],
  ['Contact', 'contact'],
];

function Logo() {
  return (
    <a
      className="brand"
      href="#home"
      aria-label="Coastal Kuteera home"
    >
      <span className="brand-art">
        🌴<span>⌂</span>
      </span>

      <span className="brand-words">
        <b>COASTAL KUTEERA</b>
        <strong>{SITE.kannada}</strong>
        <small>— H O M E S T A Y —</small>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      <Logo />

      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? 'nav open' : 'nav'}>
        {nav.map(([label, id]) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}

        <a
          className="nav-book"
          href={whatsappLink(
            'Hello! I would like to book a stay at Coastal Kuteera Homestay.'
          )}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={15} />
          Book via WhatsApp
        </a>
      </nav>
    </header>
  );
}

function SectionTitle({ eyebrow, title, sub }) {
  return (
    <div className="section-title">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}

      <h2>{title}</h2>

      {sub && <p>{sub}</p>}
    </div>
  );
}

function Hero() {
  return (
    <section
        id="home"
        className="hero"
        style={{ '--hero-image': "url('/be.png')" }}
      >
      <div className="hero-shade" />

      <div className="hero-content">
        <p className="script">Welcome to</p>

        <h1>COASTAL KUTEERA</h1>

        <div className="hero-kannada">ಕೋಸ್ಟಲ್ ಕುಟೀರ</div>

        <div className="homestay-label">
          — H O M E S T A Y —
        </div>

        <p className="hero-tagline">
          A Peaceful Escape by the Coast
        </p>

        <p className="hero-location">
          <MapPin size={17} />
          Gokarna, Karnataka
        </p>

        <div className="hero-actions">
          <a className="btn btn-green" href="#rooms">
            Explore Stay
            <ArrowRight size={16} />
          </a>

          <a
            className="btn btn-light"
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} />
            Book via WhatsApp
          </a>
        </div>
      </div>

      <div className="hero-note script">
        Good Food
        <br />
        Good Vibes
        <br />
        Gokarna <span>〰</span>
      </div>

      <div className="hero-boat" aria-hidden="true">
        <img src="/BxCgacEVF6.svg" alt="" />
      </div>

    </section>
  );
}

function About() {
  return (
    <section id="about" className="about section-wrap">
      <div className="about-copy">
        <SectionTitle title="About Our Homestay" />

        <p>
          Coastal Kuteera is a cozy homestay in the heart of Gokarna,
          where the sound of waves and the warmth of local hospitality
          create a perfect getaway. Inspired by the simple coastal life
          of Uttara Kannada, we offer a peaceful stay close to nature,
          beaches and beautiful local culture.
        </p>

        <div className="guest-types">
          <span><Heart /> Couples</span>
          <span><Users /> Families</span>
          <span><Users /> Friends</span>
          <span><UserRound /> Solo Travellers</span>
        </div>

        <div className="wave-line">〰〰</div>
      </div>

      <div className="about-photo">
        <img
          src="/home.png"
          alt="Tropical homestay surrounded by greenery"
        />

        <div className="paper-note script">
          “A home
          <br />
          away from
          <br />
          home”
          <span>〰</span>
          <b>⌂</b>
        </div>
      </div>
    </section>
  );
}

const amenityList = [
   { Icon: BedDouble, label: 'Comfortable Rooms' },
  { Icon: CarFront, label: 'Parking' },
  { Icon: CookingPot, label: 'Home-cooked Food' },
  { Icon: Trees, label: 'Outdoor Seating' },
  { Icon: Sparkles, label: 'Clean & Hygienic' },
  { Icon: Flower2, label: 'Friendly Hosts' },
];

function Rooms() {
  const rooms = [
    {
      name: 'AC Rooms',
      img: "/r1.jpg",
      desc: 'Spacious & Comfortable Rooms',
      features: [
        'Attached Bathroom',
        'Air Conditioning',
      ],
    },
    {
      name: 'Non-AC Rooms',
      img: "/r2.jpg",
      desc: 'Cozy & Clean Rooms',
      features: [
        'Attached Bathroom',
        'Fan',
      ],
    },
  ];

  return (
    <section id="rooms" className="rooms section-wrap">
      <div className="rooms-main">
        <SectionTitle
          title="Our Rooms"
          sub="Comfortable stays with a touch of coastal charm."
        />

        <div className="room-grid">
          {rooms.map((room) => (
            <article className="room-card" key={room.name}>
              <img src={room.img} alt={room.name} />

              <div className="room-card-body">
                <h3>{room.name}</h3>

                <ul>
                  <li>
                    <BedDouble />
                    {room.desc}
                  </li>

                  {room.features.map((feature) => (
                    <li key={feature}>
                      <Sparkles />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  className="brush-btn"
                  href={whatsappLink(
                    `Hello, I would like to enquire about ${room.name} at Coastal Kuteera Homestay.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore {room.name}
                  <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="amenities">
        <h3>Amenities & Facilities</h3>

        <div className="amenity-grid">
          {amenityList.map(({ Icon, label }) => (
            <div className="amenity" key={label}>
              <Icon />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Food() {
  return (
    <section id="food" className="food-band">
      <div className="food-inner">
        <div className="food-heading">
          <h2>Coastal Foods</h2>

          <p>Fresh seafood, authentic flavours, local spices.</p>

          <div className="script food-script">
            Fresh Catch
            <br />
            Local Taste
            <br />
            Real Coastal Food <span>〰</span>
          </div>
        </div>

       
        <div className="food-pics">
          <img
            className="food-large"
            src="/images.jpg"
            alt="Fresh coastal seafood"
          />

          <img
            src="/f1.jpg"
            alt="Traditional seafood dish"
          />

          <img
            src="/f2.webp"
            alt="Coastal cuisine"
          />
        </div>

        <div className="food-coast">
          <img
              src="/fish.avif"
              alt="Coastal cuisine"

          />

          <p>
            Seafood • Traditional Recipes • Local Flavours
          </p>
        </div>
      </div>
    </section>
  );
}

const cultures = [
  ["/c1.jpg"],
  [ "/c2.jpg"],
  [ "/c3.jpg"],
  [ "/c4.jpg"],
];

function Culture() {
  return (
    <section id="culture" className="section-wrap culture">
      <SectionTitle
        title="Culture of Uttara Kannada"
        sub="Rich traditions, temple town vibes and beautiful coastal life."
      />

      <div className="culture-layout">
        <div className="culture-grid">
          {cultures.map(([ img]) => (
            <article className="image-card" key={name}>
              <img src={img} alt={name} />
            </article>
          ))}
        </div>

        <aside className="side-note script">
          ☼
          <span>
            “Experience
            <br />
            the culture
            <br />
            of Uttara Kannada”
          </span>
          <b>⌂</b>
        </aside>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [
    "/r1.jpg",
    "/r2.jpg",
    "/r3.jpg",
    "/r5.jpg",
    "/b1.jpg"  
  ];

  return (
    <section id="gallery" className="gallery section-wrap">
      <div className="brush-heading">
        <div>
          <h2>Gallery</h2>
        </div>

        <a
          className="outline-btn"
          href={whatsappLink(
            'Hello, please share more photos of Coastal Kuteera Homestay.'
          )}
          target="_blank"
          rel="noreferrer"
        >
          View More Photos
          <ArrowRight size={14} />
        </a>
      </div>

      <div className="gallery-strip">
        {imgs.map((img, i) => (
          <a
            href={img}
            target="_blank"
            rel="noreferrer"
            key={`${img}-${i}`}
          >
            <img
              src={img}
              alt={`Coastal Kuteera gallery ${i + 1}`}
            />
          </a>
        ))}
      </div>
    </section>
  );
}

const places = [
  ["/e1.jpg"],
  ["/e2.avif"],
  [ "/e3.jpg"],
  [ "/e4.jpg"],
];

function Explore() {
  return (
    <section id="explore" className="explore section-wrap">
      <SectionTitle
        title="Explore Uttara Kannada"
        sub="Beaches, temples and unforgettable experiences."
      />

      <div className="explore-layout">
        <div className="place-grid">
          {places.map(([ img]) => (
            <a
              className="place-card"
              href={SITE.mapUrl}
              target="_blank"
              rel="noreferrer"

            >
              <img src={img} />
            </a>
          ))}
        </div>

        <aside className="side-note script">
        “There’s more to discover…
        <br />
        I know the hidden gems,
        <br />
        come, let me show you.”
        <b>⌂</b>
      </aside>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section
      id="location"
      className="location-section section-wrap"
    >
      <SectionTitle
        title="Find Us in Gokarna"
        sub="Located in a peaceful area, close to the beaches and local attractions."
      />

      <div className="location-grid">
        <div className="map-frame">
          <iframe
            title="Map showing Coastal Kuteera Homestay area"
            src="https://maps.google.com/maps?q=Hiregutti%2C%20Kumta%2C%20Karnataka&t=&z=10&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="location-card">
          <div className="pin-icon">
            <MapPin />
          </div>

          <div>
            <h3>Coastal Kuteera Homestay</h3>
            <p>Gokarna, Karnataka</p>

            <a
              className="btn btn-green directions"
              href={SITE.mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
              <ArrowRight size={15} />
            </a>

            <a
              className="map-link"
              href={SITE.mapUrl}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={13} />
              View on Google Maps
            </a>
          </div>
        </div>

        <aside className="location-note script">
          The ocean
          <br />
          is calling...
          <br />
          Are you coming?
          <Waves />
        </aside>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <>
      <section id="contact" className="contact-band">
        <div className="contact-inner">
          <div className="contact-lead">
            <span className="whatsapp-icon">
              <MessageCircle />
            </span>

            <div>
              <h3>Book Your Stay</h3>
              <p>
                For enquiries, bookings and more information
                <br />
                reach us on WhatsApp.
              </p>
            </div>
          </div>

          <div className="contact-phones">
            <a href="tel:+916360888243">
              <Phone />
              6360888243
            </a>

            <i>|</i>

            <a href="tel:+916360974841">
              6360974841
            </a>

            <a
              className="chat-btn"
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={15} />
              Chat on WhatsApp
            </a>
          </div>

          <div className="contact-place">
            <MapPin />
            <span>Gokarna, Karnataka</span>

            <p>
              Follow for
              <br />
              more coastal vibes
            </p>

            <div className="socials">
              <a
                aria-label="Instagram"
                href={SITE.insta}
                target="_blank"
                rel="noreferrer"
              >
                <Instagram />
              </a>

             
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <Logo />

        <nav>
          {nav
            .filter(([label]) => label !== 'Home')
            .map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
        </nav>

        <div className="footer-meta">
          <span>
            Privacy Policy&nbsp;
          </span>

          <small>
            © 2026 Coastal Kuteera Homestay. All rights reserved.
          </small>
        </div>
      </footer>

      <a
        className="floating-wa"
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Book on WhatsApp"
      >
        <MessageCircle />
      </a>
    </>
  );
}

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Rooms />
        <Food />
        <Culture />
        <Gallery />
        <Explore />
        <Location />
      </main>

      <Contact />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
