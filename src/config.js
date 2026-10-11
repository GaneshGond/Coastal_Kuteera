export const SITE = {
  name: 'Coastal Kuteera Homestay',
  kannada: 'ಕೋಸ್ಟಲ್ ಕುಟೀರ ಹೋಮ್‌ಸ್ಟೇ',
  location: 'Gokarna, Karnataka',
  address: 'Near Village Accountant Office, Hiregutti, Kumta, Karnataka',
  mapUrl: 'https://maps.app.goo.gl/d86vQEX21BjwNubs5',
  phones: ['6360888243', '6360974841'],
  whatsappNumber: '916360888243',
  insta:"https://www.instagram.com/coastal_kuteera?obrf=bG12aHpiZzMwMjh6",
};
export const whatsappLink = (message = 'Hello Coastal Kuteera Homestay, I would like to enquire about a stay.') =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
