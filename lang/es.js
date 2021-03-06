export default async (context, locale) => {
  const api = context.$axios

  const { hero, about, what, how, ...rest } = await api.$get('/all/es')

  about.name = 'SOMOS'
  what.name = 'QUE HACEMOS.'
  how.name = 'COMO LO HACEMOS.'

  const analyses = {
    name: 'COMO ANALIZAMOS',
    analyses: rest.analyses,
  }

  const clients = {
    title: 'Confian en nosotros',
  }

  const portfolio = {
    name: 'QUÉ LOGRAMOS.',
    items: rest.portfolio,
  }

  const howDidWeDoIt = {
    name: 'CÓMO LO LOGRAMOS.',
  }

  const contact = {
    name: 'COMENCEMOS.',
    form: [
      'Contános como te llamas.',
      'Escribinos tu Email.',
      'Empresa.',
      'En qué te podemos ayudar?',
      'Gracias por contactarnos.',
    ],
    ambassadors: 'Contactar',
  }

  const ambassadors = {
    name: 'EMBAJADORES.',
    title: 'Zenda en el mundo.',
    ambassadors: rest.ambassadors,
  }

  const nav = {
    aboutMobile: 'Somos',
    about: 'Somos Zenda',
    what: 'Qué hacemos',
    how: 'Cómo lo hacemos',
    portfolio: 'Qué logramos',
    howDid: 'Cómo lo logramos',
  }
  const contactButton = {
    title: 'Contacto',
  }

  const cardsHero = {
    innovation: 'Innovación',
  }

  return {
    hero,
    about,
    what,
    how,
    analyses,
    clients,
    portfolio,
    howDidWeDoIt,
    contact,
    ambassadors,
    nav,
    contactButton,
    cardsHero,
  }
}
